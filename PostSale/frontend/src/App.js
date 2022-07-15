import Header from "./components/Header";
import Main from "./components/Main";
import "./css/style.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import PostAdd from "./components/pages/PostAdd";
import { useEffect } from "react";
import { ResCookie } from "./js/cookie";
import Post from "./components/pages/Post";
import Profile from "./components/pages/Profile";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post-add" element={<PostAdd />} />
        <Route path="/post/:name" element={<Post />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
