if (localStorage.getItem("logado") === "true") {
    let user = JSON.parse(localStorage.getItem("usuario"))
    document.getElementById("user").innerText = "Olá, " + user.nome
    loginLink.style.display = "none"
    logoutBtn.style.display = "inline"
}

function logout() {
    localStorage.clear()
    location.reload()
}

function buscarArtigos() {
    let termo = busca.value.toLowerCase()
    document.querySelectorAll(".artigo").forEach(a => {
        a.style.display = a.innerText.toLowerCase().includes(termo) ? "flex" : "none"
    })
}

let votos = { sim: 0, nao: 0 }

function votar(opcao) {
    votos[opcao]++
    resultado.innerText = `Sim: ${votos.sim} | Não: ${votos.nao}`
}

