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

export async function getUser(user) {
    try {
        const response = await
            fetch(url + "signin", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user)
            })

        if (!response.ok) {
            throw new Error()
        }
        user = await response.json();
        return user;
    } catch (error) {
        alert("아이디와 비밀번호를 확인해주세요")
        throw error
    }
}