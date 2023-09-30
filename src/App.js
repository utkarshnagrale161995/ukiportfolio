import Academics from './component/Academics';
import Certification from './component/Certification';
import Contact from './component/Contact';
import About from './component/About';
//import Header from './component/Header';
import Home  from './component/Home';
import Professional from './component/Professional';  
import Project from './component/Project';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

export default function App() {
  return (
    <div>
    <BrowserRouter>
    <nav>
      <ul>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/academics">Academics</Link></li>
        <li><Link to="/professional">Professional</Link></li>
        <li><Link to="/certification">Certification</Link></li>
        <li><Link to="project">Project</Link></li>
        <li><Link>Download Resume</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/academics" element={<Academics/>}></Route>
      <Route path="/certification" element={<Certification/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="/professional" element={<Professional/>}></Route>
      <Route path="/project" element={<Project/>}></Route>
    </Routes>
    </BrowserRouter>
   </div>
  )
  }