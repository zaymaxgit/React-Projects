import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { resCookie } from "../../js/cookie";
import { useDispatch } from "react-redux";
import { userCookie } from "../../redux/action";

const LoginForm = (props) => {
  const [login, setLogin] = useState(() => {
    return {
      name: "",
      password: "",
      userName: "",
    };
  });
  const dispatch = useDispatch();
  const handleFormLogin = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/login", {
        name: login.name,
        password: login.password,
      })
      .then((data) => {
        console.log(data);
        document.cookie = `nameUserSite=${data.data.name[0]};path=/; max-age=3600`;
        var resultsCookie = document.cookie.match(
          "(^|;) ?" + "nameUserSite" + "=([^;]*)(;|$)"
        );
        if (resultsCookie) {
          var userCookieName = resultsCookie[2];
        }
        console.log(userCookieName);
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
        name: login.name,
        password: login.password,
      })
      .then((data) => {
        console.log(data);
        document.cookie = `nameUserSite=${data.data.name[0]};path=/; max-age=3600`;
        var resultsCookie = document.cookie.match(
          "(^|;) ?" + "nameUserSite" + "=([^;]*)(;|$)"
        );
        if (resultsCookie) {
          var userCookieName = resultsCookie[2];
        }
        console.log(userCookieName);
        dispatch(userCookie(userCookieName));
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const changeLogin = (e) => {
    e.persist();
    setLogin((prev) => {
      return { ...prev, [e.target.name]: [e.target.value] };
    });
  };
  const changePassword = (e) => {
    e.persist();
    setLogin((prev) => {
      return { ...prev, [e.target.name]: [e.target.value] };
    });
  };

  return (
    <section className="form-author">
      {props.formAction == "Login" ? (
        <>
          <form onSubmit={handleFormLogin}>
            <input
              value={login.name}
              onChange={changeLogin}
              type="text"
              placeholder="Name"
              name="name"
            />
            <input
              value={login.password}
              onChange={changePassword}
              type="password"
              placeholder="Password"
              name="password"
            />
            <button type="submit">Login</button>
          </form>
        </>
      ) : (
        <>
          <form onSubmit={handleFormRegistr}>
            <input
              value={login.name}
              onChange={changeLogin}
              type="text"
              placeholder="Name"
              name="name"
              id="name"
            />
            <input
              value={login.password}
              onChange={changePassword}
              type="password"
              placeholder="Password"
              name="password"
              id="password"
            />
            <button type="submit">Registration</button>
          </form>
        </>
      )}
    </section>
  );
};
export default LoginForm;
