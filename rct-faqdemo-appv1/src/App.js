//-- App.js  -- 

import './App.css';
import './AppIndex.css';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Dashboard from './components/pages/Dashboard';

function App() {

  const [user,setUser] = useState("");

  return (
    <>
    <Router>
        <div className='container'>           
          <Routes>
            <Route path="/" element={<Home title="React Faq Demo App v2.1.1" user={user} setUser={setUser}/>}/>
            <Route path='/login' element={<Login user={user} setUser={setUser}/>}/>
            <Route path='/register' element={<Register user={user} setUser={setUser}/>}/>
            <Route path='/dashboard' element={<Dashboard user={user} setUser={setUser}/>}/>
            <Route path="*" element={
                <>
                  <h4>No page found</h4>
                </>
            }/>
          </Routes>
        </div>
    </Router>
    </>
  );
}

export default App;