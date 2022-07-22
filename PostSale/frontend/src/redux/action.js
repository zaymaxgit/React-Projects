export function userCookie(name) {
  return {
    type: "USERCOOKIE",
    name,
  };
}
export function searchPost(data) {
  return {
    type: "SEACRHPOST",
    data,
  };
}
