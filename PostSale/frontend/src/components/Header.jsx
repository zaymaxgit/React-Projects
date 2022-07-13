import { useEffect } from "react";
import { useState } from "react";
import {
  AiOutlineMenu,
  AiFillCaretDown,
  AiFillPlusSquare,
} from "react-icons/ai";
import LoginForm from "./modal_window/LoginFrom";
import { useSelector, useDispatch } from "react-redux";
import UserFunction from "./modal_window/UserFunction";
import Categories from "./modal_window/Categories";
import { Link } from "react-router-dom";
import { SelectCookie } from "../js/cookie";

const Header = (props) => {
  SelectCookie();

  const [formAction, setFormAction] = useState("");

  function formState(e) {
    formAction == e ? setFormAction("") : setFormAction(e);
  }

  const select = useSelector((state) => {
    return state.cookieReducer.name;
  });

  return (
    <>
      {!select ? (
        <>
          <header>
            <div className="logo">
              <Link to="/">Pale</Link>
            </div>
            <div className="input-search">
              <button onClick={(e) => formState("Categories")}>
                <AiOutlineMenu />
                Категории
              </button>
              <form action="/" method="post">
                <input type="text" placeholder="Поиск товара..." />
                <input type="text" placeholder="Ваш город" />
                <input type="submit" value="" hidden />
              </form>
            </div>
            <div className="user">
              <button onClick={(e) => formState("Login")}>Войти</button>
              <button onClick={(e) => formState("Registr")}>
                Зарегестрироваться
              </button>
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
            <div className="logo">
              <Link to="/">Pale</Link>
            </div>
            <div className="input-search">
              <button onClick={(e) => formState("Categories")}>
                <AiOutlineMenu />
                Категории
              </button>
              <form action="/" method="post">
                <input type="text" placeholder="Поиск товара..." />
                <input type="text" placeholder="Ваш город" />
                <input type="submit" value="" hidden />
              </form>
            </div>
            <div className="user">
              <button className="post-add">
                <Link to="post-add">
                  Post
                  <AiFillPlusSquare />
                </Link>
              </button>
              <button
                className="user-profile"
                onClick={(e) => formState("User")}
              >
                {select}
                <AiFillCaretDown />
              </button>
            </div>
            {formAction == "Categories" ? (
              <Categories />
            ) : formAction == "User" ? (
              <UserFunction />
            ) : (
              ""
            )}
          </header>
        </>
      )}
    </>
  );
};

export default Header;
