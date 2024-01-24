import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";


const Service = () => {
    const loadedRents = useLoaderData();
    console.log(loadedRents)
    const [rents, setRents] = useState(loadedRents);
    const count = loadedRents.length ;
    const itemsPerPage = 10 ;
    const numberOfPage = Math.ceil( count / itemsPerPage);
    const pages = [...Array(numberOfPage).keys()];
    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        fetch(`http://localhost:5002/rents?page=${currentPage}&size=${itemsPerPage}`)
            .then(res => res.json())
            .then(data => setRents(data))
    }, [currentPage]);

    return (
        <div>
           <h1 className="text-center font-bold text-xl lg:text-5xl my-12">CHECK OUT OUR APARTMENT</h1>
           <div className="flex justify-center">
           <div className="grid grid-cols-2 md:grid-cols-3 gap-1 lg:gap-5 md:pl-0 lg:grid-cols-4">
                {
                    rents.length && rents.map((rent) => (
                        <div key={rent._id} className="card card-compact w-[180px] lg:w-[360px] bg-base-100 shadow-xl">
                        <figure><img src={rent?.image} alt="Shoes" /></figure>
                        <div className="card-body">
                         <div className="flex">
                         <h2 className="font-bold text-lg lg:text-2xl">{rent.name}</h2>
                            <div className="badge badge-secondary ml-2">{rent.city}</div>
                         </div>
                           
                            <div className="flex lg:text-lg"> 
                            <p><span className="font-semibold">Bed:</span>{rent.bedroom}</p>
                            <p> <span className="font-semibold">Bath:</span> {rent.bathroom}</p>
                            </div>
                            <div className="flex lg:text-lg">
                            <p><span className="font-semibold">Size:</span> {rent.size}</p>
                            <p><span className="font-semibold">Rent:</span> {rent.rent}</p>
                            </div>
                            <div className="card-actions justify-end">
                            <Link to={`details/${rent._id}`}>
                            <button className="btn btn-success text-white">Details</button>
                            </Link>
                            </div>
                        </div>
                        </div>
                    ))
                }
            </div>
           </div>
           <div className="flex justify-center mt-16">
             <div className="grid grid-cols-3 gap-6">
                  
               {
                 pages.map(page => <button className={currentPage === page ? "btn btn-warning" : undefined} onClick={() => setCurrentPage(page)} key={page}>{page} </button>)
            }
             </div>
                </div>
        </div>

    );
};

export default Service;