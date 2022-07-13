import Header from "./components/Header";
import Main from "./components/Main";
import "./css/style.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import PostAdd from "./components/pages/PostAdd";
import { useEffect } from "react";
import { ResCookie } from "./js/cookie";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post-add" element={<PostAdd />} />
      </Routes>
    </div>
  );
}

export default App;
