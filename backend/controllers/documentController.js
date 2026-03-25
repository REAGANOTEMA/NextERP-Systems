const db = require('../config/database');

// Get user documents
const getUserDocuments = async (req, res) => {
  try {
    const userId = req.user.userId;
    const { category } = req.query;

    let query = `
      SELECT d.*, u.first_name as uploader_name, u.last_name
      FROM documents d
      LEFT JOIN users u ON d.uploaded_by = u.id
      WHERE (d.uploaded_by = ? OR d.is_public = 1)
    `;
    const params = [userId];

    if (category) {
      query += ' AND d.category = ?';
      params.push(category);
    }

    query += ' ORDER BY d.uploaded_at DESC';

    const [documents] = await db.execute(query, params);

    res.json({
      success: true,
      documents
    });
  } catch (error) {
    console.error('Get documents error:', error);
    res.status(500).json({ success: false, message: 'Failed to fetch documents' });
  }
};

// Upload document
const uploadDocument = async (req, res) => {
  try {
    const userId = req.user.userId;
    const { title, description, category, is_public = false } = req.body;
    const file_path = req.file ? `/uploads/${req.file.filename}` : null;

    // Validate input
    if (!title || !file_path) {
      return res.status(400).json({ success: false, message: 'Title and file are required' });
    }

    // Get file info
    const file_type = req.file ? req.file.mimetype : null;
    const file_size = req.file ? req.file.size : null;

    const [result] = await db.execute(`
      INSERT INTO documents (title, description, file_path, file_type, file_size, uploaded_by, category, is_public)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `, [title, description, file_path, file_type, file_size, userId, category, is_public]);

    res.json({
      success: true,
      message: 'Document uploaded successfully',
      documentId: result.insertId
    });
  } catch (error) {
    console.error('Upload document error:', error);
    res.status(500).json({ success: false, message: 'Failed to upload document' });
  }
};

// Delete document
const deleteDocument = async (req, res) => {
  try {
    const userId = req.user.userId;
    const { documentId } = req.params;

    // Check if document exists and user owns it
    const [documents] = await db.execute(
      'SELECT id FROM documents WHERE id = ? AND uploaded_by = ?',
      [documentId, userId]
    );

    if (documents.length === 0) {
      return res.status(404).json({ success: false, message: 'Document not found or access denied' });
    }

    await db.execute('DELETE FROM documents WHERE id = ?', [documentId]);

    res.json({
      success: true,
      message: 'Document deleted successfully'
    });
  } catch (error) {
    console.error('Delete document error:', error);
    res.status(500).json({ success: false, message: 'Failed to delete document' });
  }
};

module.exports = {
  getUserDocuments,
  uploadDocument,
  deleteDocument
};
