import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="navbar bg-neutral text-neutral-content">
        <button className="btn btn-ghost text-xl">Auth Master</button>
        <Link className="btn btn-ghost text-xl" to='/'>Home</Link>
        <Link className="btn btn-ghost text-xl" to='/login'>Login</Link>
        <Link className="btn btn-ghost text-xl" to='/register'>Register</Link>
      </div>
    </>
  );
};

export default Header;
