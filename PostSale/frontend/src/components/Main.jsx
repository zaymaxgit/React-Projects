import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

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
              <div className="img-block">
                <img src={item.img} alt="" />
              </div>
              <div className="text-block">
                <p>{item.date}</p>
                <h2>{item.title}</h2>

                <p>{item.user}</p>
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
};

export default Main;
