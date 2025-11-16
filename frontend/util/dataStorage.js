export function saveUser({ userId, username }) {
  localStorage.setItem("userId", userId);
  localStorage.setItem("username", username);
}

export function getUser() {
  return {
    userId: localStorage.getItem("userId"),
    username: localStorage.getItem("username"),
  };
}

export function clearUser() {
  localStorage.removeItem("userId");
  localStorage.removeItem("username");
}