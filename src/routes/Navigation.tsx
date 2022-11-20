import {BrowserRouter, Navigate, Routes } from "react-router-dom";
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
    NavLink
  } from "react-router-dom";
import logo from '../logo.svg';
export const Navigation=()=>{
    return(
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={logo} alt="" />
                    <ul>
                        <li>
                            <NavLink to="home" className={({isActive})=>isActive?'nav-active':''}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="About" className={({isActive})=>isActive?'nav-active':''}>About</NavLink>
                        </li>
                        <li>
                            <NavLink to="Users" className={({isActive})=>isActive?'nav-active':''}>Users</NavLink>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="about" element={<h1>About Pag</h1>}/>
                    <Route path="users" element={<h1>users Pag</h1>}/>
                    <Route path="home" element={<h1>home Pag</h1>}/>
                    <Route path="/*" element={< Navigate to="/home"/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    )
}