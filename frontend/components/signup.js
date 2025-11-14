import { saveUser } from "./getUserApi.js";

const signupFrm = document.querySelector("#signupForm")
signupFrm.addEventListener("submit", signup)

async function signup(e) {
    e.preventDefault();

    const username = signupFrm.querySelector("#username").value
    const password = signupFrm.querySelector("#password").value
    const email = signupFrm.querySelector("#email").value

    let user = {
        "username" : username,
        "password" : password,
        "email" : email
    }

    await saveUser(user)
}