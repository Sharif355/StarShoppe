import { Link, useLoaderData, useParams } from "react-router-dom";
import { FaEdit, FaEye } from "react-icons/fa";
import Ratings from "../Ratings/Ratings";
import Sliders from "./Sliders";

const CategoriesDetail = () => {
  const { brand_name } = useParams();
  const loadedData = useLoaderData();

  const findData = loadedData.filter((data) => data.brand_name == brand_name);

  return (
    <div>
      <div>
        <Sliders></Sliders>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 container mx-auto my-10">
        {findData?.map((product) => (
          <div key={product._id}>
            <div className="flex flex-col lg:flex-row ">
              <div className="w-full">
                <img
                  className="w-[300px] md:w-[550px] h-60 rounded-l-lg"
                  src={product.photo}
                  alt={product.name}
                />
              </div>
              <div className="border w-full flex justify-between rounded-r-lg px-2 py-2">
                <div className="space-y-3">
                  <h1>
                    <span className="font-semibold">Name: </span> {product.name}
                  </h1>
                  <p>
                    <span className="font-semibold">Type: </span> {product.type}
                  </p>
                  <p>
                    <span className="font-semibold">Price: </span>
                    {product.price}
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="font-semibold">Rating:</span>
                    <Ratings rating={product.rating}></Ratings>
                  </p>
                </div>
                <div>
                  <Link to={`/categories/:brand_name/${product._id}`}>
                    <button className="btn block mb-3">
                      <FaEye></FaEye>
                    </button>
                  </Link>
                  <Link to={`/updates/:brand_name/${product._id}`}>
                    <button className="btn block">
                      <FaEdit></FaEdit>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesDetail;
