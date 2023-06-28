import '../App.css';
import { Route, Routes } from 'react-router-dom';
import {Home} from '../pages/Home';
import {Contact} from '../pages/Contact';
import {Projects} from '../pages/Projects';
import {PageNotFound} from '../pages/PageNotFound';


export function AppRoutes() {
  return (
    <main className="main">
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </main>
  );
}

export default AppRoutes;