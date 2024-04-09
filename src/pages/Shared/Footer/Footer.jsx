import { MdRealEstateAgent } from "react-icons/md";
import { BsFacebook } from "react-icons/bs";
import { FaGithubAlt } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <footer className="py-6 text-white bg-gray-900">
            <div className="container px-6 mx-auto space-y-6 divide-y dark:divide-gray-600 md:space-y-12 divide-opacity-50">
                <div className="grid grid-cols-12">
                    <div className="pb-6 col-span-full md:pb-0 md:col-span-6">
                        <a className="btn btn-ghost text-white md:text-xl text-xs gap-0"><span className="md:text-4xl text-xl text-[hsl(112,43%,55%)]"><MdRealEstateAgent /></span><span className="text-xl md:text-2xl  text-[hsl(112,43%,55%)] p-0">
                            P</span>ro<span className="text-xl md:text-2xl  text-[hsl(112,43%,55%)] p-0">R</span>ealty<span className="text-base md:text-2xl  text-[hsl(112,43%,55%)] p-0">Hub</span></a>
                            <p className="font-caveat">Risus commodo congue augue phas ellus morbi hymenaeos ante tincidu eu orci dictum bibe ndum lacus pla tea primis mi lacinia</p>
                            <div className="text-3xl mt-10 flex gap-11">
                                <div className="hover:text-[hsl(112,43%,55%)] cursor-pointer"><BsFacebook/></div>
                                <div className="hover:text-[hsl(112,43%,55%)] cursor-pointer"><FaGithubAlt/></div>
                                <div className="hover:text-[hsl(112,43%,55%)] cursor-pointer"><RiInstagramFill/></div>
                            </div>
                    </div>
                    <div className="col-span-6 text-center md:text-left md:col-span-3">
                        <p className="pb-1 text-lg font-medium">Contact Info</p>
                        <ul className="text-sm">
                            <li>
                                <a rel="noopener noreferrer" href="#" className="hover:text-[hsl(112,43%,55%)]">Unicoder Design Agency 301 The Greenhouse, Custard Factory, London, E3 8DY.</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#" className="hover:text-[hsl(112,43%,55%)]">+1 246-345-0695</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#" className="hover:text-[hsl(112,43%,55%)]">helpline@homex.com</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-span-6 text-center md:text-left md:col-span-3">
                        <p className="pb-1 text-lg font-medium">Appointment</p>
                        <p className="text-sm">Litora ligula dapibus scelerisque vitae, fermentum aenean gravida lobortis mus pulvinar magna turient primis.</p>
                       <Link to={'/register'}> <button className="btn mt-10 text-[#f2f2f2f2] text-base  bg-[hsl(112,43%,55%)] hover:bg-[hsl(112,43%,55%)]">Sign Up</button></Link>
                    </div>
                </div>
                <div className="grid justify-center pt-6 lg:justify-between font-caveat">
                    <div className="flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6">
                        <span>©2024 All rights reserved</span>
                        <a rel="noopener noreferrer" href="#">
                            <span>Privacy policy</span>
                        </a>
                        <a rel="noopener noreferrer" href="#">
                            <span>Terms of service</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
