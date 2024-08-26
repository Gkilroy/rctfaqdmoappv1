import Login from "./Login";

const Home = (props) => {

    return (
        <>
            <p>{props.title}</p>
            <p></p>
            <Login/>
        </>
    )
}

export default Home;