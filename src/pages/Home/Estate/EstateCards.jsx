import { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'
import EstateCard from "./EstateCard";
AOS.init();
const EstateCards = () => {
    const [estates, setEstates] = useState([]);
    useEffect(() => {
        const loader = async () => {
            const res = await fetch('estates.json');
            const data = await res.json();
            setEstates(data);
        }
        loader()
    }, [])
    return (
        <div className="my-8 px-4">
            <div data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration='500' className="border-l border-opacity-40 border-green-600 border-b-2 p-1 rounded-lg  md:w-4/12">
                <h2 data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration='500'
                    data-aos-delay='500'
                    className="text-3xl p-4 border-opacity-40 rounded-md border-l border-green-600 border-b-2
            ">Recent Properties</h2>
            </div>
            <div className="mt-14 lg:w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5">
                {
                    estates.map(estate=><EstateCard key={estate.id} estate={estate}></EstateCard>)
                }
            </div>
        </div>
    );
};

export default EstateCards;