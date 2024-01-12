import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';
import NewsFeed from './components/NewsFeed/NewsFeed';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

function App() {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <NavBar />
        
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/profile' Component={Profile} />
            <Route path='/newsFeed' Component={NewsFeed} />
            <Route path='/message/*' Component={Dialogs} />
            <Route path='/music' Component={Music} />
            <Route path='/settings' Component={Settings} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
