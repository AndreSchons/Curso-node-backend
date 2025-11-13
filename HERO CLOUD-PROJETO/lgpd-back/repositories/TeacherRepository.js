import Teacher from "../models/Teacher.js";

const saveTeacher = async (teacherModel) => {
    const save = await Teacher.create(teacherModel);
    return save;
};

const getTeacherById = async (id) => {
    return await Teacher.findByPk(id);
};

const getAllTeacher = async () => {
    return await Teacher.findAll({
        order: [
            ['id', 'ASC']
        ]
    });
};

const deleteTeacherById = async (id) => {
    return await Teacher.destroy({ where: { id: id } });
};

const updateTeacherById = async (id, teacherModel) => {
    try {
        const resultado = await Teacher.update(teacherModel, { where: { id: id } });
        if (resultado[0] === 1) {
            return { message: "Teacher update with success!" };
        } else {
            return { message: "Can not find ${id} to update", status: 404 };
        }
    } catch (error) {
        console.log(error);
    }
};

const factory = {
    saveTeacher,
    getAllTeacher,
    getTeacherById,
    deleteTeacherById,
    updateTeacherById
}

export default factory;