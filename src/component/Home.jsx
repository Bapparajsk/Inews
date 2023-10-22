import Articles from "./Articles";

const Home = (props) => {
    return (
        <div>
            <h1 className={'text-blue-50 text-3xl text-center py-4'}>Top Hading</h1>
            <Articles setprogress={props.setprogress} newsName={props.newsName} country={props.country}/>
        </div>
    );
};

export default Home;