import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const Book = () => {
    const details = useLoaderData();
    const {name, address, city, bedroom, bathroom, email, size, rent, phn, notes, image, date, _id} = details || {};

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
            email: 'user.email',
            renterphn: data.renterphn,
            rentername: 'user.name',
            renteremail: 'user.email'
          }
          fetch('http://localhost:5002/books', {
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
            }
          })
       
      };
    return (
        <div>
              <div className='mt-12 bg-emerald-200 shadow-lg rounded-lg p-5'>
              <form onSubmit={handleSubmit(onSubmit)}>
  
  <div className="flex w-full gap-4 my-6">
  <div className="flex-1">
  <label className="label">
       <span className="label-text">
        Renter's Name
       </span>
     </label>
     <input type="text" defaultValue={name}readOnly  {...register("rentername", { required: true})}
     className="input input-bordered input-warning w-full" />
  </div>
   <div className="form-control w-full flex-1">
     <label className="label">
       <span className="label-text">
       Renter's Email
       </span>
     </label>
     <input type="text" defaultValue={email} readOnly {...register("renteremail", { required: true})}
     className="input input-bordered input-warning w-full" />
   </div>
  </div>
  <div className="flex-1">
  <label className="label">
       <span className="label-text">
        Renter's Phone No
       </span>
     </label>
     <input type="number"  placeholder="Type you Phone no"{...register("renterphn", { required: true})}
     className="input input-bordered input-warning w-full" />
  </div>
  <div className="flex w-full gap-4 my-6">
  <div className="flex-1">
  <label className="label">
       <span className="label-text">
        Name
       </span>
     </label>
     <input type="text" defaultValue={name} readOnly {...register("name", { required: true})}
     className="input input-bordered input-warning w-full" />
  </div>
   <div className="form-control w-full flex-1">
     <label className="label">
       <span className="label-text">
        Address
       </span>
     </label>
     <input type="text" defaultValue={address} readOnly {...register("address", { required: true})}
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
     <input type="text" defaultValue={city} readOnly  {...register("city", { required: true})}
     className="input input-bordered input-warning w-full" />
  </div>
  <div className="flex-1">
 <label className="label">
     <span className="label-text">
     Numbers of Bedroom
     </span>
 </label>
 <input type="number" defaultValue={bedroom} readOnly  {...register("bedroom", { required: true})}
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
     <input type="number" defaultValue={bathroom} readOnly  {...register("bathroom", { required: true})}
     className="input input-bordered input-warning w-full" />
  </div>
  <div className="flex-1">
 <label className="label">
     <span className="label-text">
     Room Size
     </span>
 </label>
 <input type="text" defaultValue={size} readOnly {...register("size", { required: true})}
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
     <input type="number" defaultValue={rent} readOnly {...register("rent", { required: true})}
     className="input input-bordered input-warning w-full" />
  </div>
  <div className="flex-1">
 <label className="label">
     <span className="label-text">
     Phone Number
     </span>
 </label>
 <input type="number" defaultValue={phn} readOnly  {...register("phn", { required: true})}
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
     <input type="url" defaultValue={image} readOnly  {...register("image", { required: true})}
     className="input input-bordered input-warning w-full" />
  </div>
  <div className="flex-1">
 <label className="label">
     <span className="label-text">
     Availability date
     </span>
 </label>
 <input type="text" defaultValue={date} readOnly {...register("date", { required: true})}
     className="input input-bordered input-warning w-full" />
 </div>
  </div>
  <div className="w-full lg:w-1/2">
 <label className="label">
     <span className="label-text">
     Description
     </span>
 </label>
 <textarea defaultValue={notes} readOnly  {...register("notes")} className="textarea textarea-bordered textarea-warning w-full" rows="4"></textarea>
 </div>
         

  <button className="btn bg-gray-200 btn-outline border-orange-500 border-0 border-b-4 mt-4">Update Rent</button>
 </form>
      </div>
        </div>
    );
};

export default Book;