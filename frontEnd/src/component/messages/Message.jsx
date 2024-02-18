import useConversation from "../../Store/UseContext"
import { useAuthContext } from "../../context/AuthContext"


function Message({message}) {
  const {authUser}=useAuthContext()
  const {selectedConversation}=useConversation()
  const fromMe = messaage.senderId === authUser._id
  const chatClassName = fromMe ? 'chat chat-end' : 'chat chat-start'
  const profilePic = fromMe ? authUser?.profilePic : selectedConversation?.profilePicture
  const bubbleBgColor = fromMe ? 'bg-blue-500' : ''

  return (
    <div className={`chat ${chatClassName}`}>
        <div className={`chat-image ${profilePic}`}>
            <div className="w-10 rounded-full">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="sender image" />
            </div>
        </div>
        <div className={`chat-bubble text-white ${bubbleBgColor}`}>{message?.message}</div>
        <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">09:00</div>
    </div>
  )
}
export default Message