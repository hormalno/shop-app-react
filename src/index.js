import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals'; 
// Import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/effect-fade/effect-fade.min.css"
import "swiper/components/navigation/navigation.min.css"
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/controller/controller.min.css"
import "swiper/components/effect-coverflow/effect-coverflow.min.css"
import "swiper/components/effect-cube/effect-cube.min.css"
import "swiper/components/effect-flip/effect-flip.min.css"
import "swiper/components/scrollbar/scrollbar.min.css"
import "swiper/components/thumbs/thumbs.min.css"
import "swiper/components/zoom/zoom.min.css"

import {BrowserRouter as Router} from 'react-router-dom';

ReactDOM.render(
  <Router>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
