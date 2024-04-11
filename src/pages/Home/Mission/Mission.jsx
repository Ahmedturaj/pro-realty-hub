
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css'
AOS.init();
const Mission = () => {
    return (
        <div >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 gap-4 my-14 justify-center items-center">
                <div className="gap-0 md:text-justify text-center">
                    <p className="font-bold text-4xl md:text-4xl lg:text-5xl  ">Our mission is to</p>
                    <p  className="font-bold text-4xl md:text-4xl lg:text-5xl ">redefine real</p>
                    <p   className="font-bold text-4xl md:text-4xl lg:text-5xl ">Estate for the</p>
                    <p  className="font-bold text-4xl md:text-4xl lg:text-4xl  ">customers</p>
                </div>
                <div className="">
                    <p className='md:text-xl'>Finderland is one of the worlds leading property agents. Our experience spans the globe.</p>
                    <p className='md:text-xl'>We have been advising on buying, selling and renting property for over 160 years, from country cottages to city centre offices, agricultural land to new-build developments.</p>
                </div>
                <div className="text-justify ">

                    <li className='text-xl' > Only pay when you got the paper. </li>
                    <li className='text-xl'>Full of modern featured. </li>
                    <li className='text-xl'>Unlimited featured use</li>

                </div>
            </div>
            <hr className='border-1 border-dotted border-black' />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 my-12 justify-center items-center">
                <div className="flex gap-2 justify-center items-center">
                    <h2 className="text-4xl text-green-600 font-bold">$15.4M</h2>
                    <div className="">
                        <p data-aos="fade-right"
                            data-aos-offset="300"
                            data-aos-duration='200'
                            data-aos-easing="ease-in-sine"
                        >OWNED FORM</p>
                        <p data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine"
                        data-aos-duration='200'
                        data-aos-delay='200'>PROPERTIES TRANSACTIONS</p>
                    </div>
                </div>
                <div className="flex gap-2 justify-center items-center">
                    <h2 className="text-4xl text-green-600 font-bold">24k+</h2>
                    <div className="">
                        <p data-aos="fade-right"
                            data-aos-offset="300"
                            data-aos-duration='200'
                            data-aos-easing="ease-in-sine">Members FORM</p>
                        <p data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine"
                        data-aos-duration='200'
                        data-aos-delay='200'>PROPERTIES TRANSACTIONS</p>
                    </div>
                </div>
                <div className="flex gap-2 justify-center items-center">
                    <h2 className="text-4xl text-green-600 font-bold">500+</h2>
                    <div className="">
                        <p data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-duration='200'
                        data-aos-easing="ease-in-sine" >Company FORM</p>
                        <p data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-duration='200'
                        data-aos-easing="ease-in-sine"
                        data-aos-delay='200'>PROPERTIES TRANSACTIONS</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Mission;