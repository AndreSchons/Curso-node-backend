import Course from "../models/Course.js";

const saveCourse = async (courseModel) => {
    const save = await Course.create(courseModel);
    return save;
};

const getCourseById = async (id) => {
    return await Course.findByPk(id);
};

const getAllCourse = async () => {
    return await Course.findAll({
        order: [
            ['id', 'ASC']
        ]
    });
};

const deleteCourseById = async (id) => {
    return await Course.destroy({ where: { id: id } });
};

const updateCourseById = async (id, courseModel) => {
    try {
        const resultado = await Course.update(courseModel, { where: { id: id } });
        if (resultado[0] === 1) {
            return { message: "Course update with success!" };
        } else {
            return { message: "Can not find ${id} to update", status: 404 };
        }
    } catch (error) {
        console.log(error);
    }
};

const factory = {
    saveCourse,
    getAllCourse,
    getCourseById, 
    deleteCourseById,
    updateCourseById
}

export default factory;