const express= require('express');
const router = express.Router();
const Joi= require('joi');
const validator= require('express-joi-validation').createValidator({});
const authCheck= require('../middleware/auth.middleware');
const friendInvitationControllers= require('../controllers/firendInvitation/friendInvitation.controller');
const postFriendInvitationSchema=Joi.object({
    targetMailAddress: Joi.string().email().required()
})
const postAcceptSchema=Joi.object({
    id: Joi.string().required()
})
   
const postRejectSchema=Joi.object({
    id: Joi.string().required()
})
   
router.post(
    '/invite',
    authCheck,
    validator.body(postFriendInvitationSchema),
    friendInvitationControllers.postInvite);
router.post(
    '/accept',
    authCheck,
    validator.body(postAcceptSchema),
    friendInvitationControllers.postAccept);
router.post(
    '/reject',
    authCheck,
    validator.body(postRejectSchema),
    friendInvitationControllers.postReject);

module.exports= router;
