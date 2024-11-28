const asyncHandler = require("express-async-handler");
const {
  getAllStudents,
  addNewStudent,
  getStudentDetail,
  setStudentStatus,
  updateStudent,
} = require("./students-service");

const handleGetAllStudents = asyncHandler(async (req, res) => {
  try {
    const { payload } = req;
    const students = await getAllStudents(payload);
    return students;
  } catch (error) {
    throw error;
  }
});

const handleAddStudent = asyncHandler(async (req, res) => {
  try {
    const { payload } = req;
    const message = await addNewStudent(payload);
    return message;
  } catch (error) {
    throw error;
  }
});

const handleUpdateStudent = asyncHandler(async (req, res) => {
  try {
    const { payload } = req;
    const message = await updateStudent(payload);
    return message;
  } catch (error) {
    throw error;
  }
});

const handleGetStudentDetail = asyncHandler(async (req, res) => {
  try {
    const { id } = req;
    const student = await getStudentDetail(id);
    return student;
  } catch (error) {
    throw error;
  }
});

const handleStudentStatus = asyncHandler(async (req, res) => {
  try {
    const { userId, reviewerId, status } = req;
    const message = await setStudentStatus({ userId, reviewerId, status });
    return message;
  } catch (error) {
    throw error;
  }
});

module.exports = {
  handleGetAllStudents,
  handleGetStudentDetail,
  handleAddStudent,
  handleStudentStatus,
  handleUpdateStudent,
};
