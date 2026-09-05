let campoNome = document.getElementById("nome");
let mensagem = document.getElementById("mensagem");
let botaoEnviar = document.getElementById("botao-enviar");
let botaoTema = document.getElementById("botao-tema");

botaoEnviar.addEventListener("click", function () {
    let nome = campoNome.value;

    if (nome === "") {
        mensagem.textContent = "Digite um nome.";
    } else {
        mensagem.textContent = "Ola, " + nome + "! Seja bem-vindo(a)!";
    }
});

botaoTema.addEventListener("click", function () {
    document.body.classList.toggle("modo-escuro");

    if (document.body.classList.contains("modo-escuro")) {
        botaoTema.textContent = "Modo claro";
    } else {
        botaoTema.textContent = "Modo escuro";
    }
});
