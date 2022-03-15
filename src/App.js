import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';

import Header from "./Header/Header";
import Main from './pages/Main';
import Portfolio from './pages/Portfolio';
import Profile from './pages/Profile';
import Service from './pages/Service';
import Footer from "./Footer/Footer";


function App() {
  return (
    <Router>
      <Header/>
        <Routes>
          <Route exact path='/' element={<Main/>}/>
          <Route path='/portfolio' element={<Portfolio/>}/>
          <Route path='/service' element={<Service/>}/>
          <Route path='/profile' element={<Profile/>}/>
        </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
