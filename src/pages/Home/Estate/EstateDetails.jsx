import { useParams, useLoaderData, Link } from 'react-router-dom'
import { FaLocationDot } from "react-icons/fa6";
import { LuSquareAsterisk } from "react-icons/lu";
import { FaLightbulb } from "react-icons/fa6";
import { FaCheckDouble } from "react-icons/fa6";
import { CiBadgeDollar } from "react-icons/ci";
import PageTitle from '../../../components/PageTitle/PageTitle';
const EstateDetails = () => {
    const estates = useLoaderData()
    const { id } = useParams()
    const idInt = parseInt(id);
    const estate = estates.find(estate => estate.id === idInt);
    const { image, estate_title, status, segment_name, price, area, location, facilities, description } = estate;
    return (
        <div className="hero min-h-screen bg-base-200">
            <PageTitle title={estate_title}></PageTitle>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={image} className=" rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold mb-8">{estate_title}</h1>
                    <p className='mb-2'>Segment:{segment_name}</p>
                    <p className='mb-2'>For:{status}</p>
                    <p className='mb-2 flex items-center'><FaLocationDot className='text-green-500 text-2xl mr-2' />{location}</p>
                    <p className='mb-2 flex items-center'><LuSquareAsterisk className='text-green-500 text-2xl mr-2' />{area} SQ FT</p>
                    <p className='mb-2 flex items-center'><CiBadgeDollar className='text-green-500 text-2xl mr-2' />{price}</p>
                    <ul>
                        <p className='flex items-center font-bold'><FaLightbulb className='text-green-500' />-Facilities</p>
                        {
                            facilities.map((facility, ind) => <li className='flex items-center font-light text-sm gap-2' key={ind}><FaCheckDouble className='text-green-500' />{facility}</li>)
                        }

                    </ul>
                    <p className="py-6">{description}</p>
                    <Link to={'/'}><button className="btn mt-5 hover:border-b-2 hover:border-green-500 hover:shadow-md hover:shadow-green-200 hover:text-green-500 bg-green-500 text-white">Go Home</button></Link>
                </div>
            </div>
        </div>
    );
};



export default EstateDetails;