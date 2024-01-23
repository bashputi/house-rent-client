import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const Update = () => {
    const {name, address, city, bedroom, bathroom, size, rent, phn, notes, image, _id} = useLoaderData();
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = async (data) => {
    
        console.log(data)
          const taskItem = {
            name: data.name,
            address: data.address,
            city: data.city,
            bedroom: data.bedroom,
            bathroom: data.bathroom,
            size: data.size,
            rent: data.rent,
            phn: data.phn,
           date: data.date,
           notes: data.notes,
           image: data.image,
            time: new Date(),
            email: data.email
          }
          console.log(taskItem)
        
          fetch(`http://localhost:5002/userrents/${_id}`, {
        method: 'PUT',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(taskItem)
      })
      .then(res => res.json())
      .then(data => {
        if(data.matchedCount) {
            reset()
          Swal.fire({
              title: 'success!!',
              text: 'Item Details Updated Successfully',
              icon: 'success',
              confirmButtonText: 'Cool'
            })
      }
      })
       
      };
    return (
        <div>
            <h1 className="text-center font-bold text-xl lg:text-5xl my-12">UPDATE INFORMATION</h1>
        <div className='mt-12 bg-emerald-200 shadow-lg rounded-lg p-5'>
 <form onSubmit={handleSubmit(onSubmit)}>
  
  <div className="flex w-full gap-4 my-6">
  <div className="flex-1">
  <label className="label">
       <span className="label-text">
        Name
       </span>
     </label>
     <input type="text" defaultValue={name} placeholder="House Name"{...register("name", { required: true})}
     className="input input-bordered input-warning w-full" />
  </div>
   <div className="form-control w-full flex-1">
     <label className="label">
       <span className="label-text">
        Address
       </span>
     </label>
     <input type="text" defaultValue={address} placeholder="Address of the House"{...register("address", { required: true})}
     className="input input-bordered input-warning w-full" />
   </div>
  </div>
  
  <div className="flex w-full gap-4 my-6">
  <div className="flex-1">
  <label className="label">
       <span className="label-text">
        City
       </span>
     </label>
     <input type="text" defaultValue={city} placeholder="House Location" {...register("city", { required: true})}
     className="input input-bordered input-warning w-full" />
  </div>
  <div className="flex-1">
 <label className="label">
     <span className="label-text">
     Numbers of Bedroom
     </span>
 </label>
 <input type="number" defaultValue={bedroom} placeholder="How many bedroom are there?" {...register("bedroom", { required: true})}
     className="input input-bordered input-warning w-full" />
 </div>
  </div>
  <div className="flex w-full gap-4 my-6">
  <div className="flex-1">
  <label className="label">
       <span className="label-text">
        Numbers of Bathroom
       </span>
     </label>
     <input type="number" defaultValue={bathroom} placeholder="How many bathroom are there?" {...register("bathroom", { required: true})}
     className="input input-bordered input-warning w-full" />
  </div>
  <div className="flex-1">
 <label className="label">
     <span className="label-text">
     Room Size
     </span>
 </label>
 <input type="text" defaultValue={size} placeholder="Average room size" {...register("size", { required: true})}
     className="input input-bordered input-warning w-full" />
 </div>
  </div>
  <div className="flex w-full gap-4 my-6">
  <div className="flex-1">
  <label className="label">
       <span className="label-text">
        Rent Per Month
       </span>
     </label>
     <input type="number" defaultValue={rent} placeholder="Rent for the apartment" {...register("rent", { required: true})}
     className="input input-bordered input-warning w-full" />
  </div>
  <div className="flex-1">
 <label className="label">
     <span className="label-text">
     Phone Number
     </span>
 </label>
 <input type="number" defaultValue={phn} placeholder="Phone Number" {...register("phn", { required: true})}
     className="input input-bordered input-warning w-full" />
 </div>
  </div>
  <div className="flex w-full gap-4 my-6">
  <div className="flex-1">
  <label className="label">
       <span className="label-text">
        Picture
       </span>
     </label>
     <input type="url" defaultValue={image} placeholder="Image URL" {...register("image", { required: true})}
     className="input input-bordered input-warning w-full" />
  </div>
  <div className="flex-1">
 <label className="label">
     <span className="label-text">
     Availability date
     </span>
 </label>
 <input type="date" {...register("date", { required: true})}
     className="input input-bordered input-warning w-full" />
 </div>
  </div>
  <div className="w-full lg:w-1/2">
 <label className="label">
     <span className="label-text">
     Description
     </span>
 </label>
 <textarea defaultValue={notes} {...register("notes")} className="textarea textarea-bordered textarea-warning w-full" rows="4"></textarea>
 </div>
         

  <button className="btn bg-gray-200 btn-outline border-orange-500 border-0 border-b-4 mt-4">Update Rent</button>
 </form>
</div>
 </div>
    );
};

export default Update;