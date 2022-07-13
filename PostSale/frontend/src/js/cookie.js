import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { userCookie } from "../redux/action";

export function SelectCookie() {
  var resultsCookie = document.cookie.match(
    "(^|;) ?" + "nameUserSite" + "=([^;]*)(;|$)"
  );
  if (resultsCookie) {
    var userCookieData = resultsCookie[2];
  }
  const dispatch = useDispatch();

  dispatch(userCookie(userCookieData));
}
