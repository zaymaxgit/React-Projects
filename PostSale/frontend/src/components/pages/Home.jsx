import Header from "../Header";
import Main from "../Main";
import { useDispatch } from "react-redux";
import { userCookie } from "../../redux/action";
import { useEffect } from "react";

const Home = (props) => {
  return (
    <>
      <Header />
      <Main />
    </>
  );
};

export default Home;
