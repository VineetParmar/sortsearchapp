import { Route, Routes } from "react-router-dom"
import Home from "./component/Home/home";
import Shop from "./component/Shop/shop"
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="shop" element={<Shop/>}/>
    </Routes>
  );
}

export default App;
