import { resCookie } from "../../js/cookie";
import { useDispatch } from "react-redux";
import { userCookie } from "../../redux/action";

const UserFunction = (props) => {
  const dispatch = useDispatch();
  const userLogout = () => {
    document.cookie = "nameUserSite=;max-age=-1";
    dispatch(userCookie(""));
  };
  return (
    <section className="user-funct">
      <button>Profile</button>
      <button onClick={userLogout}>Exit</button>
    </section>
  );
};

export default UserFunction;
