import { useDispatch, useSelector } from "react-redux";
import { inputText } from "./redux/action";

const Title = () => {
  const dispatch = useDispatch();
  const select = useSelector((state) => {
    console.log(state);
    return state.textReducer.text;
  });
  const handleInputTitle = (e) => {
    dispatch(inputText(e.target.value));
  };
  return (
    <div>
      <input type="text" onChange={handleInputTitle} />
      <h3>Text - </h3>
      <p>{select}</p>
    </div>
  );
};
export default Title;
