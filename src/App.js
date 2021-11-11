import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Header/Header";
import Main from './pages/Main'
import Portfolio from './pages/Portfolio'
import Service from './pages/Service'
import Profile from './pages/Profile'
import Content from './Content'

function App() {
  return (
    <Router>
      <Header/>
      <Content>
        <Routes>
          <Route exact path='/' element={<Main/>}/>
          <Route path='/portfolio' element={<Portfolio/>}/>
          <Route path='/service' element={<Service/>}/>
          <Route path='/profile' element={<Profile/>}/>
        </Routes>
      </Content>
    </Router>
  );
}

export default App;
