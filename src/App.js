import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Component/Home';
import GetSignal from './Component/getSignal';
import CareerWork from './Component/careerWork';
import Developers from './Component/Developers';
import Blog from './Component/blogContent';

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
         </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
