import { Link } from "react-router-dom";
import CheckImg from "../assets/check-solid.svg";

function PricingCard({ plan: { title, price, features, highlighted } }) {
    return (
        <div className="flex flex-col h-full">
            <div className="text-center">
                <h3 className="text-2xl font-regular text-neutral-50 mb-3">{title}</h3>
                <p className="text-orange-400 font-bold text-3xl mb-3">
                    $ {price}
                </p>
            </div>
            <div className="mb-8 lg:mb-2">
                <ul>
                    {features.map((feature) => (
                        <li className="flex flex-row mb-1" key={feature}>
                            <img className="w-3 h-3 me-2 my-auto" src={CheckImg} alt="check" />
                            <p className="text-xl text-neutral-50">{feature}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <Link className={`mt-auto flex py-2 w-full  bg-neutral-50 text-neutral-800 justify-center items-center rounded-xl opacity-90 hover:opacity-100 font-semibold ${highlighted && "bg-orange-500! text-neutral-50!"}`} to="#">
                Pilih
            </Link>
        </div>
    );
}
export default PricingCard
