let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

//VARIAVEL LIGANDO O JAVASCRIP COM O HTML, SEMPRE UTILIZAR O QUE ESTA NO HTML COMO LIGUAGEM NO JAVA EX: H1 E PARAGRAFO.

//FORMATO 1

//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'jogo do numero secreto';
//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um número entre 1 e 10';

//FORMATO 2(MELHOR E MAIS FACIL DE OPERAR)
function ExibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}
function exibirMensagemInicial() {
    ExibirTextoNaTela('h1','jogo do numero secreto');
    ExibirTextoNaTela(`p`,`Escolha um número entre 1 e ${numeroLimite}`);
}

exibirMensagemInicial();

// FUNCTION(FUNÇÃO)BOTÃO DE CHUTE
function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        ExibirTextoNaTela('h1', 'Acertou!!');
        let palavraTentativa = tentativas > 1 ? 'tantativas' : 'tentativa'
        let mensagemTentativas = `Voce descobriu o numero secreto com ${tentativas} ${palavraTentativa}`;
        ExibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
        //GETELEMENTBYID TRAZ O ID UNICO DA FUNÇÃO/BOTÃO QUE ESTA NO HTML ASSIM PODENDO SER HABILITADO OU DESABILITADO UTILIZANDO removeAttribute OU setAttribute
    }    else {
            if (chute > numeroSecreto) {
                ExibirTextoNaTela('p', 'O numero secreto é menor');
            } else {
                ExibirTextoNaTela('p', 'O numero secreto é maior');
            }
            tentativas++;
            limparCampo()
        }
}
function gerarNumeroAleatorio() {
    let numeroEscolido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.lingth;

    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolido)){
        return gerarNumeroAleatorio();
    } else{
        listaDeNumerosSorteados.push(numeroEscolido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolido;
    }
}
// LIMPAR CAMPO DE CHUTE(INPUT)
function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}
//GETELEMENTBYID TRAZ O ID UNICO DA FUNÇÃO/BOTÃO QUE ESTA NO HTML ASSIM PODENDO SER HABILITADO OU DESABILITADO UTILIZANDO removeAttribute OU setAttribute
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}