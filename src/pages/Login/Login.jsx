import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Navber from "../shared/Navber";

const Login = () => {

  const { signIn } = useContext(AuthContext);

  const handleLogin = e => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    // console.log(form);
    const email = form.get('email');
    const password = form.get('password');
    console.log(email, password);
    signIn(email, password)
      .then(result => {
        console.log(result.user);
      })
      .catch(error => {
        console.error(error);
      })
  }

  return (
    <>
    <Navber></Navber>
      <div className="py-10 bg-base-200">
        <div className="">

          <div className="card mx-auto my-auto w-4/12 shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
                <p className="text-center mt-2">Dont have an Account ? <span className="text-red-600 font-bold"><Link to='/register'>Register</Link></span></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;