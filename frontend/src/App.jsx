 import Signup from "./Signup";
import Home from "./home/Home";
import { Navigate, Route,Routes } from "react-router-dom";
import Courses from "./courses/Courses";
 import Contact from "./Contact";
 import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider.jsx";
 function App() {
  const [authUser,setAuthUser]=useAuth();
  console.log(authUser);
  return (
    <>
    <div className="dark:bg-slate-900 dark:text-white">
     <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/Course" element={authUser?<Courses/>:<Navigate to="/signup"/>}/>
       <Route path="/signup" element={<Signup/>}/>
       <Route path="/contact" element={<Contact/>}/> 
     </Routes>
     <Toaster/>
     </div>
    </>
  
  )
}
 
export default App;
;