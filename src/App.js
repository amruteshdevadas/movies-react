//imports
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import MovieCard from './components/MovieCard';
import AddMovie from './components/AddMovie';
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<MovieCard/>}/>
        <Route path="/addMovie" element={<AddMovie/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
