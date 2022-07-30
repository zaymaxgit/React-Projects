import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

const Main = ({ data }) => {
  const select = useSelector((state) => {
    return state.searchReducer.data[0];
  });

  const [load, setLoad] = useState(true);
  useEffect(() => {
    //Проверяем пришли ли посты из базы данных, если еще нет то выводим Loading...
    if (data !== undefined) {
      setLoad(false);
    } else {
      setLoad(true);
    }
  }, [data]);

  return (
    <main>
      <section className="block-option"></section>
      <section className="block-posts">
        {load === false && select.length === 0 ? ( //Если store redux пустой и load = false,
          //то выводим посты полученные из базы данных с помощью GET
          data.map((item, index) => {
            return (
              <div key={index} className={"data post-get"}>
                <div className="posts-img">
                  <img src={item.img} alt="" />
                </div>
                <div className="posts-text">
                  <h2>{item.title}</h2>
                  <p>{item.desc}</p>
                  <p>{item.autor}</p>
                </div>
              </div>
            );
          })
        ) : select !== undefined && select.length > 0 ? ( //Если store redux не пустой, то выводим посты из store redux
          select.map((item, index) => {
            return (
              <div key={index} className={"select post-get"}>
                <div className="posts-img">
                  <img src={item.img} alt="" />
                </div>
                <div className="posts-text">
                  <h2>{item.title}</h2>
                  <p>{item.desc}</p>
                  <p>{item.autor}</p>
                </div>
              </div>
            );
          })
        ) : select == 0 ? (
          <h2>Null</h2>
        ) : (
          <h2>Loading...</h2>
        )}
      </section>
    </main>
  );
};

export default Main;
