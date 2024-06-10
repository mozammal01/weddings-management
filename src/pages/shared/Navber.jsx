import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import navImg from '../../assets/logo-black-1.png'

const Navber = () => {

  const { user, logOut } = useContext(AuthContext);

  console.log(user);
  const handleSignOut = () => {

    logOut()
      .then(result => {
        console.log(result);
      })
      .catch(error => {
        console.error(error);
      })
  }

  const NavLinks = <>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/services'>Services</NavLink></li>
    <li><NavLink to='/experience'>Experience</NavLink></li>
  </>

  return (
    <div className="navbar max-w-6xl mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {NavLinks}
          </ul>
        </div>
        <Link to='/'><img src={navImg} width={200} alt="" /></Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-8">
          {NavLinks}
        </ul>
      </div>
      {user ?
        <div className="navbar-end">
          <p className="mx-2">{user.email}</p>
          <a className="btn bg-pink-500 text-white" onClick={handleSignOut}>logOut</a>
        </div>
        :
        <div className="navbar-end">
          <Link className="btn bg-pink-500 text-white" to="/login">Login</Link>
        </div>
      }
    </div>
  );
};

export default Navber;