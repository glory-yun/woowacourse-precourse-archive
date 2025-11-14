const url = new URL("http://localhost:8080/memoir")

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
        fetch(url);
    const memoir = await response.json();
    sessionStorage.setItem("memoir", JSON.stringify(memoir))
    return memoir;
}

export async function postMemoir(memoir) {
    const response = await
        fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',   // ← 이게 핵심!
            },
            body: JSON.stringify(memoir),
        })
}

export async function putMemoir(id, memoir) {
    let urlParams = url.searchParams
    urlParams.append("id", id)

    const response = await
        fetch(url, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',   // ← 이게 핵심!
            },
            body: JSON.stringify(memoir)
        });
}

export async function deleteMemoir(id) {
    let urlParams = url.searchParams
    urlParams.append("id", id)

    const response = await
        fetch(url, {
            method: "DELETE"
        });
}