import { saveUser } from "../API/getUserApi.js";
import { BASE_URL } from "../config.js";
const signupFrm = document.querySelector("#signupForm")
signupFrm.addEventListener("submit", signup)

async function signup(e) {
    e.preventDefault();

    const username = signupFrm.querySelector("#username").value
    const password = signupFrm.querySelector("#password").value
    const email = signupFrm.querySelector("#email").value

    let user = {
        "username": username,
        "password": password,
        "email": email
    }

    await saveUser(user)

    getLogin()
}

function getLogin() {
    if (confirm('회원가입 됐습니다')) {
        const url = new URL(`${BASE_URL}/login.html`)
        window.location.href = url
    }
}