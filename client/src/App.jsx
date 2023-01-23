import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './pages/Login';
import Signup from './pages/Signup';
import Netflix from './pages/Netflix';
import Player from './pages/Player';
import MoviePage from './pages/Movies';
import TVShows from './pages/TVShows';
import UserLiked from './pages/UserLiked';


const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path='/login'  element={<Login/>}/>
      <Route exact path='/signup'  element={<Signup/>}/>
      <Route exact path='/player'  element={<Player/>}/>
      <Route exact path="/tv" element={<TVShows />} />
      <Route exact path="/movies" element={<MoviePage />} />
      <Route exact path="/mylist" element={<UserLiked />} />
      <Route exact path='/'  element={<Netflix/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App