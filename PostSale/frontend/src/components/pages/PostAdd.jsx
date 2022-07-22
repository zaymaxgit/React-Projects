import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "../Header";

const PostAdd = (props) => {
  const [data, setData] = useState(() => {
    return {
      title: "",
      description: "",
      date: "",
      cost: "",
      user: "",
      city: "",
      categories: "",
    };
  });
  const navigate = useNavigate();
  const newDate = new Date().toLocaleDateString();

  const select = useSelector((state) => {
    return state.cookieReducer.name;
  });
  const uidCookie = () => {
    var resultsCookie = document.cookie.match(
      "(^|;) ?" + "idUser" + "=([^;]*)(;|$)"
    );
    return resultsCookie[2];
  };
  //console.log(uidCookie());
  const hadnleForm = (e) => {
    e.preventDefault();
    console.log(data);
    axios
      .post("http://localhost:3001/postAdd", {
        uid: uidCookie(),
        title: data.title,
        description: data.description,
        date: newDate,
        cost: data.cost,
        user: select,
        city: data.city,
        categories: data.categories,
      })
      .then((data) => {
        console.log(data);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const changeInput = (e) => {
    e.persist();
    setData((prev) => {
      return { ...prev, [e.target.name]: [e.target.value] };
    });
  };
  return (
    <section className="page-post-add">
      <Header />
      <main>
        <section className="form-add-post">
          <form onSubmit={hadnleForm}>
            <input
              value={data.title}
              onChange={changeInput}
              type="text"
              placeholder="Название"
              name="title"
            />
            <textarea
              value={data.description}
              onChange={changeInput}
              type="text"
              placeholder="Описание объявления"
              name="description"
            />
            <div>
              <input
                value={data.cost}
                onChange={changeInput}
                type="number"
                placeholder="Цена"
                name="cost"
              />
              <input
                value={data.city}
                onChange={changeInput}
                type="text"
                placeholder="Город"
                name="city"
              />

              <select
                name="categories"
                value={data.categories}
                onChange={changeInput}
              >
                <option value="">Категория</option>
                <option value="Квартира">Квартира</option>
                <option value="Автомобиль">Автомобиль</option>
                <option value="Одежда">Одежда</option>
                <option value="Электроника">Электроника</option>
              </select>
              <button type="submit">Отправить объявление</button>
            </div>
          </form>
        </section>
      </main>
    </section>
  );
};

export default PostAdd;
