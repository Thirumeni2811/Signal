import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Component/Home';
import GetSignal from './Component/getSignal';
import CareerWork from './Component/careerWork';
import Developers from './Component/Developers';
import Blog from './Component/blogContent';
import Help from './Component/helpSupport';
import Donate from './Component/donateSignal';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/get' element={<GetSignal />} />
          <Route path='/career' element={<CareerWork />} />
          <Route path='/developer' element={<Developers />} />
          <Route path='/blog' element={<Blog />} /> 
          <Route path='help' element={<Help />} /> 
          <Route path='donate' element={<Donate />}/>       
         </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
