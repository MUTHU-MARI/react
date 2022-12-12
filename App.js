import { Route,Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
 //import {Mypage1,Mypage2} from './pages/mxpo';
function App()
{
  return(
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
      </Routes>
    </div>
  );
}
export default App;