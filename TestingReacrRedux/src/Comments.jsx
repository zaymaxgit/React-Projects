import CommentList from "./CommentList";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { commentReducer } from "./redux/commentReducer";
import { commentText } from "./redux/action";

const Comments = (props) => {
  const [text, setText] = useState("");
  const handleForm = (e) => {
    setText(e.target.value);
  };
  const dispatch = useDispatch();
  const select = useSelector((state) => {
    return state.commentReducer.comments;
  });
  const id = Math.random();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(commentText(text, id));
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" value={text} onChange={handleForm} />
        <input type="submit" value="" hidden />
      </form>
      {!!select.length &&
        select.map((res) => {
          return <CommentList key={res.id} data={res} />;
        })}
    </div>
  );
};

export default Comments;
