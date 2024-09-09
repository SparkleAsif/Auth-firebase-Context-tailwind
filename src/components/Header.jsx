import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";

const Header = () => {

  const {user,logOut}=useContext(AuthContext);

  const handleLogOut=()=>{
    logOut()
    .then(()=>{

    })
    .catch(error=>console.error(error))
  }

  return (
    <>
      <div className="navbar bg-neutral text-neutral-content relative">
        <button className="btn btn-ghost text-xl">Auth Master</button>
        <Link className="btn btn-ghost text-xl" to='/'>Home</Link>
        <Link className="btn btn-ghost text-xl" to='/orders'>Orders</Link>
        <Link className="btn btn-ghost text-xl" to='/login'>Login</Link>
        <Link className="btn btn-ghost text-xl" to='/register'>Register</Link>
        <div className="absolute right-4 ">
          {
            user && <Link className="btn btn-ghost text-xl" to='/profile'>Profile</Link>
          }
  
            {
              user?<>
                <span>{user.email}</span> 
                <button onClick={handleLogOut} className="btn btn-xs">Sign Out</button>

              </> :
              <Link to='/login'>Login</Link>
            }
        </div>
      </div>
    </>
  );
};

export default Header;
