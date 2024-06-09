import { Outlet } from "react-router-dom";
import Footer from "../pages/Footer/Footer";

const Root = () => {
  return (
    <div>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;