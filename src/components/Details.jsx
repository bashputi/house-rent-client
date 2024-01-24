import { Link, useLoaderData } from "react-router-dom";



const Details = () => {
    const details = useLoaderData();
    
    const {name, address, city, bedroom, bathroom, email, size, rent, phn, notes, image, date, _id} = details || {};
   
    return (
        <div className="my-12">
             <div className="card h-[60vh] grid md:grid-cols-2 card-side bg-base-900">
           
            <div data-aos="zoom-in" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className="card-body md:-mt-8">
                <h2 className="card-title text-3xl">{name}</h2>
                <p className="text-gray-600"><span className="text-lg font-semibold">Address:</span> {address}/ {city}</p>
                <div className="-mt-10">
                <p className="text-xl font-semibold">Owner Informartion</p>
                <p><span className="text-lg font-semibold">Email:</span> {email}</p>
                <p><span className="text-lg font-semibold">Phone No:</span> {phn}</p>
                </div>
                                
               <div>
                <p className="text-lg font-semibold mt-5">Description</p>
               <p className="text-gray-600">{notes}</p>
               </div>
                <div><span className="font-bold text-xl text-amber-700">{rent}</span></div>
               <div>
                <h1 className="text-xl font-semibold text-purple-600">Room Info</h1>
                <p><span className="text-lg font-semibold">Bedrooms:</span> {bedroom}</p>
                <p><span className="text-lg font-semibold">Bathrooms:</span> {bathroom}</p>
                <p><span className="text-lg font-semibold">Average Room Size:</span> {size}</p>
                <p><span className="text-lg font-semibold">Availablity:</span> {date}</p>
               </div>
                <div className="card-actions justify-end">
              <Link to={`/book/${_id}`}>
              <button  className="btn btn-warning"> Book Now</button>
              </Link>
                </div>
  </div>
  <div data-aos="zoom-in" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
            <figure><img className="h-[60vh]" src={image} alt="Movie"/></figure>
            </div>
</div>
      </div>
    );
};

export default Details;