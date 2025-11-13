import express from "express";
let router = express.Router();

import courseService from "../services/CourseService.js";

router.post("/saveCourse", async function(req, res){
    const courseModel = {
        name: req.body.name
    };
    const course = courseService.saveCourse(courseModel);
    return res.status(200).json(course);
});

router.get("/getAllCourses", async function(req, res) {
    const allCourses = courseService.getAllCourses();
    return res.status(200).json(allCourses);
});

router.get("/course/:id", async function(req, res) {
    const course = courseService.getCourseById(req.params.id);
    return res.status(200).json(course);
});

router.put("/updateCourse/:id", async function(req, res) {
    const courseModel = {
        name: req.body.name
    };
    const courseUpdate = courseService.updateCourseById(req.params.id, courseModel);
    return res.status(200).json(courseUpdate);
});

router.delete("/delete/:id", async function(req, res){
    const courseDelete = courseService.deleteCourseById(req.params.id);
    return res.status(204).json(courseDelete);
});

export default router;