import { useEffect } from "react";
import { useState } from "react";
import LoginForm from "./modal_window/LoginFrom";

const Header = (props) => {
  const [formAction, setFormAction] = useState("");
  const formLogin = () => {
    formAction == "Login" ? setFormAction("") : setFormAction("Login");
  };
  const formRegistr = () => {
    formAction == "Registr" ? setFormAction("") : setFormAction("Registr");
  };
  return (
    <>
      <header>
        <div className="logo">Pale</div>
        <div className="input-search">
          <button>Category</button>
          <form action="/" method="post">
            <input type="text" placeholder="Search..." />
            <input type="text" placeholder="Your city" />
            <input type="submit" value="" hidden />
          </form>
        </div>
        <div className="user">
          <button onClick={formLogin}>Login</button>
          <button onClick={formRegistr}>Registr</button>
        </div>
      </header>
      {formAction != "" ? <LoginForm formAction={formAction} /> : ""}
    </>
  );
};

export default Header;
