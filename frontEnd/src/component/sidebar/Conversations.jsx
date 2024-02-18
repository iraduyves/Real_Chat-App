import useGetConversation from "../../hooks/useGetConversation";
import { getRandomEmoji } from "../../utils/emoji";
import Conversation from "./Conversation"



function Conversations() {
 const{loading,conversations} =useGetConversation();
  return (
    <div className="py-2 flex flex-col  overflow-auto">
        {
          !loading? (
                conversations.map((conversation) => (
                    <Conversation 
                      key={conversation._id} 
                      conversation={conversation} 
                      imoji={getRandomEmoji()}
                      lastIdx={conversation?.lenght -1}
                    />
                ))
            ) : (
                <div className="loading loading-spinner"></div>
            )
        }
    </div>
  )
}

export default Conversations