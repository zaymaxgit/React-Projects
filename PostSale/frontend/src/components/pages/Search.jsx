import React from "react";
import Header from "../Header";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Search = (props) => {
  const [post, setPost] = useState([]);
  const [loader, setLoader] = useState(true);
  const selector = useSelector((state) => {
    return state.searchReducer.data[0];
  });
  console.log("Select", selector);
  useEffect(() => {
    axios
      .post("http://localhost:3001/search-post", {
        data: selector,
      })
      .then((data) => {
        setLoader(false);
        if (data) {
          setPost(data.data.msg);
        }
      })
      .catch((error) => {
        console.log(error);
        setLoader(false);
      });
  }, [selector]);
  console.log(post);
  return (
    <>
      <Header />
      <main>
        <section className="new-post">
          {loader ? (
            <h1>Loader</h1>
          ) : post && post.length ? (
            post.map((item) => {
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
            })
          ) : (
            ""
          )}
        </section>
      </main>
    </>
  );
};

export default Search;
