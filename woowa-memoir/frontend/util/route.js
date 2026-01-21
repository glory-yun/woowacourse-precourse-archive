import { BASE_URL, LOGIN_URL, } from "../config.js";
;

function redirectTo(url, path) {
  window.location.href = `${url}/${path}.html`;
}

function redirecToWithParam(id, path) {
  const url = new URL(`${BASE_URL}/${path}.html`);
  url.searchParams.append("id", id);

  window.location.assign(url.toString());
}

//일반 redirect
export function redirectToMemoirList() {
  redirectTo(BASE_URL, "memoirList");
}

export function redirectToLogin() {
  redirectTo(LOGIN_URL, "login");
}

export function redirectToMemoirDetailAfterSave() {
  redirectTo(BASE_URL, "memoirList");
}

//params를 사용한 redirect
export function redirectToMemoirDetail(id) {
  redirecToWithParam(id, "memoirDetail");
}

export function redirectToMemoirModify(id) {
  redirecToWithParam(id, "memoirModify");
}