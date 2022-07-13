import axios from "axios";
import { useState } from "react";
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
    };
  });
  const newDate = new Date().toLocaleDateString();

  const select = useSelector((state) => {
    return state.cookieReducer.name;
  });
  const hadnleForm = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/postAdd", {
        uid: 11,
        title: data.title,
        description: data.description,
        date: newDate,
        cost: data.cost,
        user: select,
        city: data.city,
      })
      .then((data) => {
        console.log(data);
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
        <form onSubmit={hadnleForm}>
          <input
            value={data.title}
            onChange={changeInput}
            type="text"
            placeholder="Title"
            name="title"
          />
          <input
            value={data.description}
            onChange={changeInput}
            type="text"
            placeholder="Description"
            name="description"
          />
          <input
            value={data.cost}
            onChange={changeInput}
            type="number"
            placeholder="Cost"
            name="cost"
          />
          <input
            value={data.city}
            onChange={changeInput}
            type="text"
            placeholder="City"
            name="city"
          />
          <button type="submit">Add</button>
        </form>
      </main>
    </section>
  );
};

export default PostAdd;
