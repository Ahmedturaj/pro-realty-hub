import {useLoaderData} from 'react-router-dom'
import Career from './Career';

const Careers = () => {
    const careers= useLoaderData()

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 w-10/12 mx-auto my-14'>
         {
         careers.map(career=><Career key={career.id} career={career}></Career>)
         }  
        </div>
    );
};

export default Careers;