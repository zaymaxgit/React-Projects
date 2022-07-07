import { connect } from "react-redux";
import { decLikesFunc, incLikesFunc } from "./redux/action";

const Likes = (props) => {
  return (
    <div>
      <button onClick={props.incLikes}>{props.likes} Like</button>
      <button onClick={props.decLikes}>Delete</button>
    </div>
  );
};

function mapStateToProps(state) {
  console.log("mapStateToProps/state -> ", state);
  return {
    likes: state.likeReducer.likes,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    incLikes: () => {
      return dispatch(incLikesFunc());
    },
    decLikes: () => {
      return dispatch(decLikesFunc());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Likes);
