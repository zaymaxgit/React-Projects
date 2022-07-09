import { useState } from "react";
import axios from "axios";

const LoginForm = (props) => {
  const [login, setLogin] = useState(() => {
    return {
      name: "",
      password: "",
    };
  });
  const handleFormLogin = (e) => {
    e.preventDefault();
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
            />
            <input
              value={login.password}
              onChange={changePassword}
              type="password"
              placeholder="Password"
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
