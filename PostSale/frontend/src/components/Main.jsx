import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Main = (props) => {
  const [post, setPost] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/post")
      .then((data) => {
        setPost(data.data.post);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <main>
      <div className="title-section">
        <h2>Новые объявления</h2>
      </div>
      <section className="new-post">
        {post.map((item) => {
          return (
            <div key={item.id} className="item-post">
              <NavLink
                to={{
                  pathname: `/post/${item.title}`,
                }}
                state={{ data: item }}
              >
                <div className="img-block">
                  <img src={item.img} alt="" />
                </div>
                <div className="text-block">
                  <h2>
                    {item.title}
                    <span>{item.categories}</span>
                  </h2>
                  <p>{item.cost} Руб.</p>
                  <p>{item.user}</p>
                </div>
                <p className="city">{item.city}</p>
              </NavLink>
            </div>
          );
        })}
      </section>
    </main>
  );
};

export default Main;
