const url = new URL("http://localhost:8080")

export async function getMemoirs() {
    const response = await
        fetch(url);
    const memoirs = await response.json();
    return memoirs;
}

export async function getMomoirDetail(id) {
    let urlParams = url.searchParams
    urlParams.append("id", id)

    const response = await
        fetch(url + urlParams);
    const memoir = await response.json();
    sessionStorage.setItem("memoir", JSON.stringify(memoir))
    return memoir;
}

export async function postMemoir(memoir) {
    const response = await
        fetch(url, {
            method: "POST",
            body: JSON.stringify({
                memoir
            }),
        })
}

export async function putMemoir(id, memoir) {
    let urlParams = url.searchParams
    urlParams.append("id", id)

    const response = await
        fetch(url + urlParams, {
            method: "PUT",
            body: JSON.stringify(memoir)
        });
}