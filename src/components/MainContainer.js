import { useEffect, useState } from "react";
import OfferCard from "./OfferCard";
import RestaurantCard from "./RestaurantCard";
import { API_URL } from "../utils/constant";

const MainContainer = () => {
    const [offerCard, setOfferCard] = useState([]);
    const [restaurantCard, setRestaurantCard] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(API_URL);
        const json = await data.json();

        console.log(json?.data?.cards);
        setOfferCard(json?.data?.cards[0]?.card?.card);
        setRestaurantCard(json?.data?.cards);
    }

    return (
        <div className="pt-20">
            <main className="flex flex-col">
                {offerCard?.imageGridCards?.info && <OfferCard offerData={offerCard} />}
                <hr className="border-solid border-gray-300 mt-8 mb-8 ml-16 mr-16" />
                <RestaurantCard title={restaurantCard[3]?.card?.card?.title} data={restaurantCard[5]} />
            </main>
        </div>
    );
}

export default MainContainer;