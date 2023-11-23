import { BANNER_CDN_URL } from "../utils/constant";

const OfferCard = ({ offerData }) => {
    const banners = offerData?.imageGridCards?.info;
    return (
        <>
            <div className="mx-16 my-4 overflow-x-scroll">
                <div className="p-4">
                    <h2 className="text-2xl font-bold mb-4 ml-3">Best offers for you</h2>
                    <div className="flex">
                        {banners.map((banner) => (
                            <div className="rounded-lg pl-4" key={banner.id}>
                                <a href="#" className="">
                                    <div className="w-[405px] h-[252px]">
                                        <img className="rounded-xl w-[405px] h-[252px]" src={BANNER_CDN_URL + banner.imageId} alt="" />
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

export default OfferCard;