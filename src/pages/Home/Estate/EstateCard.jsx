import PropTypes from 'prop-types';
import { FaLocationDot } from "react-icons/fa6";
import { LuSquareAsterisk } from "react-icons/lu";
import { FaLightbulb } from "react-icons/fa6";
import { FaCheckDouble } from "react-icons/fa6";
import { CiBadgeDollar } from "react-icons/ci";
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'
AOS.init();
const EstateCard = ({ estate }) => {
    const { id,image, estate_title, status, segment_name, price, area, location, facilities ,animation,
    offset,
    duration,delay} = estate;
    return (
        <div data-aos={animation} data-aos-offset={offset} data-aos-delay={delay} data-aos-duration={duration} className="card  bg-white border-green-500 border-b-2 border-l-2 border-r-2 border-opacity-40 shadow-green-200 shadow-lg">
            <figure><img src={image} alt={`Picture of ${estate_title}`} className='hover:scale-105 relative' style={{ transition: 'all 1s' }} />
                <div className="badge bg-green-500 text-white absolute z-10 top-3 left-3">{segment_name}</div>
            </figure>
            <div className="card-body">
                <h2 className="card-title">{estate_title}
                    <div className="badge bg-green-500 text-white ">{status}</div>
                </h2>
                <p className='flex items-center'><CiBadgeDollar className='text-2xl text-green-500'/>{price}</p>
                <ul>
                    <p className='flex items-center font-bold'><FaLightbulb className='text-green-500' />-Facilities</p>
                    {
                        facilities.map((facility, ind) => <li className='flex items-center font-light text-sm gap-2' key={ind}><FaCheckDouble className='text-green-500' />{facility}</li>)
                    }

                </ul>
                <div className="card-actions justify-start ">
                    <div className="badge border-green-500 border"><FaLocationDot className='text-green-500' /> {location}</div>
                    <div className="badge border-green-500 border"><LuSquareAsterisk className='text-green-500' />{area}  <span className='text-gray-600'>SQ FT</span></div>
                   
                </div>
               <Link to={`/estate/${id}`}>
               <button className="btn mt-5 hover:border-b-2 hover:border-green-500 hover:shadow-md hover:shadow-green-200 hover:text-green-500 bg-green-500 text-white">View Details</button></Link>
            </div>
        </div>
    );
};

EstateCard.propTypes = {
    estate: PropTypes.object
};

export default EstateCard;