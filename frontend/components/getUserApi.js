const url = new URL("http://localhost:8080/")

export async function saveUser(user) {
    const response = await
        fetch(url + "signup", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        })
}
