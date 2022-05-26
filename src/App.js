import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Home from './Pages/Home/Home';
import Blogs from './Pages/Blogs/Blogs';
import Navbar from "./Pages/Shared/Navbar";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Login/Register";


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/home" element={<Home></Home>} />
        <Route path="blogs" element={<Blogs></Blogs>} />
        <Route path="login" element={<Login></Login>} />
        <Route path="register" element={<Register></Register>} />
      </Routes>
    </div>
  );
}

export default App;
