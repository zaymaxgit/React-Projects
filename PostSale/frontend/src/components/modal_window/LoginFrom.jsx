import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { userCookie } from "../../redux/action";

const LoginForm = (props) => {
  const [login, setLogin] = useState(() => {
    return {
      firstname: "",
      lastname: "",
      login: "",
      password: "",
      userName: "",
    };
  });
  const dispatch = useDispatch();
  const handleFormLogin = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/login", {
        login: login.login,
        password: login.password,
      })
      .then((data) => {
        document.cookie = `nameUserSite=${data.data.msg[0].firstname} ${data.data.msg[0].lastname};path=/; max-age=3600`;
        var resultsCookie = document.cookie.match(
          "(^|;) ?" + "nameUserSite" + "=([^;]*)(;|$)"
        );
        if (resultsCookie) {
          var userCookieName = resultsCookie[2];
        }
        dispatch(userCookie(userCookieName));
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleFormRegistr = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/registration", {
        login: login.login,
        password: login.password,
        firstname: login.firstname,
        lastname: login.lastname,
      })
      .then((data) => {
        document.cookie = `nameUserSite=${data.data.firstname} ${data.data.lastname};path=/; max-age=3600`;
        var resultsCookie = document.cookie.match(
          "(^|;) ?" + "nameUserSite" + "=([^;]*)(;|$)"
        );
        if (resultsCookie) {
          var userCookieName = resultsCookie[2];
        }
        dispatch(userCookie(userCookieName));
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const changeUser = (e) => {
    e.persist();
    setLogin((prev) => {
      return { ...prev, [e.target.name]: [e.target.value] };
    });
  };

  return (
    <section className="form-author">
      {props.formAction == "Login" ? (
        <>
          <h1>
            Pale<span>объявления</span>
          </h1>
          <form onSubmit={handleFormLogin}>
            <input
              value={login.login}
              onChange={changeUser}
              type="text"
              placeholder="Логин"
              name="login"
            />
            <input
              value={login.password}
              onChange={changeUser}
              type="password"
              placeholder="Пароль"
              name="password"
            />
            <button type="submit">Войти</button>
          </form>
        </>
      ) : (
        <>
          <h1>
            Pale<span>объявления</span>
          </h1>
          <form onSubmit={handleFormRegistr}>
            <input
              value={login.firtsname}
              onChange={changeUser}
              type="text"
              placeholder="Имя"
              name="firstname"
            />
            <input
              value={login.lastname}
              onChange={changeUser}
              type="text"
              placeholder="Фамилия"
              name="lastname"
            />
            <input
              value={login.login}
              onChange={changeUser}
              type="text"
              placeholder="Логин"
              name="login"
            />
            <input
              value={login.password}
              onChange={changeUser}
              type="password"
              placeholder="Пароль"
              name="password"
            />
            <button type="submit">Зарегестрироваться</button>
          </form>
        </>
      )}
    </section>
  );
};
export default LoginForm;
