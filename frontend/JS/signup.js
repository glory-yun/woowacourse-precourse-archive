import { saveUser } from "../API/getUserApi.js";
import { redirectToLogin } from "../util/route.js";

const signupFrm = document.querySelector("#signupForm")
signupFrm.addEventListener("submit", signup)

async function signup(event) {
  event.preventDefault();

  const userDto = {
    "username": signupFrm.querySelector("#username").value,
    "password": signupFrm.querySelector("#password").value,
    "email": signupFrm.querySelector("#email").value
  }

  await saveUser(userDto);

  alert('회원가입 됐습니다')
  redirectToLogin();
}