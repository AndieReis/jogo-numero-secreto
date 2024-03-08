alert("Sejam bem vindos ao Jogo do Número Secreto!");


let numeroMaximo = 100;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute
let tentativas = 1;

while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número de 1 a ${numeroMaximo}: `);

    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute < numeroSecreto) {
            alert(`Você errou, o número secreto é maior que ${chute} .`);
        } else {
            alert(`Você errou, o número secreto é menor que ${chute} .`);
        }
    }
    tentativas++;
}

let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
alert(`Você acertou! O número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa} .`);


