import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";

function SearchInput() {
  const [search,setSearch] =useState("") 

  
  const handleSubmit=()=>{

  }
  return (
    <>
    <form onSubmit={handleSubmit} className="flex items-center gap-12">
        <input type="text" placeholder="Search..." className="input input-bordered rounded-full" />
        <button className="btn btn-circle bg-sky-500 text-white">
            <IoSearchSharp className="w-6 h-6 outline-none"/>
        </button>
    </form>
    </>
  )
}

export default SearchInput