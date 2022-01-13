import './App.css';

import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import Authors from './Authors';
import Comments from './Comments';
import Footer from './Footer';
import Users from './Users';
import Error from './Error';
import User from './User';
import NAV from './Nav';

function App() {

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };



  return (
    <>
        <Router>
            <NAV/>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/!#" element={<Home/>}/>
              <Route path="/:id" element={<Home/>}/>
              <Route path="/Authors" element={<Authors/>}/>
              <Route path="/FavAuthors" element={<Authors/>}/>
              <Route path="/Users/" element={<Users/>}/>
              <Route path="/Users/User/:Id" element={<User/>}/>
              <Route path="/Users/User/!#" element={<User/>}/>
              <Route path="/Comments/:id" element={<Comments/>}/>
              <Route path="*" element={<Error/>}/>
            </Routes>
              {showButton && (
              <button onClick={scrollToTop} className="back-to-top">^
              </button>)}
            <Footer/>
        </Router>
    </>
  );
}


export default App;
