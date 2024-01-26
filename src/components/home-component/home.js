import Products from "../products/products";
import { useSelector } from "react-redux";
import { selectIsLoading } from "../../store/products/product.selector";
import { ClipLoader } from "react-spinners";
import Sort from "../sort/sort";
import "./homeComp.css";

const override = {
  display: "block",
  margin: "20% auto",
};

function HomeComponent() {
  const isLoading = useSelector(selectIsLoading);

  return (
    <div className="home-container">
      <Sort />
      {isLoading ? <ClipLoader cssOverride={override} /> : <Products />}
    </div>
  );
}

export default HomeComponent;