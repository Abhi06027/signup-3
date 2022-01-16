
import './App.css';

function App() {
  return (
<div className="  "  >
      
    
<img className=" w-28 mx-4  mt-10   " src=" ./images/li.png" alt=""/>
      
      
      <div className=" sm:flex sm:justify-center  lg:flex lg:justify-center md:flex md:justify-center md:mt-44 lg:mt-44  "  >  
      {/* <img className=" w-28 mx-4  lg:hidden md:hidden  sm:hidden  mt-10   " src=" ./images/li.png" alt=""/> */}
        <div className="    md:shadow-md    lg:shadow-md rounded-md  ">  

      
        <h2 className="  text-3xl font-bold  px-4 mt-5  "  >Sign in   </h2>
        <div className=" text-xs px-4 py-2  "  >Stay updated on your professional world</div>
           
        <div className=" px-4  py-3   "  >
        <input className=" border-blue-500 w-80 border  bottom-2    rounded-md h-12    " type  =  " text    "  placeholder  ="   Email or Phone   "/></div>
        <div className=" px-4  py-2  "  >
        <input className=" border-blue-500  w-80  border  bottom-2    rounded-md h-12    " type=  " text    "  placeholder="   Password    "/>
        
        <div className="   py-2" >  
         <div className="  text-blue-800 hover:bg-blue-300 rounded-full w-36  hover:underline py-1  text-center   "  >   Forgot password?        </div>
  
  
          <div className=" mt-3   bg-blue-700 rounded-full text-center  hover:bg-blue-900 text-white py-3  "   >      Sign in       </div>
          
          <div className="  flex justify-center  items-center  "  >
          <div className=" mt-3  w-32 border  "   >            </div>
         
          <div className=" mt-3 px-5 text-black ">    or         </div>
          <div className=" mt-3 w-32 border  "   >            </div>
          </div>
          <div className=" mt-3 mb-3   justify-center   bg-white rounded-full text-center border-gray-400  hover:border-black  border-2  flex  items-center  hover:bg-gray-100 text-black py-3 "   >   
         
          <img className=" w-6 mx-2   "  src=" ./images/apple.png" alt=""/>
            Sign in with Apple      </div>
         
         </div>
        
  
  
         
        </div>  
        
        </div>
  
       
        </div>
        <div className=" flex  justify-center space-x-1 items-center  mt-6 " >
        <div className=" text-center "  > New to LinkedIn?  </div>  
        <div className=" text-center  text-blue-500 cursor-pointer font-bold hover:underline hover:bg-blue-300 rounded-full w-20 py-1  "  > Join now  </div>  
       
        </div>
        </div>
  );
}

export default App;
