import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

export type PostDataPropsType = {
    id:number
    message:string
    likeAmount:number
}
 export type DialogsDataPropsType = {
    id:number
    name:string
}
export type MessageDataPropsType = {
    id:number
    message:string
}
const posts: Array<PostDataPropsType> = [
    {id:1,message: "Hi,how are you?", likeAmount:15},
    {id:2,message: "It's my first post!", likeAmount:20},
]
const dialogs:Array<DialogsDataPropsType> =[
    {id: 1, name: 'Kate'},
    {id: 2, name: 'Philip'},
    {id: 3, name: 'Mama'},
    {id: 4, name: 'Tanya'},
    {id: 5, name: 'Anna'},
]
const messages:Array<MessageDataPropsType> =[
    {id: 1, message: 'Hello'},
    {id: 2, message: 'Hooray'},
    {id: 3, message: 'studying?'},
    {id: 4, message: 'I learn JS!'},
    {id: 5, message: 'How are you?'},
]
ReactDOM.render(
  <React.StrictMode>
    <App posts ={posts} dialogs={dialogs} messages = {messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
