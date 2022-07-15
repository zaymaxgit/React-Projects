import { resCookie } from "../../js/cookie";
import { useDispatch } from "react-redux";
import { userCookie } from "../../redux/action";
import { Link, useNavigate } from "react-router-dom";

const UserFunction = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const UserLogout = () => {
    document.cookie = "nameUserSite=;max-age=-1";
    dispatch(userCookie(""));

    navigate("/");
  };
  return (
    <section className="user-funct">
      <button>
        <Link to="/profile">Профиль</Link>
      </button>
      <button onClick={UserLogout}>Выйти</button>
    </section>
  );
};

export default UserFunction;
