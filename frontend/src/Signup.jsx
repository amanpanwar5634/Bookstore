import React from "react";
import { Link, Navigate,useNavigate,useLocation} from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
 
export default function Signup() {
  const location=useLocation();
  const navigate=useNavigate();
  const from=location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit =async(data) =>{
  const userInfo={
   fullname:data.fullname,
   email:data.email,
   password:data.password
  }
  await axios.post("http://localhost:4001/user/signup",userInfo)//send the data from form to the /signup route
  .then((res)=>{console.log(res.data)
    if(res.data){
       toast.success("Signup successfully");
        navigate(from,{replace:true});
    }
    localStorage.setItem("users",JSON.stringify(res.data.user));//res.data.user contain the createdUser data which get stored in the 
    //local storage

  })
  .catch((err)=>{
    if(err.response){console.log(err);
       toast.error("Already registered");
    }
  })
  } 
  return (<>
    <div>
      <div id="my_modal_2" className="h-screen items-center flex justify-center">
        <div className="modal-box">
          <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
            {/* if there is a button in form, it will close the modal */}
            <Link to="/"> <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_2").close()}>✕</button>
            </Link>
            <h1 className="font-bold text-4xl text-center">Signup</h1>
            <div className="mt-2 px-4 py-1">
              <h3 className="mb-1">Name</h3>
              <input type="text" placeholder="Enter name" className="w-80 mt-3 outline-none bg-white-300"
                {...register("fullname", { required: true })} ></input>
              <br></br><p className="text-red-600 mt-2">{errors.text && <span>This field is required</span>}</p>
            </div>
            <div className="mt-2 px-4 py-1">
              <h3 className="mb-1">Email</h3>
              <input type="email" placeholder="Enter email" className="w-80 mt-3 outline-none bg-white-300"
                {...register("email", { required: true })} ></input>
              <br></br><p className="text-red-600 mt-2">{errors.email && <span>This field is required</span>}</p>
            </div>
            <div className="mt-2 px-4 py-1">
              <h3 className="mb-1">Password</h3>
              <input type="password" placeholder="Enter password" className="w-80 mt-3 outline-none bg-white-300"
                {...register("password", { required: true })} ></input>
              <br></br><p className="text-red-600 mt-2">{errors.password && <span>This field is required</span>}</p>
            </div>
            <div className="flex flex-cols-1 md:flex-cols-2 px-4 py-1 justify justify-between mt-3">
              <div><button className="mx-2 bg-pink-600 text-white font-bold px-4 py-1 rounded-md">Signup</button></div>
              <div><p>Have Account?{" "}
                <button><span className="mx-2 text-blue-500 underline cursor-pointer "
                  onClick={() => document.getElementById("my_modal_3").showModal()}>Login</span></button>
                <Login /></p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </>)
}
