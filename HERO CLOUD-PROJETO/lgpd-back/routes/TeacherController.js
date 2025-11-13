import express from "express";
let router = express.Router();

import teacherService from "../services/TeacherService.js";

router.post("/addTeacher", async function(req, res) {
    const teacherModel = {
        name: req.body.name
    };
    const teacher = await teacherService.saveTeacher(teacherModel);
    return res.status(200).json(teacher);
});

router.get("/getAllTeachers", async function(req,res){
    const allUser = await teacherService.getAllTeachers();
    return res.status(200).json(allUser);
});

router.get("/user/:id", async function(req, res) {
    const teacherGet = await teacherService.getTeacherById(req.params.id);
    return res.status(200).json(teacherGet);
});

router.delete("/delete/:id", async function(req,res){
    const teacherDelete = teacherService.deleteTeacherById(req.params.id);
    return res.status(204).json(teacherDelete);
});

router.put("/updateTeacher/:id", async function(req, res) {
    const teacherModel = {
        name: req.body.name
    };
    const teacherUpdate = teacherService.updateTeacherById(req.params.id, teacherModel);
    return res.status(200).json(teacherUpdate);
});

export default router;