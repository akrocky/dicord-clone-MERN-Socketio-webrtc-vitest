const Conversation= require('../models/conversation.model');
const chatUpdate=require('./updates/chat');

const directChatHistoryHandler= async (socket, data ) =>{
    
    try {
        const {userId} = socket.user;
        const {reciverUserId}= data;
        console.log([userId, reciverUserId]);
        const conversation= await Conversation.findOne({
            participants:{
                $all: [userId, reciverUserId]
            }
         });
         if (conversation) {
           
            chatUpdate.updateChatHistory(conversation._id.toString(),socket.id);
         }
    } catch (error) {
        console.log(error);
    }
};

module.exports =directChatHistoryHandler;
