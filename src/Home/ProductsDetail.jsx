import { useLoaderData, useParams } from "react-router-dom";

const ProductsDetail = () => {
  const { id } = useParams();
  const loadedData = useLoaderData();

  const showDetails = loadedData.filter((data) => data._id == id);
  console.log(showDetails);

  return (
    <div className="container mx-auto">
      <h1>products detail</h1>
      {showDetails?.map((detail) => (
        <div key={detail._id}>
          <img className="h-[400px]" src={detail.photo} alt={detail.name} />
          <h1> {detail.name} </h1>
          <h1> {detail.description} </h1>
          <h1> {detail.price} </h1>
          <h1> {detail.rating} </h1>
        </div>
      ))}
      <button className="btn">Add to Cart</button>
    </div>
  );
};

export default ProductsDetail;
