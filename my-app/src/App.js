import './App.css';
import Nav from './component/Nav/Nav';
import Music from './component/Music/Music';
import Setings from './component/Setings/Setings';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import DialogContainer from './component/Dialog/DialogContainer';
import UserContainer from './component/Users/UsersContainer';
import ProfileContainer from './component/Profile/ProfileContainer';
import HeaderContainer from './component/Header/HeaderContainer';
import Login from './component/Login/Login';
import { Component } from 'react';
import { connect } from 'react-redux';
import { initializeApp } from './state/app-reducer';
import Preloader from './component/common/Preloader/Preloader';


class App extends Component {
  componentDidMount() {
    this.props.initializeApp()
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader/>
    }

  return (
    <Router>
      <div className="app-wrapper">
        <HeaderContainer />
        <Nav />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/profile/:userId?' element={<ProfileContainer />} />
            <Route path='/dialog/*' element={<DialogContainer />} />
            <Route path='/users' element={<UserContainer />} />
            <Route path='/music' element={<Music />} />
            <Route path='/setings' element={<Setings />} />
            <Route path='/login' element={<Login />}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default connect(mapStateToProps,{initializeApp})(App)
