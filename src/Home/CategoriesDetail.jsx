import { Carousel } from "@material-tailwind/react";
import { useLoaderData, useParams } from "react-router-dom";

const CategoriesDetail = () => {
  const { id } = useParams();
  const loadedData = useLoaderData();

  const findData = loadedData.find((data) => data.id == id);
  const slides = [
    "https://i.ibb.co/crRZh8f/cheronobyl.jpg",
    "https://i.ibb.co/crRZh8f/cheronobyl.jpg",
  ];

  return (
    <div>
      <div>
        <Carousel className="rounded-xl ">
          {slides.map((slide) => {
            <img
              src={slide}
              alt="image 1"
              className="h-full w-full object-cover"
            />;
          })}
        </Carousel>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 container mx-auto my-10">
        {findData?.products?.map((product) => (
          <div key={product.id}>
            <div>
              <img
                className="w-[300px] md:w-[550px] h-60 md:h-96"
                src={product.image}
                alt={product.name}
              />
              <h1> {product.name} </h1>
              <p> {product.type} </p>
              <p> {product.price} </p>
              <p> {product.rating} </p>
              <button>See More</button> <br />
              <button>Update</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesDetail;
