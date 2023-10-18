import { Carousel } from "@material-tailwind/react";
import { Link, useLoaderData, useParams } from "react-router-dom";

const CategoriesDetail = () => {
  const { brand_name } = useParams();
  const loadedData = useLoaderData();
  console.log(brand_name, loadedData);

  const findData = loadedData.filter((data) => data.brand_name == brand_name);
  console.log(findData);

  return (
    <div>
      <div>
        <Carousel className="rounded-xl ">
          {findData?.carousel?.map((slider) => (
            <div key={slider.id} className="flex container mx-auto ">
              <img
                id="slide1"
                src={slider.image1}
                alt="image 1"
                className="h-full w-full object-cover relative"
              />
              <div className="absolute">
                <a href="#slide2" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide3" className="btn btn-circle">
                  ❯
                </a>
              </div>
              <img
                id="slide2"
                src={slider.image2}
                alt="image 1"
                className="h-full w-full object-cover relative"
              />
              <div className="absolute">
                <a href="#slide1" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide3" className="btn btn-circle">
                  ❯
                </a>
              </div>
              <img
                id="slide3"
                src={slider.image3}
                alt="image 1"
                className="h-full w-full object-cover relative"
              />
              <div className="absolute">
                <a href="#slide2" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide1" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 container mx-auto my-10">
        {findData?.map((product) => (
          <div key={product._id}>
            <div>
              <img
                className="w-[300px] md:w-[550px] h-60 md:h-96"
                src={product.photo}
                alt={product.name}
              />
              <h1> {product.name} </h1>
              <p> {product.type} </p>
              <p> {product.price} </p>
              <p> {product.rating} </p>
              <Link to={`/categories/:brand_name/${product._id}`}>
                <button className="btn block">See More</button>{" "}
              </Link>
              <button>Update</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesDetail;
