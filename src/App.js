import logo from './logo.svg';
import './App.css';
import Demo from './Components/Routing/Demo';
import {BrowserRouter, Route, Routes,} from 'react-router-dom';
import ChildDemo from './Components/Routing/ChildDemo';
import { NavLink } from "react-router-dom";
//import Home from './Components/Routing/Home';
import React, {useEffect, useState} from "react";
import StateDemo from './StateDemo';
import UseMemoDemo from './Components/UseMemoDemo';
import ContextA from './Components/ContextAPIDemo/ContextA';
import ComponentA from './Components/Error Boundary/ComponentA';
import ErrorBoundary from './Components/Error Boundary/ErrorBoundary'
import Home from './Components/Redux/Home';

function App() {
  const [count, setCount] = useState(0);
  const [isvisible, setIsVisible] = useState(false);
    // useEffect(() => {
    //   if (isvisible) {
    //     setInterval(function() { setCount(prev => prev + 1)},1000)
    //   } 
    //   return () => {

    //   }
    // },[isvisible])
    const name = 'Shiva';
  return (
    <div className="App">
      {/* <BrowserRouter>
           <Routes>
            <Route path='/demo' element={<Demo count={count} setCount={setCount} isvisible={isvisible} setIsVisible={setIsVisible}/>} />
            <Route path='/childdemo' element={<ChildDemo />} />
            <Route path='/' element={<Home />} />
           </Routes>
           <div>
           <NavLink to='demo'>Get Demo</NavLink>
           </div>
           <div>
           <NavLink to='childdemo'>Get Child</NavLink>
           </div>
           <div>
           <NavLink to=''>Go to Home</NavLink>
           </div>
           <menu>  
    <li><NavLink to='demo'>Get Demo</NavLink></li>  
    <li><NavLink to='childdemo'>Get Child</NavLink></li>  
    <li> <NavLink to=''>Go to Home</NavLink></li> 
 </menu>
           </BrowserRouter>
           {isvisible && <p>I am Visible now</p>} */}
           <ErrorBoundary>
           <ComponentA />
           </ErrorBoundary>
           <Home />
    </div>
  );
}

export default App;
