import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header';
import { Band } from './pages/Band';
import { FAQ } from './pages/FAQ';
import { Home } from './pages/Home';
import { Members } from './pages/Members';
import { Memory } from './pages/Memory';
import { Studuy } from './pages/Study';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/members' element={<Members />} />
        <Route path='/band' element={<Band />} />
        <Route path='/memory' element={<Memory />} />
        <Route path='/study' element={<Studuy />} />
        <Route path='/faq' element={<FAQ />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
