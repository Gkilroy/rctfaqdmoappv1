import './App.css';
import './AppIndex.css';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/pages/Home';
import Login from './components/pages/Login';

function App() {
  return (
    <>
    <Router>
        <div className='container'>
          <Routes>
            <Route path="/" element={<Home title="React Faq Demo App v1.0.3" />}/>
            <Route path='/login' element={<Login/>}/>
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

