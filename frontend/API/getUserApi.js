import { USER_API_URL } from "../config.js";

const userUrl = USER_API_URL;


//  공통 fetch 함수
async function request(endpoint, user, errorMessage) {
  try {
    const response = await fetch(`${userUrl}/${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (!response.ok) {
      throw new Error(errorMessage);
    }
    return response.headers.get("content-type")?.includes("application/json")
      ? response.json()
      : response.text();
  } catch (error) {
    alert(error.message);
    throw error;
  }
}

export async function saveUser(user) {
  return request("signup", user, "아이디가 중복됩니다");
}

export async function getUser(user) {
  return request("signin", user, "아이디와 비밀번호를 확인해주세요");
}