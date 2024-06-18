import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home-page/Home';
import GetSignal from './Home-page/getSignal';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/signal' element={<Home />} />
          <Route path='/get' element={<GetSignal />} />
         </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
