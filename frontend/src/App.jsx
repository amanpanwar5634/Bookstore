 import Signup from "./Signup";
import Home from "./home/Home";
import { Route,Routes } from "react-router-dom";
import Courses from "./courses/Courses";
 import Contact from "./Contact";
 function App() {
  return (
    <>
    <div className="dark:bg-slate-900 dark:text-white">
     <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/Course" element={<Courses/>}/>
       <Route path="/signup" element={<Signup/>}/>
       <Route path="/contact" element={<Contact/>}/> 
     </Routes>
     </div>
    </>
  
  )
}
export default App;
;