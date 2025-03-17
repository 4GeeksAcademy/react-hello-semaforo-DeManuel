import React from 'react'
import {createRoot} from 'react-dom/client'

//Bootstrap
//import "bootstrap/dist/css/bootstrap.min.css";
//import "bootstrap"



// components
import TrafficLight from './components/TrafficLight.jsx';
const root = createRoot(document.getElementById('root'))
root.render(<TrafficLight/>)
