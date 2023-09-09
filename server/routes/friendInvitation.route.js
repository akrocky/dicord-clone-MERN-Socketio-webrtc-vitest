const express= require('express');
const router = express.Router();
const Joi= require('joi');
const validator= require('express-joi-validation').createValidator({});
const authCheck= require('../middleware/auth.middleware');
const friendInvitationControllers= require('../controllers/firendInvitation/friendInvitation.controller');
const postFriendInvitationSchema=Joi.object({
    targetMailAddress: Joi.string().email().required()
})
   
router.post(
    '/invite',
    authCheck,
    validator.body(postFriendInvitationSchema),
    friendInvitationControllers.postInvite);

module.exports= router;
