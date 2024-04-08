import PageTitle from "../../components/PageTitle/PageTitle";
import Banner from "./Banner";


const Home = () => {
    return (
        <div className="my-14">
           <PageTitle title={'Home'}></PageTitle>
            <Banner></Banner>
        </div>
    );
};

export default Home;