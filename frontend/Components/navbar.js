
export default function Navbar() {
  const navbarHtml = /* html */
    `
    <nav class="navbar navbar-light bg-white border-bottom sticky-top" >
      <div class="container d-flex justify-content-between align-items-center">
        <!-- 왼쪽 메뉴들 -->
        <div class="d-flex align-items-center gap-4">
          <a href="memoirList.html" class="navbar-brand fw-bold">우아한 회고록</a>
          <a href="memoirList.html" class="fw-semibold text-decoration-none text-dark">전체 회고록</a>
          <a href="memoirMyList.html" class="fw-semibold text-decoration-none text-dark">내 회고록</a>
        </div>

        <!-- 오른쪽 메뉴들 -->
        <div class="d-flex align-items-center gap-3">
          <a href="memoirWrite.html" class="btn btn-primary">새 회고 작성</a>
        </div>
      </div>
    </ >
    `
  document.body.insertAdjacentHTML("afterbegin", navbarHtml);
}

document.addEventListener("DOMContentLoaded", () => {
  Navbar();
});