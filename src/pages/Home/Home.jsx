// import bannerImg from '../../assets/weddingBanner.jpg'

const Home = () => {
  return (
    <div className="min-h-96 text-center bg-[url('/../../assets/weddingBanner3.png')] bg-cover bg-center"
    // style={{
    //   backgroundImage: ""
    // }}
    >
      <h1 className="text-3xl ">Your Free Wedding Manager App</h1>
      <button className="btn">Plan Your Wedding</button>
      {/* <img src={bannerImg} alt="" /> */}
    </div>
  );
};

export default Home;

//  className="bg-[url('../../assets/Wedding-banner.jpg')] bg-cover "