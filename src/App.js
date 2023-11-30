import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './Components/Home';
import Contact from './Components/Contact';
import About from './Components/About';
import Service from './Components/Service';

function App() {
  return (
   <div>
            <Routes>
          <Route path='/' element={<Home/>}>Home</Route>
          <Route path='/about' element={<About/>}>About</Route>
          <Route path='/contact' element={<Contact/>}>Home</Route>
          <Route path='/service' element={<Service/>}>Home</Route>
        </Routes>
   </div>
  );
}

export default App;
