import { Link, Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { FaBook, FaProductHunt } from "react-icons/fa";
import { RiDragMove2Fill } from "react-icons/ri";


const Dashboard = () => {
    const location = useLocation();
    const noHeaderFooter = location.pathname.includes('login') || 
    location.pathname.includes('register');
    return (
        <div>
           
           { noHeaderFooter || <Navbar></Navbar>}
       
         <div className="drawer lg:drawer-open ">
             <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
             <div className="drawer-content flex flex-col p-10">
                 <label htmlFor="my-drawer-2" className=" drawer-buttona lg:hidden absolute left-0 top-2 btn cursor-pointer bg-gray-300 hover:bg-[#9fdb64]">open dashboard</label>
                 <Outlet></Outlet>

                 
             </div>
             <div className="drawer-side">
                 <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                 <ul className="menu p-4 w-80 h-full bg-gray-300 text-base-content">
                     {/* Sidebar content here */}

                     <div className="p-4">
                         <div className="text-center">
                             <img className="w-20 h-20 rounded-full mx-auto mb-2" src='user.photoURL' alt="Profile" />
                             
                                     <h4 className="text-lg font-bold pb-2">
                                         user.displayName
                                         
                                     </h4>
                                     <p className="text-gray-600 ">user.email</p>
                                     <p className="pt-3 font-medium">Rent Management dashboard</p>

                         </div>
                     </div>
                     <hr className='border-2 mb-5 border-black' />

                     <li> <Link to="/dashboard/addhouse"><FaBook></FaBook>ADD NEW HOUSE</Link> </li>
                         <li className="my-2"> <Link to="/dashboard/allhouses"><FaProductHunt></FaProductHunt>ALL OWENED HOUSES</Link> </li>
                        
                 </ul>

             </div>
         </div>
         <div className="flex-shrink-0">
           { noHeaderFooter || <Footer></Footer>}
           </div>
     </div>
    );
};

export default Dashboard;