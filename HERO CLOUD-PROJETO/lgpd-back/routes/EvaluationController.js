import express from "express";
let router = express.Router();

import evaluationService from "../services/EvaluationService.js";

router.post("/saveEvaluations", async function(req, res){
    const evaluationModel = {
        concept: req.body.concept
    };
    const evaluation = await evaluationService.saveEvaluation(evaluationModel);
    return res.status(200).json(evaluation);
})

router.get("/getAllEvaluation", async function(req, res){
    const allEvaluations = evaluationService.getAllEvaluations();
    return res.status(200).json(allEvaluations);
});

router.get("/evaluation/:id", async function(req, res){
    const evaluation = evaluationService.getEvaluationById(req.body.id);
    return res.status(200).json(evaluation);
});

router.delete("/deleteEvaluation/:id", async function(req, res){
    const evaluationDeleted = evaluationService.deleteEvaluationById(req.params.id);
    return res.status(204).json(evaluationDeleted);
});

router.put("/updateEvaluation/:id", async function(req, res){
    const evaluationModel = {
        concept: req.body.concept
    };
    const evaluationUpdated = evaluationService.updateEvaluationById(req.params.id, evaluationModel);
    return res.status(200).json(evaluationUpdated);
});

export default router;