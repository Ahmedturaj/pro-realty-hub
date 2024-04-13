import { useEffect, useState } from "react";
import AgentCard from "./AgentCard";
const Agent = () => {
    const [agents, setAgents] = useState([]);
    useEffect(() => {
        const loader = async () => {
            const res = await fetch('/agents.json')
            const data = await res.json()
            setAgents(data);
        }
        loader();
    }, [])
    return (
        <div className="w-11/12 mx-auto mt-20">
            <div className="">
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
            ">Our Agents</h2>
            </div>


            <div className="my-10 grid grid-cols-1 justify-items-center lg:grid-cols-2 gap-5">

                {
                    agents.map(agent =><AgentCard key={agent.id} agent={agent}></AgentCard> )
                }
            </div>

        </div>
        </div>
    );
};

export default Agent;