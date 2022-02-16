import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter , Route, Routes} from 'react-router-dom';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {DialogsDataPropsType , MessageDataPropsType , PostDataPropsType} from "./index";

type AppPropsType = {
    posts: Array<PostDataPropsType>
    dialogs:Array<DialogsDataPropsType>
    messages: Array<MessageDataPropsType>
}

const App = (props:AppPropsType) => {
    return (
      <BrowserRouter>
          <div className="app-wrapper">
              <Header/>
              <Navbar/>
              <div className='app-wrapper-content'>
                 <Routes>
                     <Route path='/' element={<Profile posts = {props.posts}
                     />}
                     />
                     <Route path='/profile' element= {<Profile posts = {props.posts}/>} />
                     <Route path='/dialogs' element= {<Dialogs  dialogs = {props.dialogs}
                                                                messages = {props.messages}
                     />
                     }>
                         <Route path=':id' element={<Dialogs
                             dialogs = {props.dialogs}
                             messages = {props.messages}
                         />}
                         />
                     </Route>
                     <Route path='/news' element= {<News/>}/>
                     <Route path='/music' element= {<Music/>}/>
                     <Route path='/settings' element= {<Settings/>}/>
                 </Routes>
                  {/*<Profile/>*/}
                  {/*<Dialogs />*/}
              </div>
          </div>
      </BrowserRouter>
  )
}


export default App;
