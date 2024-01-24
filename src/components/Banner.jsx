import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div className="">
            <div className="relative"><img src="https://i.ibb.co/4VzpjrT/pexels-sebastian-s-rensen-731082.jpg" alt="banner" /></div>
            <div className="absolute top-28 lg:top-80">
              <p className="pl-2 lg:pl-5 text-xl lg:text-5xl font-bold text-white uppercase">Unlock the door to your dream home</p>
              <p className="pl-2 lg:pl-8 lg:text-3xl font-semibold text-white lg:text-black uppercase lg:pt-5">Rent with ease, live with comfort</p>
              <div className="pl-2 lg:pl-10 pt-2 lg:pt-12 hidden lg:flex">
               <a href="#why"> <button className="btn  font-bold uppercase">Contact Us</button></a>
               <Link to='dashboard'>
               <button className="btn  text-white bg-emerald-700 font-bold uppercase ml-5">explore more</button>
               </Link>
              </div>
            </div>
        </div>
    );
};

export default Banner;