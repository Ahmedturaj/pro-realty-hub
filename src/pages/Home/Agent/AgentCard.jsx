
import PropTypes from 'prop-types';
import AOS from 'aos';
import 'aos/dist/aos.css'
AOS.init();
const AgentCard = ({ agent }) => {
    return (
        <div
            data-aos="fade-up"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-duration='700'
            className="card w-full md:w-[500px] md:h-[550px]  bg-white border-green-500 border-b-2 border-l-2 border-r-2 border-opacity-40 shadow-green-200 shadow-lg">
            <figure><img src={agent.image} alt={`Photo of ${agent.name}`} className='hover:scale-105 w-full h-full' style={{ transition: 'all 1s' }} /></figure>
            <div className="card-body">
                <h2 className="card-title">{agent.name}</h2>
                <p>{agent.designation}</p>
            </div>
        </div>
    );
};

AgentCard.propTypes = {
    agent: PropTypes.object
};

export default AgentCard;