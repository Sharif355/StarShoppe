import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import { useLoaderData } from "react-router-dom";
import Categories from "./Categories";

const Home = () => {
  const loaderData = useLoaderData();
  console.log(loaderData);

  return (
    <div className="container mx-auto">
      <Helmet>
        <title>StarShoppe | Home</title>
      </Helmet>
      <h1>This is Home.</h1>
      <Banner></Banner>
      <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {loaderData?.map((data) => (
          <Categories key={data._id} data={data}></Categories>
        ))}
      </div>
    </div>
  );
};

export default Home;
