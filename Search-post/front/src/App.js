import Header from "./components/Header";
import Main from "./components/Main";
import axios from "axios";
import { useEffect, useState } from "react";
import "./css/style.css";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3002/post-get")
      .then((data) => {
        setData(data.data.result);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <section className="App">
      <Header data={data} />
      <Main data={data} />
    </section>
  );
}

export default App;
