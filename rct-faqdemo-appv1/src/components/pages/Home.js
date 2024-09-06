//--- Home.js --- 
import Login from "./Login";
const Home = (props) => {
    return (
        <>
            <p>{props.title}</p>
            <p></p>
            <Login user={props.user} setUser={props.setUser}/>
        </>
    )
}
export default Home;