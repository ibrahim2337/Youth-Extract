import Banner from "../../component/Banner/Banner";

import ItemCategory from "../../component/ItemCategory/ItemCategory";
import ProductCard from "../../component/ProductCard/ProductCard";
import Safety from "../../component/Safety/Safety";
import Shipping from "../../component/Shipping/Shipping";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <Shipping />

      <ItemCategory />
      <ProductCard />
      <Safety />
    </div>
  );
};

export default HomePage;
