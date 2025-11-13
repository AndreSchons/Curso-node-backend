import express from "express";
let router = express.Router();

import userService from "../services/UserService.js";

router.post("/addUser", async function(req, resp) {
    const userModel = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        gender: req.body.gender
    };

    const user = await userService.saveUser(userModel);
    return resp.status(200).json(user);
});

router.get("/getAllUsers", async function(req, res) {
    const allUser = await userService.getAllUser();
    return res.status(200).json(allUser);
});

router.get("/user/:id", async function(req, res) {
   const user = userService.getUserById(req.params.id);
   return res.status(200).json(user); 
});

router.put("/updateUser/:id", async function(req, res) {
    const userModel = {
        first_name : req.body.first_name,
        last_name : req.body.last_name,
        email : req.body.email,
        gender : req.body.gender
    };

    const userUpdate = userService.updateUserById(req.params.id, userModel);
    return res.status(200).json(userUpdate);
});

router.delete("/delete/:id", async function(req,res){
    const userDelete = await userService.deleteUserById(req.params.id);
    return res.status(204).json(userDelete);
});



export default router;