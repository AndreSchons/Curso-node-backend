import Evaluation from "../models/Evaluation.js";

const saveEvaluation = async (evaluationModel) => {
    const save = await Evaluation.create(evaluationModel);
    return save;
};

const getEvaluationById = async (id) => {
    return await Evaluation.findByPk(id);
};

const getAllEvaluation = async () => {
    return await Evaluation.findAll({
        order: [
            ['id', 'ASC']
        ]
    });
};

const deleteEvaluationById = async (id) => {
    return await Evaluation.destroy({ where: { id: id } });
};

const updateEvaluationById = async (id, evaluationModel) => {
    try {
        const resultado = await Evaluation.update(evaluationModel, { where: { id: id } });
        if (resultado[0] === 1) {
            return { message: "Evaluation update with success!" };
        } else {
            return { message: "Can not find ${id} to update", status: 404 };
        }
    } catch (error) {
        console.log(error);
    }
};

const factory = {
    saveEvaluation,
    getAllEvaluation,
    getEvaluationById,
    deleteEvaluationById,
    updateEvaluationById
}

export default factory;