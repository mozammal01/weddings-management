import Services from "../Services/Services";
import Navber from "../shared/Navber";

const Home = () => {
  return (
    <>
      <div className="min-h-screen text-center  bg-cover bg-center"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.7)), url('src/assets/weddingBanner.jpg')"
        }}
      >
        <Navber></Navber>
        <h1 className="text-5xl pt-48 font-bold">Your Free Wedding Manager App</h1>
        <button className="btn my-5 text-white bg-pink-500">Plan Your Wedding</button>
      </div>
      <Services></Services>
    </>
  );
};

export default Home;