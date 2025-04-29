import Register from "./Pages/Auth/Register/Register";
import Login from "./Pages/Auth/Login/Login";
import Home from "./Pages/Home/Home";
import CarbonCalculator from "./Pages/CarbonCalculator/CarbonCalculator";
import ReduceCarbon from "./Pages/ReduceCarbon/ReduceCarbon";
import ForgotPassword from "./Pages/Auth/ForgotPassword/ForgotPassword";
import UserProfile from "./Pages/UserDashboard/UserDashboard";

import { Route, Routes } from "react-router-dom";

export default function Pages(){
    return(
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/auth/login" element={<Login/>}/>
            <Route path="auth/forgotpassword" element={<ForgotPassword/>}/>
            <Route path="auth/register" element={<Register/>} />
            <Route path="/reducecarbon" element={<ReduceCarbon/>}/>
            <Route path="/userdashboard" element={<UserProfile/>}/>
            <Route path="/calculator" element={<CarbonCalculator/>}/>

        </Routes>
    )
}