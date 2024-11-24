import React from "react";
import { createContext,useContext,useState } from "react";
export const AuthContext=createContext();
export default function AuthProvider({children}){
 const intialAuthUser=localStorage.getItem("users");
 const [authUser,setAuthUser]=useState(intialAuthUser?JSON.parse(intialAuthUser):undefined);
 return(<>
 <AuthContext.Provider value={[authUser,setAuthUser]}>
    {children}
 </AuthContext.Provider>
 </>)
}
export const useAuth=()=>useContext(AuthContext);