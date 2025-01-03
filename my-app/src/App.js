import './App.css';
import Header from './component/Header/Header';
import Nav from './component/Nav/Nav';
import Profile from './component/Profile/Profile';
import Dialog from './component/Dialog/Dialog';
import Music from './component/Music/Music';
import News from './component/News/News';
import Setings from './component/Setings/Setings';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


const App = () => {
  return (
    <Router>
    <div className="app-wrapper">
      <Header/>
      <Nav/>
      <div className='app-wrapper-content'>
      <Routes>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/dialog' element={<Dialog/>}/>
        <Route path='/news' element={<News/>}/>
        <Route path='/music' element={<Music/>}/>
        <Route path='/setings' element={<Setings/>}/>
      </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;
