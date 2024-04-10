import PageTitle from "../../components/PageTitle/PageTitle";
import Agent from "./Agent/Agent";
import Banner from "./Banner";
import EstateCards from "./Estate/EstateCards";
import Mission from "./Mission/Mission";


const Home = () => {
    return (
        <div className="">
            <PageTitle title={'Home'}></PageTitle>
            <Banner></Banner>
            <Mission></Mission>
            <div className="">
                <EstateCards></EstateCards>
            </div>
            <div className="">
                <Agent></Agent>
            </div>
        </div>
    );
};

export default Home;