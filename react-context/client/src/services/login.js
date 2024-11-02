export const loginUsers = async (e) => {
    
    e.preventDefault()

    const username = document.getElementById("username").value.trim()
    const password = document.getElementById("password").value

    if (!username && !password) {
        alert("Complete los campos")
        return
    }

    try {
        const response = await fetch("http://localhost:3000/login-users", {
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body: JSON.stringify({
                username,
                password
            }),
            credentials:"include"
        })
        
    

        if (!response.ok) {
            const {message} = await response.json()
            alert(message)
            return
        }

        const {token} = await response.json()

        localStorage.setItem("token", token)

        alert("Inicio de Sesión Exitoso")
                
    } catch (error) {
        alert("Error Inesperado, Intentelo de nuevo mas tarde", error)
    }
}