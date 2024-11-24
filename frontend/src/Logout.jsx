import React from "react";
import { useAuth } from "./context/AuthProvider";
import toast from "react-hot-toast";
export default function Logout(){
    const [authUser,setAuthUser]=useAuth();
    const handleLogout=()=>{
     try{
        setAuthUser({...authUser,user: null,});
        localStorage.removeItem("users");
        toast.success("logout successfully");
         setTimeout(()=>{window.location.reload();//it show the case reload is needed after logout after this logout changes to login button thats whyit is use
         },1000);
        }
     catch(err){toast.error("error:"+ err.message);
     }
    }
    return (<>
    <div>
<button className=" btn btn-primary rounded text-white-600" onClick={handleLogout}>Logout</button>
    </div>
    </>)
}