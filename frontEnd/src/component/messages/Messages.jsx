import useGetMessages from "../../hooks/useGetMessages";
import MessageSkeleton from "../../skeletons/MessageSkeleton.jsx";
import Message from "./Message"


function Messages() {
  const {loading,messages}=useGetMessages();
  console.log("messages",messages);

  return (
    <div className="px-4 flex-1 overflow-auto">
      { loading && [...Array(3)].map((_,index)=>
         <MessageSkeleton key={index}/>)
      }
      {!loading &&  messages.length === 0 &&(
        <p className="text-center">Send a message to start the conversation</p>
      )}
      {!loading && messages.length>0 && messages.map((message)=>{
        <Message key={message._id} message={message}/>
      })
      }
    </div>
  )
}

export default Messages