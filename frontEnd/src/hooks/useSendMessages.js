import { useState } from "react";
import useConversation from "../Store/UseContext";
import toast from "react-hot-toast";


const useSendMessages=()=> {
    const [loading, setLoading] = useState(false);
    const {selectedConversation, messages,setMessages} = useConversation();

    console.log("slected",selectedConversation);

     const sendMessage = async (message) => {
        setLoading(true);
        try {
            const res =await fetch(`api/messages/send/${selectedConversation._id}`,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify({message})
            })
            const data=await res.json()
            if(data.error){
                throw new Error(data.error)
            }

            setMessages([...messages,data])

        } 
        catch (error) {
            toast.error("An error occurred in the send message process.")
        }
        finally{
            setLoading(false);
        }
     }

     return {loading,sendMessage}
}

export default useSendMessages;