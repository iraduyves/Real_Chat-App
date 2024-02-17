import {BiLogOut} from "react-icons/bi"
import UserLogout from "../../hooks/UserLogout"
function Logout() {

  const{loading,logout}= UserLogout()

  return (
    <div className="mt-auto">
      {!loading ? (

        <BiLogOut className="w-6 h-6 text-white cursor-pointer" 
           onClick={logout}
        />
      ):(
        <span className="loading loading-spinner"></span>
      )
      }
    </div>
  )
}

export default Logout
