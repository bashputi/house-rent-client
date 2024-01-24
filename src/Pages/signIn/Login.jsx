import { useForm } from "react-hook-form";
import { Link, Navigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = async (data) => {
   
        console.log(data)
          const taskItem = {
           name: data.name,
           phn: data.phn,
           email: data.email,
           pass: data.pass,
           role: data.role,

          }
          fetch('http://localhost:5002/users', {
            method: 'POST',
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(taskItem)
          })
          .then(res => res.json())
          .then(data => {
            if(data.insertedId){
              
              
              navigate("/");
            //   Navigate(location?.state ? location.state : "/");
            }
          })
          
      };
    return (
        <div className="my-12">
            <h1 className="text-center font-bold text-3xl my-8">SIGN In</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="bg-base-200 p-5">
         
    
         <div className="">
        <label className="label">
            <span className="label-text">
            Email
            </span>
        </label>
        <input type="email" placeholder="Enter a valid Email" {...register("email", { required: true})}
            className="input input-bordered input-warning w-full" />
        </div>
         <div className="">
        <label className="label">
            <span className="label-text">
            Create a Password
            </span>
        </label>
        <input type="password" placeholder="Password" {...register("pass", { required: true})}
            className="input input-bordered input-warning w-full" />
        </div>
       
     
         <button className="btn bg-gray-200 btn-outline border-orange-500 border-0 border-b-4 mt-4">Sign In</button>
        </form>
        <p className="text-center mt-5">Don't have a account? Please <Link to='/register'><button className="btn btn-outline btn-success">Sign Up</button></Link></p>
        </div>
    );
};

export default Login;