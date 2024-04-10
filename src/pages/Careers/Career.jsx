
import PropTypes from 'prop-types';

const Career = ({ career }) => {
    const { title, short_description, full_or_part_time, starting_salary, image } = career
    return (
        
            <div className="card bg-white border-green-500 border-b-2 border-l-2 border-r-2 border-opacity-40 shadow-green-200 shadow-lg">
                <figure><img src={image} alt={`image of${title}`} />
                <div className="badge bg-green-500 text-white absolute z-10 top-3 left-3">{full_or_part_time}</div>
                </figure>

                <div className="card-body">
                    <h2 className="card-title">
                       {title}
                    </h2>
                    <p>{short_description}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">{starting_salary}</div>
                        
                    </div>
                </div>
            </div>
    );
};

Career.propTypes = {
    career: PropTypes.object
};

export default Career;