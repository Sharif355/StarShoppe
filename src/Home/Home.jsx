import { Helmet } from "react-helmet-async";
import Banner from "./Banner";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>StarShoppe | Home</title>
      </Helmet>
      <h1>This is Home.</h1>
      <Banner></Banner>
    </div>
  );
};

export default Home;
