import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Header/Header";
import Main from './pages/Main'
import Portfolio from './pages/Portfolio'
import Content from './Content'

function App() {
  return (
    <Router>
      <Header/>
      <Content>
        <Routes>
          <Route exact path='/' element={<Main/>}/>
          <Route path='/portfolio' element={<Portfolio/>}/>
        </Routes>
      </Content>
    </Router>
  );
}

export default App;
