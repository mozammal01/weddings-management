import { Link } from "react-router-dom";

const Register = () => {


  const handleRegister = e => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);

    const email = form.get('email');
    const password = form.get('password');
    console.log(email, password);
  }
  return (
    <div className="py-10 bg-base-200">
      <div className="">

        <div className="card mx-auto my-auto w-4/12 shadow-2xl bg-base-100">
          <form onSubmit={handleRegister} className="card-body">

            <div className="form-control">

              <label className="label">
                <span className="label-text">First Name</span>
              </label>

              <input type="text" name="fName" placeholder="First Name" className="input input-bordered" required />

              <label className="label">
                <span className="label-text">Last Name</span>
              </label>

              <input type="text" name="lName" placeholder="Last Name" className="input input-bordered" required />

              <label className="label">
                <span className="label-text">Email</span>
              </label>

              <input type="email" name="email" placeholder="Email" className="input input-bordered" required />

            </div>

            <div className="form-control">

              <label className="label">
                <span className="label-text">Password</span>
              </label>

              <input type="password" name="password" placeholder="Password" className="input input-bordered" required />

            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
              <p className="text-center mt-2">Already have an Account ? <span className="text-red-600 font-bold"><Link to='/login'>Login</Link></span></p>
            </div>

          </form>

        </div>
      </div>
    </div>
  );
};

export default Register;