
//--- Dashboard.js --- 

import "../../Dashboard.css";

import { useState } from "react";
import { Link } from "react-router-dom";

const Dashboard = (props) => {

    const [msg,setMsg] = useState("");

    const handleLinkClick = (e, index) => {

        const _questions = ["Category Question 1",
            "Category Question 2",
            "Category Question 3",
            "Category Question 4",
            "Category Question 5",
            "Category Question 6",
            "Category Question 7",
            "Category Question 8",
            "Category Question 9",
        ];

        try {

            setMsg(_questions[index])

        } catch (error) {
            
        }
    }

    return (
        <>

        <div style={headerStyle}>
            <div style={{"display":"flex"}}>
              <h1 style={{"width":"60%", "text-align":"right"}}>Dashboard</h1>
              <span style={{"width":"40%","text-align":"right"}}>
                <span>Welcome, {props.user}</span>{"    "}  
                <Link to="/login">logout</Link>
              </span>
            </div>
        </div>

       <div style={{overflow:"auto"}}>
         <div className="menu">
         <button onClick={(e)=>handleLinkClick(e,0)}>Category Link 1</button><p/>
         <button onClick={(e)=>handleLinkClick(e,1)}>Category Link 2</button><p/>
         <button onClick={(e)=>handleLinkClick(e,2)}>Category Link 3</button><p/>
         <button onClick={(e)=>handleLinkClick(e,3)}>Category Link 4</button><p/>
         <button onClick={(e)=>handleLinkClick(e,4)}>Category Link 5</button><p/>         
         <button onClick={(e)=>handleLinkClick(e,5)}>Category Link 6</button><p/>         
         <button onClick={(e)=>handleLinkClick(e,6)}>Category Link 7</button><p/>         
         <button onClick={(e)=>handleLinkClick(e,7)}>Category Link 8</button><p/>         
         <button onClick={(e)=>handleLinkClick(e,8)}>Category Link 9</button><p/>         
       </div>

      <div className="main">
        <h2>Lorum Ipsum</h2>
        {msg}
      </div>

      <div className="right">
          <h2>About</h2>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
        </div>
      </div>
      <p></p>
      <div style={{"background-color":"#e5e5e5","text-align":"center","padding":"10px","margin-top":"7px;"}}>
           footer
      </div>
 </>
  )
}

const headerStyle = {
 
    backgroundColor:"#e5e5e5",
    padding:"15px",
    textAlign:"center",
    alignItems: "center",
    justifyContent: "center"
  }
  
export default Dashboard;