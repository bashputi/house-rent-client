import { NavLink } from "react-router-dom";


const Navbar = () => {
    const navLink = <>
    <li className="text-xl font-semibold"><NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-black underline" : "text-white" }>Home</NavLink></li>
    <li className="text-xl font-semibold"><NavLink to="/dashboard" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-black underline" : "text-white" }>Dashboard</NavLink></li>
    
    </>
    return (
        <div className="bg-emerald-800 ">
             <div className="navbar shadow-lg">
            <div className="navbar-start">
                <div className="dropdown lg:hidden">
                <label tabIndex={0} className="btn btn-ghost btn-circle text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-600 rounded-box w-52">
                  {
                    navLink
                  }
                </ul>
                </div>
                  <div className="flex ml-2 font-serif">
                       <span className="lg:text-2xl font-bold mr-1 lg:mr-2"><img className="w-8" src="https://i.ibb.co/Xx3482M/home-buy-sell-or-rent-logo-clean-and-simple-logo-template-suitable-for-a-real-estate-house-rent-mort.png" alt="logo" />  </span> <span className="text-white  font-bold lg:text-2xl">HOUSE <span className="text-orange-500">HUNTER</span></span>
                    </div>
            </div>
            <div className="navbar-end hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
              {
                navLink
              }
              </ul>
            </div>
          
    </div>
        </div>
    );
};

export default Navbar;