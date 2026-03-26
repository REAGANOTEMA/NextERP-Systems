import { apiService } from '../services/api';

// Attendance hooks
export const useAttendance = () => {
  const getAttendance = async () => {
    try {
      const response = await apiService.get('/api/attendance');
      if (response.success) {
        return { success: true, attendance: response.attendance };
      }
      return { success: false, message: response.message };
    } catch (error) {
      return { success: false, message: 'Failed to fetch attendance' };
    }
  };

  const getAttendanceRecord = async (id: string | number) => {
    try {
      const response = await apiService.get(`/api/attendance/${id}`);
      if (response.success) {
        return { success: true, attendance: response.attendance };
      }
      return { success: false, message: response.message };
    } catch (error) {
      return { success: false, message: 'Failed to fetch attendance record' };
    }
  };

  const createAttendance = async (attendanceData: {
    course_id: number;
    attendance_date: string;
    status?: string;
    notes?: string;
  }) => {
    try {
      const response = await apiService.post('/api/attendance', attendanceData);
      return response;
    } catch (error) {
      return { success: false, message: 'Failed to record attendance' };
    }
  };

  const updateAttendance = async (id: string | number, attendanceData: any) => {
    try {
      const response = await apiService.put(`/api/attendance/${id}`, attendanceData);
      return response;
    } catch (error) {
      return { success: false, message: 'Failed to update attendance' };
    }
  };

  const deleteAttendance = async (id: string | number) => {
    try {
      const response = await apiService.delete(`/api/attendance/${id}`);
      return response;
    } catch (error) {
      return { success: false, message: 'Failed to delete attendance' };
    }
  };

  return {
    getAttendance,
    getAttendanceRecord,
    createAttendance,
    updateAttendance,
    deleteAttendance,
  };
};

// Messages hooks
export const useMessages = () => {
  const getMessages = async () => {
    try {
      const response = await apiService.get('/api/messages');
      if (response.success) {
        return { success: true, messages: response.messages };
      }
      return { success: false, message: response.message };
    } catch (error) {
      return { success: false, message: 'Failed to fetch messages' };
    }
  };

  const getMyMessages = async () => {
    try {
      const response = await apiService.get('/api/messages/my');
      if (response.success) {
        return { success: true, messages: response.messages };
      }
      return { success: false, message: response.message };
    } catch (error) {
      return { success: false, message: 'Failed to fetch my messages' };
    }
  };

  const getMessage = async (id: string | number) => {
    try {
      const response = await apiService.get(`/api/messages/${id}`);
      if (response.success) {
        return { success: true, message: response.message };
      }
      return { success: false, message: response.message };
    } catch (error) {
      return { success: false, message: 'Failed to fetch message' };
    }
  };

  const createMessage = async (messageData: {
    receiver_id?: number;
    subject: string;
    message_text: string;
    message_type?: string;
    status?: string;
  }) => {
    try {
      const response = await apiService.post('/api/messages', messageData);
      return response;
    } catch (error) {
      return { success: false, message: 'Failed to send message' };
    }
  };

  const updateMessage = async (id: string | number, messageData: any) => {
    try {
      const response = await apiService.put(`/api/messages/${id}`, messageData);
      return response;
    } catch (error) {
      return { success: false, message: 'Failed to update message' };
    }
  };

  const deleteMessage = async (id: string | number) => {
    try {
      const response = await apiService.delete(`/api/messages/${id}`);
      return response;
    } catch (error) {
      return { success: false, message: 'Failed to delete message' };
    }
  };

  return {
    getMessages,
    getMyMessages,
    getMessage,
    createMessage,
    updateMessage,
    deleteMessage,
  };
};

// Documents hooks
export const useDocuments = () => {
  const getDocuments = async () => {
    try {
      const response = await apiService.get('/api/documents');
      if (response.success) {
        return { success: true, documents: response.documents };
      }
      return { success: false, message: response.message };
    } catch (error) {
      return { success: false, message: 'Failed to fetch documents' };
    }
  };

  const getDocument = async (id: string | number) => {
    try {
      const response = await apiService.get(`/api/documents/${id}`);
      if (response.success) {
        return { success: true, document: response.document };
      }
      return { success: false, message: response.message };
    } catch (error) {
      return { success: false, message: 'Failed to fetch document' };
    }
  };

  const createDocument = async (documentData: {
    title: string;
    description?: string;
    file_path: string;
    file_type?: string;
    file_size?: number;
    category?: string;
    is_public?: boolean;
  }) => {
    try {
      const response = await apiService.post('/api/documents', documentData);
      return response;
    } catch (error) {
      return { success: false, message: 'Failed to create document' };
    }
  };

  const uploadDocument = async (file: File, documentData: {
    title: string;
    description?: string;
    category?: string;
    is_public?: boolean;
  }) => {
    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('title', documentData.title);
      if (documentData.description) formData.append('description', documentData.description);
      if (documentData.category) formData.append('category', documentData.category);
      if (documentData.is_public !== undefined) formData.append('is_public', documentData.is_public.toString());

      const response = await fetch('/api/documents/upload', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiService.getToken()}`,
        },
        body: formData,
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || `HTTP error! status: ${response.status}`);
      }

      return data;
    } catch (error) {
      return { success: false, message: 'Failed to upload document' };
    }
  };

  const updateDocument = async (id: string | number, documentData: any) => {
    try {
      const response = await apiService.put(`/api/documents/${id}`, documentData);
      return response;
    } catch (error) {
      return { success: false, message: 'Failed to update document' };
    }
  };

  const deleteDocument = async (id: string | number) => {
    try {
      const response = await apiService.delete(`/api/documents/${id}`);
      return response;
    } catch (error) {
      return { success: false, message: 'Failed to delete document' };
    }
  };

  return {
    getDocuments,
    getDocument,
    createDocument,
    uploadDocument,
    updateDocument,
    deleteDocument,
  };
};

// Finance hooks
export const useFinances = () => {
  const getFinances = async () => {
    try {
      const response = await apiService.get('/api/finances');
      if (response.success) {
        return { success: true, finances: response.finances };
      }
      return { success: false, message: response.message };
    } catch (error) {
      return { success: false, message: 'Failed to fetch finances' };
    }
  };

  const getMyFinances = async () => {
    try {
      const response = await apiService.get('/api/finances/my');
      if (response.success) {
        return { success: true, finances: response.finances };
      }
      return { success: false, message: response.message };
    } catch (error) {
      return { success: false, message: 'Failed to fetch my finances' };
    }
  };

  const getFinanceSummary = async () => {
    try {
      const response = await apiService.get('/api/finances/summary');
      if (response.success) {
        return { success: true, summary: response.summary };
      }
      return { success: false, message: response.message };
    } catch (error) {
      return { success: false, message: 'Failed to fetch finance summary' };
    }
  };

  const getFinance = async (id: string | number) => {
    try {
      const response = await apiService.get(`/api/finances/${id}`);
      if (response.success) {
        return { success: true, finance: response.finance };
      }
      return { success: false, message: response.message };
    } catch (error) {
      return { success: false, message: 'Failed to fetch finance record' };
    }
  };

  const createFinance = async (financeData: {
    transaction_type: string;
    amount: number;
    description?: string;
    due_date?: string;
    paid_date?: string;
    status?: string;
    payment_method?: string;
  }) => {
    try {
      const response = await apiService.post('/api/finances', financeData);
      return response;
    } catch (error) {
      return { success: false, message: 'Failed to create finance record' };
    }
  };

  const updateFinance = async (id: string | number, financeData: any) => {
    try {
      const response = await apiService.put(`/api/finances/${id}`, financeData);
      return response;
    } catch (error) {
      return { success: false, message: 'Failed to update finance record' };
    }
  };

  const deleteFinance = async (id: string | number) => {
    try {
      const response = await apiService.delete(`/api/finances/${id}`);
      return response;
    } catch (error) {
      return { success: false, message: 'Failed to delete finance record' };
    }
  };

  return {
    getFinances,
    getMyFinances,
    getFinanceSummary,
    getFinance,
    createFinance,
    updateFinance,
    deleteFinance,
  };
};
