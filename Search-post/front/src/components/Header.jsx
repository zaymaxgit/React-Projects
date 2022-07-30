import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchPost } from "../redux/action";

const Header = ({ data }) => {
  const [posts, setPosts] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (posts || posts.length === 0) {
      //Сравниваем введенный текст input с title поста
      var dataTitle = data
        .map((item) => {
          return item.title;
        })
        .filter((post) => {
          return post.toLowerCase().includes(posts.toLowerCase());
        });
      //Создаем массив для отправки его в store redux
      var arrayPost = [];
      //Находим похожие посты по title и введенному тексту input
      const dataResults = dataTitle.map((i) => {
        return data.filter((v) => v.title === i);
      });
      //Перебираем массив с совпадениями и пушим в массив arrayPost
      for (const y of dataResults) {
        arrayPost.push(y[0]);
      }
      //Если состояние posts не пустое, то отправляем массив в store redux
      if (posts) {
        dispatch(searchPost(arrayPost));
      }
      //Если состояние пустое, то отправляем пустой массив
      if (posts.length === 0) {
        dispatch(searchPost([]));
      }
      //Если совпадений в массиве dataResults, то вернем 0
      if (dataResults.length === 0 && posts.length !== 0) {
        dispatch(searchPost(0));
      }
    }
  }, [posts]);
  return (
    <header>
      <h1>Post Search</h1>
      <input
        type="text"
        placeholder="Search post..."
        value={posts}
        onChange={(e) => setPosts(e.target.value)}
        name="posts"
        className="inputSeacrh"
      />
    </header>
  );
};

export default Header;
