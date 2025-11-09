export async function getMemoirs() {
    const response = await 
    fetch("http://localhost:8080");
    const memoirs = await response.json();
    return memoirs;
}

export async function getMomoirDetail() {
    const response = await 
    fetch("http://localhost:8080");
    const memoir = await response.json();
    return memoir;
}
