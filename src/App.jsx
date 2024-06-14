import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import { useState } from "react";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import "./App.css";
import Layout from "./components/Layout";
import Profile from "./pages/Profile";

function App() {
  const [users, setUsers] = useState(null);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Layout users={users} setUsers={setUsers} />}
          >
            <Route
              index
              element={<Home users={users} />}
            />
            <Route
              path="/detail/:id"
              element={<Detail/>}
            />
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="/login" element={<Login setUsers={setUsers} />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
