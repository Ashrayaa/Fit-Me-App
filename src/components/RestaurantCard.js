import { IMG_CDN_URL } from "../config";
import { restaurantlist } from "../config";
import Star from "/assets/images/green star.png";



const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,

  lastMileTravelString,
  area,
  avgRating,
}) => {
  return (
    <div className="p-6 ml-24 flex flex-col flex-wrap bg-[#F8F8F8] rounded-lg">
      <img className="rounded-lg" src={IMG_CDN_URL + cloudinaryImageId} />
      <div className="flex flex-col items-start gap-4 overflow-x-auto overflow-y-hidden ">
        <h2 className="text-lg text-[#202020] font-medium mt-4">{name}</h2>

        <h4 className="flex flex-wrap text-[#808080] text-sm font-light">
          {cuisines.join(" , ")}
        </h4>

        <div
          className="flex text-[#202020] font-medium gap-16
         items-center "
        >
          <div className="flex gap-1 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-5 text-[#FC8019]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>
            <h4 className="text-sm">{area}</h4>
          </div>

          <div className="flex gap-1 items-center">
            <img src={Star} className="w-4" />
            <h4 className="text-sm ">{avgRating}</h4>
          </div>
        </div>
        <div className="flex gap-1 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-5 text-[#FC8019]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
            />
          </svg>

          <h4 className="text-sm font-medium">{lastMileTravelString}</h4>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;