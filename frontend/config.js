let FRONTEND_ROOT = "";
const { origin, pathname } = window.location;

const parts = pathname.split("/");
parts.pop();
FRONTEND_ROOT = `${origin}${parts.join("/")}`;

export const BASE_URL = `${FRONTEND_ROOT}/../memoir`;
export const LOGIN_URL = `${FRONTEND_ROOT}/../user`;

//API URL
export const USER_API_URL = "http://localhost:8080";
export const MEMOIR_API_URL = "http://localhost:8080/memoir";
