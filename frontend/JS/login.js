import { getUser } from "../API/getUserApi.js";
import { redirectToMemoirList } from "../util/route.js";
import { saveUser } from "../API/getUserApi.js";

const loginForm = document.querySelector("#loginForm");
loginForm.addEventListener("submit", handleLogin);

async function handleLogin(event) {
  event.preventDefault();

  const formData = new FormData(loginForm);
  const loginDto = Object.fromEntries(formData.entries());

  const user = await getUser(loginDto);
  saveUser(user);
  redirectToMemoirList();
}