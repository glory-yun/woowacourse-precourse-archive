import { BASE_URL, LOGIN_URL, } from "../config.js";
;

function redirectTo(url, path) {
  window.location.href = `${url}/${path}`;
}

function redirecToWithParam(id, path) {
  const url = new URL(`${BASE_URL}/${path}`);
  url.searchParams.append("id", id);
  window.location.href = url;
}

//일반 redirect
export function redirectToMemoirList() {
  redirectTo(BASE_URL, "memoirList.html");
}

export function redirectToLogin() {
  redirectTo(LOGIN_URL, "login.html");
}


//params를 사용한 redirect
export function redirectToMemoirDetail(id) {
  redirecToWithParam(id, "memoirDetail.html");
}