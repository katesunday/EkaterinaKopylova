import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import state , {addPost , StatePropsType , updateNewPostChange} from "./redux/state";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";

 let renderEntireTree = (state:StatePropsType) => {
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <App state={state} addPost={addPost} updateNewPostChange={updateNewPostChange}/>
            </React.StrictMode>
        </BrowserRouter> ,
        document.getElementById('root')
    );
}
renderEntireTree(state);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
