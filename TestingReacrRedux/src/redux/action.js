import { type } from "@testing-library/user-event/dist/type";

export function incLikesFunc() {
  return {
    type: "INCREMENT",
  };
}
export function decLikesFunc() {
  return {
    type: "DECINCREMENT",
  };
}
export function inputText(text) {
  return {
    type: "INPUTTEXT",
    text,
  };
}
export function commentText(text, id) {
  return {
    type: "TEXTCOMMENT",
    data: { text, id },
  };
}
