const writeFrm = document.querySelector("#writeFrm");
writeFrm.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
    e.preventDefault();

    const title = document.querySelector("#title").value;
    const content = document.querySelector("#content");
    const contents = content.querySelector(".form-control");

    const form = document.createElement("form");
    const url = "http://localhost:8080"
    form.setAttribute('method', 'post');
    form.setAttribute('action', url);

    const data = document.createElement('input');
    data.setAttribute("title", title);
    data.setAttribute("contents", contents);

    form.appendChild(data);
    form.submit();
}
