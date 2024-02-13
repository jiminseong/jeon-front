import './App.css';
import Home from './comp/home/Home';
import Register from './comp/home/Register';
import GamePage from './comp/game/GamePage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';


function App() {
  return (
    <div className="App">
       <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<GamePage/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/game" element={<GamePage/>}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;