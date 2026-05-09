import { useState } from 'react'
import './App.css'
import {BrowserRouter, NavLink, Route, Routes} from "react-router-dom";
import Login from "./components/login.jsx";
import Signup from "./components/signup.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <BrowserRouter>
          <nav className={"navbar"}>
            <NavLink to={"showup2move/"}>Home</NavLink>
            <NavLink to={"showup2move/login"}>Log in</NavLink>
            <NavLink to={"showup2move/signup"}>Sign up</NavLink>
          </nav>
            <Routes>
                <Route path={"showup2move/login"} element={<Login/>}/>
                <Route path={"showup2move/signup"} element={<Signup/>}/>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
