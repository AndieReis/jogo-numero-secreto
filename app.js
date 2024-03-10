let listaNumerosSorteados = [];
let numeroMaximo = 10;
let numeroSecreto = gerarNumeroSecreto();
let tentativas = 1;
let trofeu = document.getElementById("trophy");

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', { rate: 1.2 });
}

function exibirMensagemInicial() {
    exibirTextoNaTela("h1", "Jogo do Número Secreto");
    exibirTextoNaTela("p", `Escolha um número entre 1 e ${numeroMaximo}: `);
}
exibirMensagemInicial();

function gerarNumeroSecreto() {
    let numeroEscolhido = parseInt(Math.random() * numeroMaximo + 1);
    let quantidadeNumerosLista = listaNumerosSorteados.length;

    if (quantidadeNumerosLista == numeroMaximo) {
        listaNumerosSorteados = [];
    }



    if (listaNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroSecreto();
    } else {
        listaNumerosSorteados.push(numeroEscolhido);
        console.log(listaNumerosSorteados);
        return numeroEscolhido;
    }
}


function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
        exibirTextoNaTela("h1", "Você acertou!");
        exibirTextoNaTela("p", `Você descobriu o número secreto com ${tentativas}  ${palavraTentativa} !`);
        trofeu.style.display = "block";
        document.getElementById('reiniciar').removeAttribute("disabled");

    } else {
        if (chute < numeroSecreto) {
            exibirTextoNaTela("p", `Você errou, o número secreto é maior que ${chute} .`);

        } else {
            exibirTextoNaTela("p", `Você errou, o número secreto é menor que ${chute} .`);
        }

    }
    tentativas++;
    limparCampo();
}

function limparCampo() {
    let chute = document.querySelector('input');
    chute.value = "";
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroSecreto();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute("disabled", true);
    trofeu.style.display = "none";
}
