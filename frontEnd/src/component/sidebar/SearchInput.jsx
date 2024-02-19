import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import useConversation from "../../Store/UseContext";
import useGetConversation from "../../hooks/useGetConversation";
import toast from "react-hot-toast";

function SearchInput() {
  const [search,setSearch] =useState("") 
  const {setSelectedConversation}=useConversation()
  const {conversations} = useGetConversation()

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(!search) return;
    if(search.length<3) {
      toast.error("Please enter atleast 3 characters")
      return;
    } 
    else{
      toast.error("NO SUCH CONVERSATION FOUND")
    }

    const conversation = conversations.find(c=>c.fullName.toLowerCase().includes(search.toLowerCase()))
    if(conversation){
      setSelectedConversation(conversation)
      setSearch('')
    }
    
  }
  return (
    <>
    <form onSubmit={handleSubmit} className="flex items-center gap-12">
        <input type="text" 
          placeholder="Search..." 
          className="input input-bordered rounded-full"
          value={search}
          onChange={(e)=>setSearch(e.target.value)} 
        />
        <button className="btn btn-circle bg-sky-500 text-white">
            <IoSearchSharp className="w-6 h-6 outline-none"/>
        </button>
    </form>
    </>
  )
}

export default SearchInput