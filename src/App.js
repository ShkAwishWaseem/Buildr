// import Container from './Container';
// import Vision from './Vision';
// import Portfolio from './Portfolio';
// import Accord from './Accord';
// import Team from './Team';
// import Tag from './Tag';
import './App.css';
import Header from './Header';
import Hero from './Hero';
import Footer from './Footer';
import Choose from './Choose';
import Contact from './Contact';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Home';
import Services from './Services';


function App() {
  return (
   <>  
    <Router>
      <Header/>
      <Hero/>
      <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/services' element={<Services/>}/>
          <Route exact path='/choose' element={<Choose/>}/>
          <Route exact path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
      </Router>

   </>
  );
}

export default App;
