import Logout from "./Logout"
import Conversations from "./Conversations"
import SearchInput from "./SearchInput"


function Sidebar() {
  return (
    <>
      <div className="border-r border-slate-500 p-4 flex flex-col"> 
        <SearchInput/>
        <div className="divider px-3"></div>
        <Conversations/>
        <Logout/>
      </div>
    </>
  )
}

export default Sidebar