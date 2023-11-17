import './App.css';
import Home from './components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pay from './components/Pay/Pay';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Routes >
        <Route path='/projectTravel' element={<Home />} />
        <Route path='/pay' element={<Pay />} />
      </Routes>
    </div>
  );
}

export default App;
