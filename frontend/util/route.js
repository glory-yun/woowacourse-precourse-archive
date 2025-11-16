import { BASE_URL, LOGIN_URL, } from "../config.js";
;

function redirectTo(url, path) {
  window.location.href = `${url}/${path}`;
}

export function redirectToMemoirList() {
  redirectTo(BASE_URL, "memoirList.html");
}

export function redirectToLogin() {
  redirectTo(LOGIN_URL, "login.html");
}