import { MEDIA_ASSETS_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const { cloudinaryImageId, name, costForTwo, cuisines, avgRating } =
    resData?.info;
  return (
    <div className="res-card mr-2 p-4 w-[250px] rounded-lg">
      <img
        className="res-logo  rounded-2xl shadow-xl hover:shadow-2xl h-36 w-96 object-cover"
        src={MEDIA_ASSETS_URL + cloudinaryImageId}
        alt="res-logo"
      />
      <h3 className="text-lg font-bold py-2">{name}</h3>
      <h4 className="text-lg font-semibold">{avgRating}</h4>
      <h4
        className="text-lg font-semibold"
        style={{ color: "rgba(2, 6, 12, 0.6)" }}
      >
        {cuisines.join(", ")}
      </h4>
      {/* <h4 className="text-lg font-semibold"style={{color:'rgba(2, 6, 12, 0.6)' }}>{costForTwo}</h4> */}
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="label absolute bg-black text-white m-4 px-1">Promoted</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
