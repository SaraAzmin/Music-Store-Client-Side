import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Home from './Pages/Home/Home';
import Blogs from './Pages/Blogs/Blogs';
import Navbar from "./Pages/Shared/Navbar";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/home" element={<Home></Home>} />
        <Route path="blogs" element={<Blogs></Blogs>} />
      </Routes>
    </div>
  );
}

export default App;
