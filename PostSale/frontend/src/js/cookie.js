export function resCookie() {
  var resultsCookie = document.cookie.match(
    "(^|;) ?" + "nameUserSite" + "=([^;]*)(;|$)"
  );
  if (resultsCookie) {
    var userCookie = resultsCookie[2];
  }

  return userCookie;
}
/*window.onload = function () {
  resCookie();
  console.log(resCookie());
};*/
