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
import { Link, useNavigate } from "react-router-dom";
import { SelectCookie } from "../js/cookie";
import { searchReducer } from "../redux/searchReducer";
import { searchPost } from "../redux/action";

const Header = (props) => {
  SelectCookie();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formAction, setFormAction] = useState("");
  const [search, setSearch] = useState(() => {
    return {
      name: "",
      city: "",
    };
  });
  function formState(e) {
    formAction == e ? setFormAction("") : setFormAction(e);
  }

  const select = useSelector((state) => {
    return state.cookieReducer.name;
  });
  const handleFormSearch = (e) => {
    e.preventDefault();
    dispatch(searchPost(search));
    navigate("/search-post");
  };
  console.log(search);
  const changeSearch = (e) => {
    e.persist();
    setSearch((prev) => {
      return { ...prev, [e.target.name]: [e.target.value] };
    });
  };

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
              <form onSubmit={handleFormSearch}>
                <input
                  type="text"
                  placeholder="Поиск товара..."
                  value={search.name}
                  onChange={changeSearch}
                  name="name"
                />
                <input
                  type="text"
                  placeholder="Ваш город"
                  value={search.city}
                  onChange={changeSearch}
                  name="city"
                />
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
              <form onSubmit={handleFormSearch}>
                <input
                  type="text"
                  placeholder="Поиск товара..."
                  value={search.name}
                  onChange={changeSearch}
                  name="name"
                />
                <input
                  type="text"
                  placeholder="Ваш город"
                  value={search.city}
                  onChange={changeSearch}
                  name="city"
                />
                <input type="submit" value="" hidden />
              </form>
            </div>
            <div className="user">
              <button className="post-add">
                <Link to="post-add">
                  Добавить объявление
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
