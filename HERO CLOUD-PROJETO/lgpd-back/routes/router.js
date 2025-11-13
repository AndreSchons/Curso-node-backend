import express from "express";
let router = express.Router();

import userControler from "./UserController.js";
import teacherControler from "./TeacherController.js";
import courseControler from "./CourseController.js";
import evaluationControler from "./EvaluationController.js";

router.get("/", function(req, resp) {
    console.log("oi!");
    resp.status(200).json({message: "oi!"});
});

router.use("/", userControler);
router.use("/", teacherControler);
router.use("/", evaluationControler);
router.use("/", courseControler);

export default router;