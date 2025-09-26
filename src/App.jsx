import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Multivitaminicos from './pages/Multivitaminicos';
import Systematic from './pages/Pain_system';
import Oralh from './pages/oral_health';
import Topic from './pages/pain_topic';
import FijadorDen from './pages/Fijador_dental';
import Antitusives from './pages/Antitusives';
import Antigripals from './pages/Antigripals';
import Antiacidos from './pages/Anti_acids';
import Footer from './components/Footer';
import Vitamin from './pages/Vitamin-c';
function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/multivitaminicos" element={<Multivitaminicos />} />
        <Route path="/oral_health" element={<Oralh/>}></Route>
        <Route path="/systematic" element={<Systematic/>}></Route>
        <Route path="/topic" element={<Topic/>} ></Route>
        <Route path='/fijador_den' element={<FijadorDen/>}></Route>
        <Route path='/antitusives' element={<Antitusives/>}></Route>
        <Route path='/antigripals' element={<Antigripals/>}></Route>
        <Route path='/antiacidos' element={<Antiacidos/>}></Route>
        <Route path='/vitamin-c' element={<Vitamin/>}></Route>
        {/* Add more routes as needed */}
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
