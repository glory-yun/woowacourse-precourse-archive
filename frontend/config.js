const { origin } = window.location;
const PAGES_ROOT = `${origin}/Pages`;

export const BASE_URL = `${PAGES_ROOT}/memoir`;
export const LOGIN_URL = `${PAGES_ROOT}/user`;

export const API_ROOT = "http://3.37.10.41:8080";

export const USER_API_URL = `${API_ROOT}/user`;
export const MEMOIR_API_URL = `${API_ROOT}/memoir`; 