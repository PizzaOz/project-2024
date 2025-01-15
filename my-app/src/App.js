import './App.css';
import Header from './component/Header/Header';
import Nav from './component/Nav/Nav';
import Profile from './component/Profile/Profile';
import Music from './component/Music/Music';
import Setings from './component/Setings/Setings';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import DialogContainer from './component/Dialog/DialogContainer';
import UserContainer from './component/User/UserContainer';


const App = (props) => {

  return (
    <Router>
      <div className="app-wrapper">
        <Header />
        <Nav />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/profile' element={<Profile />} />
            <Route path='/dialog/*' element={<DialogContainer />} />
            <Route path='/users' element={<UserContainer />} />
            <Route path='/music' element={<Music />} />
            <Route path='/setings' element={<Setings />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
