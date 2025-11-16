import { USER_API_URL } from "../config.js";

const userUrl = new URL(USER_API_URL);


//  공통 fetch 함수
async function request(endpoint, method, body, errorMessage) {
    try {
        const response = await fetch(`${userUrl}${endpoint}`, {
            method,
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });

        if (!response.ok) {
            throw new Error(errorMessage);
        }
        return response.status !== 204 ? await response.json() : null;
    } catch (error) {
        alert(error.message);
        throw error;
    }
}

export async function saveUser(user) {
    return request("signup", "POST", user, "아이디가 중복됩니다");
}

export async function getUser(user) {
    return request("signin", "POST", user, "아이디와 비밀번호를 확인해주세요");
}