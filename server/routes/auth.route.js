const express= require('express');
const router = express.Router();
const authControllers= require("../controllers/auth/auth.controller");
const Joi= require('joi');
const validator= require('express-joi-validation').createValidator({});
const authCheck= require('../middleware/auth.middleware')
const registerSchema=Joi.object({
    username: Joi.string().min(3).max(12).required(),
    password: Joi.string().min(6).max(12).required(),
    mail: Joi.string().email().required()
})
const loginSchema=Joi.object({
    password: Joi.string().min(6).max(12).required(),
    mail: Joi.string().email().required()
})
router.post('/register',validator.body(registerSchema), authControllers.controllers.postRegister)
router.post('/login',validator.body(loginSchema),authControllers.controllers.postLogin);

// test route verify token or not

router.get('/test',authCheck,(req,res)=>{
    res.json({
        message:"verify passed",
        user:req.user
    })
})

module.exports= router;
