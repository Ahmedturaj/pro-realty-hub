

import { useParams, useLoaderData, Link } from 'react-router-dom'
const EstateDetails = () => {
    const estates = useLoaderData()
    const { id } = useParams()
    const idInt = parseInt(id);
    const estate = estates.find(estate => estate.id === idInt);
    const { image, estate_title, status, segment_name, price, area, location, facilities,description } = estate;
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">{estate_title}</h1>
                    <p className="py-6">{description}</p>
                    <Link><button className="btn mt-5 hover:border-b-2 hover:border-green-500 hover:shadow-md hover:shadow-green-200 hover:text-green-500 bg-green-500 text-white">Go Home</button></Link>
                </div>
            </div>
        </div>
    );
};



export default EstateDetails;