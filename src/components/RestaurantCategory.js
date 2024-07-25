import ItemList from "./ItemList";

const RestaurantCategory = (data) => {
  return (
    <div className="categories m-4 p-4">
      <div className="flex justify-between items-center cursor-pointer">
        <span className="category-title font-bold text-lg">
          {data?.data?.title} ({data?.data?.title?.length})
        </span>
        <span className="category-icon">▽</span>
      </div>
      <ItemList items={data.data.itemCards} />
    </div>
  );
};

export default RestaurantCategory;