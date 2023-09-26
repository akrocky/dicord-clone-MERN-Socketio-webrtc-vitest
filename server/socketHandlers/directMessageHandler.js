const Message=require('../models/message.model');
const Conversation= require('../models/conversation.model');
const chatUpdates=require('./updates/chat');
const directMessageHandler= async (socket, data)=>{
    try {

        const {userId} =socket.user;
        const {reciverUserId,content}=data;
       
        // create new message
        const message= await Message.create({
            content: content,
            author: userId,
            date: new Date(),
            type: 'DIRECT'
        });

        // find if conversation exist with this two users-if not create new

         const conversation= await Conversation.findOne({
            participants:{
                $all: [userId, reciverUserId]
            }
         });
         if (conversation) {
            conversation.messages.push(message._id);
            await conversation.save();
                 // perform and update to sender and reciver if is online
           
                 chatUpdates.updateChatHistory(conversation._id.toString());

         }else{
            // create new conversation if not exists
            const newConversation= await Conversation.create({
                messages:[message._id],
                participants:[userId, reciverUserId]
            });
            // perform  and update to sender and recever if is online
            chatUpdates.updateChatHistory(newConversation._id.toString());
         }


    
      
        
    } catch (error) {
        console.log(error);
    }
};
module.exports= directMessageHandler;