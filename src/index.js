import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
//import the browser router to render routing of pages
import { BrowserRouter } from 'react-router-dom';

//create a instance to call the root ID from html
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
    
    //Enclose the App import within the Browser
    <BrowserRouter>
        <App />
    </BrowserRouter>
);