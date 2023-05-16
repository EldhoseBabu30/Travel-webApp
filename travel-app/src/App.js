import "./App.css";
import { Route, Routes } from 'react-router-dom'; 
import Home from "./routes/Home";
import About from "./routes/About";
import Service from "./routes/Service";
import Contact from "./routes/Contact";
import SignUp from "./components/SignUp";
import TravelPlan from "./components/TravelPlan";


export default function App(){
  return(
    <div className='App'>
      <Routes> 
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/plans" element={<TravelPlan/>}/>

      </Routes>
    
      
      
      
      
     
    </div>
  );
}


