import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reactLogo from "./assets/react.svg";

import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Tasks from "./components/Tasks/Tasks";
import Completed from "./components/Completed/Completed";
import Pending from "./components/Pending/Pending";
import Profile from "./components/Profile/Profile";
import Signup from "./components/Auth/SignUp/Signup";
import logo from "./assets/logo.png";
function App() {
  return (
    <>
          <Routes>
            <Route index element={<Signup />} />
          </Routes>
    </>
  );
}

export default App;
