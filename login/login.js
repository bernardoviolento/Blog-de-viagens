function cadastrar() {
    let usuario = {
        nome: nome.value,
        email: email.value,
        senha: senha.value
    }
    localStorage.setItem("usuario", JSON.stringify(usuario))
    msg.innerText = "Cadastro realizado!"
}

function login() {
    let usuario = JSON.parse(localStorage.getItem("usuario"))
    if (!usuario) {
        msg.innerText = "Nenhum usuário cadastrado"
        return
    }
    if (email.value === usuario.email && senha.value === usuario.senha) {
        localStorage.setItem("logado", "true")
        window.location.href = "../index.html"
    } else {
        msg.innerText = "Email ou senha incorretos"
    }
}
