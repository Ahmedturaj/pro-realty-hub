import PageTitle from "../../components/PageTitle/PageTitle";
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
        </div>
    );
};

export default Home;