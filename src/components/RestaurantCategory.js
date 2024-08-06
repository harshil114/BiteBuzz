import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = (data) => {
  const [showItems, setShowItems] = useState(false);
  const handleClick = () => {
    setShowItems(!showItems);
  };
  return (
    <div className="categories m-4 p-4">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={handleClick}
      >
        <span className="category-title font-bold text-lg">
          {data?.data?.title} ({data?.data?.title?.length})
        </span>
        <span className="category-icon">▽</span>
      </div>
      {showItems && <ItemList items={data.data.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
