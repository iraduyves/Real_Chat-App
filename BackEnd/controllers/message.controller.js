import Conversation from "../Models/conversation.model.js";
import Message from "../Models/mesage.model.js";

export const sendMessage = async (req, res) => { 
   try {
     const { message } = req.body;
     const {id:receiverId} =req.params;
     const senderId=req.user._id;

     const conversation = await Conversation.findOne({ 
        participants:{$all: [senderId, receiverId] }
     });

     if(!conversation){
         conversation = await Conversation.create({
             participants:[senderId, receiverId]
         });
     }

     const newMessage = new Message({
        senderId,
         receiverId,
         message
     })

     if(newMessage){
        conversation.message.push(newMessage._id);
     }

    await Promise.message.push(conversation.save(), newMessage.save());

     res.status(200).json(newMessage);
   }
    catch (error) {
    
   }
}

export const getMessage = async (req, res) => {
    try {
        const {id:receiverId} =req.params;
        const senderId=req.user._id;
        const conversation = await Conversation.findOne({   
            participants:{$all: [senderId, receiverId] }
        }).populate("message"); 

        if(!conversation)
        {
            return res.status(200).json([]);
        }

        res.status(200).json(conversation.message);
    } 
    catch (error)
    {
        console.log("Error in getMessage middleware:", error.message)
        res.status(500).json({ error: "Internal server error" })
    }
}
