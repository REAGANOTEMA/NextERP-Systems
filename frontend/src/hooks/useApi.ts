import { apiService } from '../services/api';

// Auth hooks
export const useAuth = () => {
  const login = async (email: string, password: string) => {
    try {
      const response = await apiService.login(email, password);
      if (response.success && response.token) {
        apiService.setToken(response.token);
        return { success: true, user: response.user };
      }
      return { success: false, message: response.message };
    } catch (error) {
      return { success: false, message: 'Login failed' };
    }
  };

  const register = async (userData: {
    student_id: string;
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    role?: string;
  }) => {
    try {
      const response = await apiService.register(userData);
      if (response.success && response.token) {
        apiService.setToken(response.token);
        return { success: true, user: response.user };
      }
      return { success: false, message: response.message };
    } catch (error) {
      return { success: false, message: 'Registration failed' };
    }
  };

  const logout = () => {
    apiService.removeToken();
  };

  const getCurrentUser = async () => {
    try {
      const response = await apiService.getCurrentUser();
      if (response.success) {
        return { success: true, user: response.user };
      }
      return { success: false, message: response.message };
    } catch (error) {
      return { success: false, message: 'Failed to get current user' };
    }
  };

  return {
    login,
    register,
    logout,
    getCurrentUser,
    isAuthenticated: apiService.isAuthenticated(),
  };
};

// Course hooks
export const useCourses = () => {
  const getCourses = async () => {
    try {
      const response = await apiService.getCourses();
      if (response.success) {
        return { success: true, courses: response.courses };
      }
      return { success: false, message: response.message };
    } catch (error) {
      return { success: false, message: 'Failed to fetch courses' };
    }
  };

  const getCourse = async (id: string | number) => {
    try {
      const response = await apiService.getCourse(id);
      if (response.success) {
        return { success: true, course: response.course };
      }
      return { success: false, message: response.message };
    } catch (error) {
      return { success: false, message: 'Failed to fetch course' };
    }
  };

  const createCourse = async (courseData: {
    course_code: string;
    course_name: string;
    description?: string;
    credits?: number;
    instructor?: string;
    semester?: string;
    year?: number;
  }) => {
    try {
      const response = await apiService.createCourse(courseData);
      return response;
    } catch (error) {
      return { success: false, message: 'Failed to create course' };
    }
  };

  const updateCourse = async (id: string | number, courseData: any) => {
    try {
      const response = await apiService.updateCourse(id, courseData);
      return response;
    } catch (error) {
      return { success: false, message: 'Failed to update course' };
    }
  };

  const deleteCourse = async (id: string | number) => {
    try {
      const response = await apiService.deleteCourse(id);
      return response;
    } catch (error) {
      return { success: false, message: 'Failed to delete course' };
    }
  };

  return {
    getCourses,
    getCourse,
    createCourse,
    updateCourse,
    deleteCourse,
  };
};

// Assignment hooks
export const useAssignments = () => {
  const getAssignments = async () => {
    try {
      const response = await apiService.getAssignments();
      if (response.success) {
        return { success: true, assignments: response.assignments };
      }
      return { success: false, message: response.message };
    } catch (error) {
      return { success: false, message: 'Failed to fetch assignments' };
    }
  };

  const getAssignment = async (id: string | number) => {
    try {
      const response = await apiService.getAssignment(id);
      if (response.success) {
        return { success: true, assignment: response.assignment };
      }
      return { success: false, message: response.message };
    } catch (error) {
      return { success: false, message: 'Failed to fetch assignment' };
    }
  };

  const createAssignment = async (assignmentData: {
    title: string;
    description?: string;
    course_id: number;
    week_number?: number;
    block_number?: number;
    due_date?: string;
    points?: number;
    assignment_type?: string;
    status?: string;
  }) => {
    try {
      const response = await apiService.createAssignment(assignmentData);
      return response;
    } catch (error) {
      return { success: false, message: 'Failed to create assignment' };
    }
  };

  const updateAssignment = async (id: string | number, assignmentData: any) => {
    try {
      const response = await apiService.updateAssignment(id, assignmentData);
      return response;
    } catch (error) {
      return { success: false, message: 'Failed to update assignment' };
    }
  };

  const deleteAssignment = async (id: string | number) => {
    try {
      const response = await apiService.deleteAssignment(id);
      return response;
    } catch (error) {
      return { success: false, message: 'Failed to delete assignment' };
    }
  };

  return {
    getAssignments,
    getAssignment,
    createAssignment,
    updateAssignment,
    deleteAssignment,
  };
};

// Submission hooks
export const useSubmissions = () => {
  const getSubmissions = async () => {
    try {
      const response = await apiService.getSubmissions();
      if (response.success) {
        return { success: true, submissions: response.submissions };
      }
      return { success: false, message: response.message };
    } catch (error) {
      return { success: false, message: 'Failed to fetch submissions' };
    }
  };

  const getSubmission = async (id: string | number) => {
    try {
      const response = await apiService.getSubmission(id);
      if (response.success) {
        return { success: true, submission: response.submission };
      }
      return { success: false, message: response.message };
    } catch (error) {
      return { success: false, message: 'Failed to fetch submission' };
    }
  };

  const createSubmission = async (submissionData: {
    assignment_id: number;
    submission_text?: string;
    file_path?: string;
    status?: string;
  }) => {
    try {
      const response = await apiService.createSubmission(submissionData);
      return response;
    } catch (error) {
      return { success: false, message: 'Failed to create submission' };
    }
  };

  const updateSubmission = async (id: string | number, submissionData: any) => {
    try {
      const response = await apiService.updateSubmission(id, submissionData);
      return response;
    } catch (error) {
      return { success: false, message: 'Failed to update submission' };
    }
  };

  const deleteSubmission = async (id: string | number) => {
    try {
      const response = await apiService.deleteSubmission(id);
      return response;
    } catch (error) {
      return { success: false, message: 'Failed to delete submission' };
    }
  };

  return {
    getSubmissions,
    getSubmission,
    createSubmission,
    updateSubmission,
    deleteSubmission,
  };
};
