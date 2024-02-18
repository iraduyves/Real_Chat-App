import { BiSend } from "react-icons/bi"
import useSendMessages from "../../hooks/useSendMessages.js";
import { useState } from "react";


function MessageInput() {
  const {loading,sendMessage}=useSendMessages();
  const [message,setMessage]=useState("");

  const handleSubmit=async(e)=>{
    e.preventDefault();
    if(!message) return;
    await sendMessage(message);
    setMessage("")
    console.log("hello");
  }
  return (
    <form className="px-4 my-3" onSubmit={handleSubmit}>
        <div className="w-full relative">
            <input
              type="text" 
              className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white"
              placeholder="Send a message..."
              value={message}
              onChange={(e)=>setMessage(e.target.value)}
            />
            <button className="absolute inset-y-0 end-0 flex items-center pe-3">
                {loading ? <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-500"></div>:<BiSend/>}
            </button>
        </div>
    </form>
  )
}

export default MessageInput