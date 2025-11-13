import teacherRepository from "../repositories/TeacherRepository.js";

const saveTeacher = (teacherModel) => {
    return teacherRepository.saveUser(teacherModel);
}

const getTeacherById = (id) => {
    return teacherRepository.getTeacherById(id);
}

const getAllTeachers = () => {
    return teacherRepository.getAllTeachers();
}

const deleteTeacherById = (id) => {
    return teacherRepository.deleteTeacherById(id);
}

const updateTeacherById = (id, userModel) => {
    return teacherRepository.updateTeacherById(id, userModel);
}

const service = {
    saveTeacher, 
    getTeacherById,
    getAllTeachers,
    deleteTeacherById
}

export default service;