import { getUser } from "../API/getUserApi.js";
import { BASE_URL } from "../config.js";

const loginFrm = document.querySelector("#loginForm")
loginFrm.addEventListener("submit", login)

async function login(e) {
    e.preventDefault();

    const username = loginFrm.querySelector("#username").value
    const password = loginFrm.querySelector("#password").value


    let loginDto = {
        "username": username,
        "password": password
    }
    const user = await getUser(loginDto)

    storeUserData(user)
    getMemoirList()
}

function storeUserData(user) {
    const userId = user.userId
    const username = user.username

    localStorage.setItem("userId", userId)
    localStorage.setItem("username", username)
}

function getMemoirList() {
    const url = new URL(`${BASE_URL}/memoirList.html`)
    window.location.href = url
}