import { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { GiNotebook } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";


const Allhouses = () => {
    // const { user } = useContext(AuthContext);
    const [allRent, setAllRent] = useState([])
        
useEffect(() => {
    const url = `http://localhost:5002/rents` ;
    // userrents?email=${user?.email}

    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setAllRent(data)
        })
}, []);

const handleDeleteItem = (id) => {
    console.log(id);
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        console.log(result)
        if (result.isConfirmed) {
            fetch(`http://localhost:5002/userrents/${id}`,{
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
               if(data.deletedCount > 0){
                Swal.fire({
                    title: "Deleted!",
                    text: "Your Rent has been deleted.",
                    icon: "success"
                  });
                  const remaining = allRent.filter((item) => item._id !== id);
                  setAllRent(remaining)
               }
            })
    
       
        }
      });
       };
    return (
        <div>
            <h1 className="text-center font-bold text-xl lg:text-5xl my-12 uppercase">List of owned houses</h1>
            <div className="overflow-x-auto ">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Serial No</th>
              <th>Image</th>
              <th>Apartment Name</th>
              <th>Apartment Address</th>
              <th>City</th>
              <th>Bedroom</th>
              <th>Bathroom</th>
              <th>Size</th>
              <th>Cost</th>
              <th>Phone number</th>
              <th>Date</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody data-aos="fade-up"
      data-aos-duration="2500">
            {/* row  */}
           {
           allRent.length && allRent.map((user, index) => (
                <tr key={user._id}>
                <th>
                 {index + 1}
                </th>
                <td>
                  <img className="w-16 h-12 rounded-full" src={user.image} alt="" />
                </td>
                <td>
                  {user.name}
               
                </td>
            
                <td>
                    {user.address}
                </td>
                <td>
                    {user.city}
                  
                </td>
                <td>
                   {user.bedroom}
                </td>

                <td>
                {user.bathroom} 
                </td>
                <td>
                {user.size} 
                </td>
                <td>
                {user.rent} 
                </td>
                <td>
                {user.phn} 
                </td>
                <td>
                {user.date} 
                </td>
                <td>
                <NavLink to={`update/${user._id}`}><button className="btn  btn-warning"><GiNotebook className="w-8 h-8 "/></button> </NavLink>
                </td>
                <td>
                <button onClick={() => handleDeleteItem(user?._id)} className="btn btn-outline btn-success"><MdDelete className="w-8 h-8 "/></button>
                </td>
              </tr>
            ))
           }
         
          </tbody>
         
        </table>
      </div>
        </div>
    );
};

export default Allhouses;