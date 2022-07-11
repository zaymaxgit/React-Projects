import { useEffect } from "react";
import { useState } from "react";
import {
  AiOutlineMenu,
  AiFillCaretDown,
  AiFillPlusSquare,
} from "react-icons/ai";
import LoginForm from "./modal_window/LoginFrom";
import { useSelector } from "react-redux";
import { resCookie } from "../js/cookie";
import UserFunction from "./modal_window/UserFunction";
import Categories from "./modal_window/Categories";

const Header = (props) => {
  const [formAction, setFormAction] = useState("");

  const formLogin = () => {
    formAction == "Login" ? setFormAction("") : setFormAction("Login");
  };
  const formRegistr = () => {
    formAction == "Registr" ? setFormAction("") : setFormAction("Registr");
  };
  const formUser = () => {
    formAction == "User" ? setFormAction("") : setFormAction("User");
  };
  const formCategories = () => {
    formAction == "Categories"
      ? setFormAction("")
      : setFormAction("Categories");
  };
  const select = useSelector((state) => {
    console.log(state);
    return state.cookieReducer.name;
  });
  var x = resCookie();
  console.log(x);
  console.log(formAction);
  return (
    <>
      {!select && !resCookie() ? (
        <>
          <header>
            <div className="logo">Pale</div>
            <div className="input-search">
              <button onClick={formCategories}>
                <AiOutlineMenu />
                Category
              </button>
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
            {formAction == "Categories" ? (
              <Categories />
            ) : formAction == "Login" ? (
              <LoginForm formAction={formAction} />
            ) : formAction == "Registr" ? (
              <LoginForm formAction={formAction} />
            ) : (
              ""
            )}
          </header>
        </>
      ) : (
        <>
          <header>
            <div className="logo">Pale</div>
            <div className="input-search">
              <button onClick={formCategories}>
                <AiOutlineMenu />
                Category
              </button>
              <form action="/" method="post">
                <input type="text" placeholder="Search..." />
                <input type="text" placeholder="Your city" />
                <input type="submit" value="" hidden />
              </form>
            </div>
            <div className="user">
              <button className="post-add">
                Post
                <AiFillPlusSquare />
              </button>
              <button className="user-profile" onClick={formUser}>
                {x}
                <AiFillCaretDown />
              </button>
            </div>
            {formAction == "Categories" ? <Categories /> : ""}
            {formAction == "User" ? <UserFunction /> : ""}
          </header>
        </>
      )}
    </>
  );
};

export default Header;
