import { useEffect, useState } from "react";

const EstateCards = () => {
    const [estates, setEstates] = useState([]);
    useEffect(() => {
        const loader = async () => {
            const res = await fetch('estates.json');
            const data = await res.json();
            setEstates(data);
            console.log(data);
        }
        loader()
    }, [])
    return (
        <div className="my-12 px-4">
           <div className="border-l border-opacity-40 border-green-600 border-b-2 p-1 rounded-lg  w-4/12">
           <h2 className="text-3xl p-4 border-opacity-40 rounded-md border-l border-green-600 border-b-2
            ">Recent Properties{estates.length}</h2>
           </div>
        </div>
    );
};

export default EstateCards;