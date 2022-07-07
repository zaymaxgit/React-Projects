import { useEffect, useState } from "react";

const CommentList = (props) => {
  const [text, setText] = useState("");

  useEffect(() => {
    if (props.data.text) {
      setText(props.data.text);
    }
  }, [props.data.text]);
  return (
    <div>
      <p>{props.data.text}</p>
    </div>
  );
};

export default CommentList;
