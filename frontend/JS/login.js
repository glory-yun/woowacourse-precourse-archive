import { getUser } from "../API/getUserApi.js";
import { redirectToMemoirList } from "../util/route.js";
import { storeUser } from "../util/dataStorage.js"

loginForm.addEventListener("submit", handleLogin);

async function handleLogin(event) {
  event.preventDefault();

  const loginDto = {
    username: loginForm.querySelector("#username").value,
    password: loginForm.querySelector("#password").value,
  };

  const user = await getUser(loginDto);
  storeUser(user);
  redirectToMemoirList();
}