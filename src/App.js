import logo from './logo.svg';
// import './App.css';
import { Fragment } from 'react';
import Navbar from './components/navbar/Navbar';
import Main from './components/main/Main';
import Categories from './components/categories/Categories';
import Creativity from './components/creativity/Creativity';
import Team from './components/team/Team';
import Skills from './components/skills/Skills';

function App() {
  return (
    <Fragment>
      <Navbar/>
      <Main/>
      <Categories/>
      <Creativity/>
      <Team/>
      <Skills/>
    </Fragment>
      
   
  );
}

export default App;
