import User from "../models/User.js";

const saveUser = async (userModel) => {
    const save = await User.create(userModel);
    return save;
};

const getUserById = async (id) => {
    return await User.findByPk(id);
};

const getAllUser = async () => {
    return await User.findAll({
        order: [
            ['id', 'ASC']
        ]
    });
};

const deleteUserById = async (id) => {
    return await User.destroy({ where: { id: id } });
};

const updateUserById = async (id, UserModel) => {
    try {
        const resultado = await User.update(userModel, { where: { id: id } });
        if (resultado[0] === 1) {
            return { message: "User update with success!" };
        } else {
            return { message: "Can not find ${id} to update", status: 404 };
        }
    } catch (error) {
        console.log(error);
    }
};


const factory = {
    saveUser,
    getUserById,
    getAllUser,
    deleteUserById,
    updateUserById
}

export default factory;