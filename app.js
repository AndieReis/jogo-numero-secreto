alert("Sejam bem vindos ao Jogo do Número Secreto");

let numeroSecreto = 5;
let chute = prompt("Escolha um número de 1 a 10: ");

if (chute == numeroSecreto) {
    console.log(`Você acertou! O número secreto é: ${numeroSecreto}`);
} else {
    if (chute < numeroSecreto) {
        console.log(`Você errou, o número secreto é maior que ${chute}.`);
    } else {
        console.log(`Você errou, o número secreto é menor que ${chute}.`);
    }
}
