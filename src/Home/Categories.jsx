import { Link } from "react-router-dom";

const Categories = ({ data }) => {
  const { id, brand_name, brand_image } = data;

  return (
    <div>
      <Link to={`/categories/${id}`}>
        <img
          className="w-[300px] md:w-[500px] h-80 rounded-t-lg shadow-lg "
          src={brand_image}
          alt={brand_name}
        />
        <h1> {brand_name} </h1>
      </Link>
    </div>
  );
};

export default Categories;
