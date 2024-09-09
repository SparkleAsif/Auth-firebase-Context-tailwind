import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";

const Login = () => {

    const {signIn,signInWithGoogle}=useContext(AuthContext);

    const handleLogin=(event)=>{
        event.preventDefault();

        const form = event.target;
        const email= form.email.value;
        const password = form.password.value;
        console.log(email,password);

        signIn(email, password)
        .then(result=>{
            const loggedUser = result.user;
            console.log(loggedUser);
            form.reset();
        })
        .catch(error=>{
            console.log(error)
        })
    }
    const handleGoogleSignIn=()=>{
      signInWithGoogle()
      .then(result=>{
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch(error=>{
        console.log(error);
      })
    }
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col ">
        <div className="text-center ">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda <br />
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body" onSubmit={handleLogin}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <Link className="mt-5" to=''>Forgot password?</Link>
            
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <Link to='/register'>
            <span>New to AuthMaster?</span> 
            <button className="btn btn-active btn-link">Register Now</button>
            </Link>
          </form>
          <div>
          <button className="btn btn-outline btn-info" onClick={handleGoogleSignIn }>Google</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
