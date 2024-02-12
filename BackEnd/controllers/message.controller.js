export const sendMessage = async (req, res) => { 
   try {
     const { message } = req.body;
     const {id} =req.params;
     const senderId=req.userId;
     res.status(200).json({ message: "Message sent successfully" });
   }
    catch (error) {
    
   }
}
