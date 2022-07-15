import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import Header from "../Header";

const Post = (props) => {
  let state = useLocation();
  const item = state.state.data;
  console.log("state ", item);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section>
      <Header />
      <main>
        <section className="post-page">
          <div className="post-info">
            <h2>{item.title}</h2>
            <div className="post-img">
              <img src={item.img} alt="" />
            </div>
            <p>{item.description}</p>
            <p>Город - {item.city}</p>
          </div>
          <div className="post-buy">
            <h4>{item.cost}</h4>
            <button>Купить</button>
            <p>Продавец - {item.user}</p>
            <p>Дата объявления - {item.date}</p>
          </div>
        </section>
      </main>
    </section>
  );
};
export default Post;
