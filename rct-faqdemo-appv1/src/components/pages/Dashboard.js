import { Link } from "react-router-dom";

const Dashboard = (props) => {

    return (
    <>
        <div>
                <span>Dashboard</span>
                <span>{"  "}</span>
                <span>Welcome, Username</span>
                <span>{"  "}</span>
                <span>
                    <Link to="/login">logout</Link>
                </span>
        </div>
        
    </>
    )
}

export default Dashboard;