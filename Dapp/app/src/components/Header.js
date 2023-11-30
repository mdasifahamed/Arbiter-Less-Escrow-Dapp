import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {

  return (
    
    <>

        <div className=" w-full h-24 bg-cyan-800 m-auto flex flex-row items-center justify-start gap-6">
            <div className="ml-20">
               <Link to={'/'}>
                    <h1 className="text-lime-300 text-3xl hover:text-lime-600" onClick={()=>{
                      if(window.location.pathname==='/'){
                        window.location.reload();
                      }
                      else{
                        return false;
                      }
                    }}>EscrowDapp </h1>
               </Link>
            </div>
            <div className="">
              <Link to={"/about"}>
                <h1 className="text-lime-300 text-3xl hover:text-lime-600">How It Works</h1>
              </Link>
            </div>
        </div>
    </>
    
  )
}

export default Header