import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Landing from './components/Landing Page/Landing';
import AboutPage from './components/About Page/AboutPage';
import Career from './components/Carrer/Career';
import JoinUS from './components/Join us Page/JoinUS';
import Contact from './components/Landing Page/Lnading sections/Contact';
import ViewCase from './components/Veiw Case/ViewCase';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/RemoStarts' element={<Landing />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/careers' element={<Career/>} />
        <Route path='/join' element={<JoinUS/>} />
        <Route path='/view' element={<ViewCase/>} />
      </Routes>
    </div>
  );
}

export default App;
