import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <BrowserRouter>
      <div className='layout'>
        <Navbar />
        <div className='content'>
          <Sidebar />
          <Routes>
            {/* Define your routes here */}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
