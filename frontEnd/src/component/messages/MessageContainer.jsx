import MessageInput from "./MessageInput"
import Messages from "./Messages"
import { TiMessages } from "react-icons/ti";



function MessageContainer() {
    const noChatSelected =false;
  return (

    <div className="md:min-w-[450px] flex flex-col">
     {noChatSelected? 
      (<NoChatSelected/> 
      ): (
       <>
        <div className="bg-slate-500 px-4 py-2 mb-2">
            <span className="label-text">To:
              <span className="text-gray-900 font-bold">Jhon Doe</span>
            </span>
        </div>
        <Messages/>
        <MessageInput/>
       </>
      )}
    </div>
njkd jkgjkbgjkbrrk
  )
}
export default MessageContainer

const NoChatSelected = ( ) =>{
    return (
        <div className="flex items-center justify-center w-full h-full">
            <div className="px-4 text-center sm:text-lg md:txt-xl text-gray-200 font-semibold flex flex-col items-center gap-12">
                <p>Welcome 👋 John Doe </p>
                <TiMessages  className='text-3xl md:text-6xl text-center'/>

            </div>
        </div>
    )
}