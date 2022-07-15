import axios from "axios";
import { useSelector } from "react-redux";
import Header from "../Header";

const Profile = () => {
  var resultsCookie = document.cookie.match(
    "(^|;) ?" + "idUser" + "=([^;]*)(;|$)"
  );
  console.log(resultsCookie[2]);
  axios
    .post("http://localhost:3001/profile", {
      id: resultsCookie[2],
    })
    .then((data) => {
      console.log("Data - ", data);
    })
    .catch((error) => {
      console.log(error);
    });
  return (
    <section className="profile-page">
      <Header />
      <main></main>
    </section>
  );
};

export default Profile;
