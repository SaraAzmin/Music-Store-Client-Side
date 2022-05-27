import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Home from './Pages/Home/Home';
import Blogs from './Pages/Blogs/Blogs';
import Navbar from "./Pages/Shared/Navbar";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Login/Register";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RequireAuth from "./Pages/Login/RequireAuth";
import Purchase from "./Pages/Home/Purchase";
import AllInstruments from "./Pages/Home/AllInstruments";
import Dashboard from "./Pages/DashBoard/Dashboard";
import MyOrders from "./Pages/DashBoard/MyOrders";


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
        <Route path="/instruments/:id" element={<RequireAuth><Purchase></Purchase></RequireAuth>} />
        <Route path="/allInstruments" element={<AllInstruments></AllInstruments>} />
        <Route path="dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} >
          <Route index element={<MyOrders></MyOrders>}></Route>

        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
