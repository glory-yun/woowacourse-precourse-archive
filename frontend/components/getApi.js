export async function getMemoirs() {
    const response = await 
    fetch("http://localhost:8080");
    const memoirs = await response.json();
    return memoirs;
}
