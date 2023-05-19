import logo from './logo.svg';
// import './App.css';
import { Fragment } from 'react';
import Navbar from './components/navbar/Navbar';
import Main from './components/main/Main';
import Categories from './components/categories/Categories';
import Creativity from './components/creativity/Creativity';
import Team from './components/team/Team';
import Skills from './components/skills/Skills';
import Freelancers from './components/freelancers/Freelancers';
import Proposition from './components/proposition/Proposition';
import Toprated from './components/toprated/Toprated';
import Getstarted from './components/getStarted/Getstarted';
import Footer from './components/footer/Footer';

function App() {
  return (
    <Fragment>
    
      <Navbar/>
      <Main/>
      <Categories/>
      <Creativity/>
      <Team/>
      <Skills/>
      <Freelancers/>
      <Proposition/>
      <Toprated/>
      <Getstarted/>
      <Footer/>

    </Fragment>
      
   
  );
}

export default App;
