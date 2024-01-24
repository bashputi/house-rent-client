import { useForm } from "react-hook-form";
import { Link, Navigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';


const Register = () => {
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
                
                reset()
              Swal.fire({
                title: "Congratulation",
                text: "You successfully Add a room for rent!",
                icon: "success"
              });
              navigate('/'); 
            //   Navigate(location?.state ? location.state : "/");
            }
          })
       
      };
    return (
        <div className="my-12">
            <h1 className="text-center font-bold text-3xl my-8">SIGN UP</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="bg-base-200 p-5">
         
        
         <div className="">
         <label className="label">
              <span className="label-text">
               Name
              </span>
            </label>
            <input type="text" placeholder="Enter your full name"{...register("name", { required: true})}
            className="input input-bordered input-warning w-full" />
         </div>
     
         <div className="">
        <label className="label">
            <span className="label-text">
            Phone Number
            </span>
        </label>
        <input type="number" placeholder="Phone Number" {...register("phn", { required: true})}
            className="input input-bordered input-warning w-full" />
        </div>
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
       
        <div className="flex-1">
        <label className="label">
            <span className="label-text">
            Role
            </span>
        </label>
        <select {...register("role", { required: true })} className="select select-bordered select-warning w-full">
            <option value="owner">House Owner</option>
            <option value="renter">House Renter</option>
           
        </select>
        </div>
         <button className="btn bg-gray-200 btn-outline border-orange-500 border-0 border-b-4 mt-4">Sign Up</button>
        </form>
        <p className="text-center mt-5">Already have a account? Please <Link to='/login'><button className="btn btn-outline btn-success">Sign In</button></Link></p>
        </div>
    );
};

export default Register;