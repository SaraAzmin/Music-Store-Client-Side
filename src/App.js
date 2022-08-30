import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from './Pages/Home/Home';
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
import AllUsers from "./Pages/DashBoard/AllUsers";
import RequireAdmin from "./Pages/Login/RequireAdmin";
import AddReview from "./Pages/DashBoard/AddReview";
import NotFound from "./Pages/NotFound/NotFound";
import Payment from "./Pages/DashBoard/Payment";
import StartPage from "./Pages/DashBoard/StartPage";
import AddProduct from "./Pages/DashBoard/AddProduct";
import ManageAllOrders from "./Pages/DashBoard/ManageAllOrders";
import ManageProduct from "./Pages/DashBoard/ManageProduct";
import MyProfile from "./Pages/DashBoard/MyProfile";


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/home" element={<Home></Home>} />
        <Route path="login" element={<Login></Login>} />
        <Route path="register" element={<Register></Register>} />
        <Route path="/instruments/:id" element={<RequireAuth><Purchase></Purchase></RequireAuth>} />
        <Route path="/allInstruments" element={<AllInstruments></AllInstruments>} />
        <Route path="dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} >
          <Route index element={<StartPage></StartPage>}></Route>
          <Route path="/dashboard/myOrders" element={<MyOrders></MyOrders>}></Route>
          <Route path="/dashboard/addReview" element={<AddReview></AddReview>}></Route>
          <Route path="/dashboard/myProfile" element={<MyProfile></MyProfile>}></Route>
          <Route path="/dashboard/myOrders/payment/:id" element={<Payment></Payment>}></Route>
          <Route path="/dashboard/makeAdmin" element={<RequireAdmin><AllUsers></AllUsers></RequireAdmin>}></Route>
          <Route path="/dashboard/addProduct" element={<RequireAdmin><AddProduct></AddProduct></RequireAdmin>}></Route>
          <Route path="/dashboard/manageOrders" element={<RequireAdmin><ManageAllOrders></ManageAllOrders></RequireAdmin>}></Route>
          <Route path="/dashboard/manageProduct" element={<RequireAdmin><ManageProduct></ManageProduct></RequireAdmin>}></Route>
        </Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
