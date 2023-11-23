import { IMG_CDN_URL } from "../utils/constant";

const RestaurantCard = ({ title, data }) => {
    const restaurants = data?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    return (
        <>
            <div className="mx-16">
                <div className="p-2">
                    <h2 className="text-2xl font-bold mb-4 ml-3">{title}</h2>
                    <div className="grid grid-rows-3 grid-flow-col">
                        {restaurants.map((restaurant) => (
                            <div className="rounded-lg w-80 h-auto hover:bg-gray-100 mt-4">
                                <a href="#" className="">
                                    <div className="w-[100%] h-[100%]">
                                        <img className="rounded-xl w-[405px] h-[252px] object-cover" src={IMG_CDN_URL + restaurant?.info?.cloudinaryImageId} alt={restaurant?.info?.name} />
                                        <div className="p-2">
                                            <p className="text-lg font-medium">{restaurant?.info?.name}</p>
                                            <p>{restaurant?.info?.avgRatingString}</p>
                                            <div className="text-black opacity-70">
                                                <p className="text-base">{restaurant?.info?.cuisines.join(', ')}</p>
                                                <p className="text-base">{restaurant?.info?.areaName}</p>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default RestaurantCard;