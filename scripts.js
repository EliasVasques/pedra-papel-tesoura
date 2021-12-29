const imgSrc = ['rock.png', 'paper.png', 'scissors.png'];
let pontosJog = 0;
let pontosPc = 0;

function aleatorioUmATres() {
    return Math.floor(Math.random() * 3);
}
function alterarMaos(indiceJogador, indicePc){
    document.querySelector('#mao-jogador').setAttribute('src', 'img/' + imgSrc[indiceJogador])
    document.querySelector('#mao-pc').setAttribute('src', 'img/' + imgSrc[indicePc])
}

function atualizarTelaResultado(escolhaJogador, escolhaPc) {
    alterarMaos(escolhaJogador, escolhaPc);
    
    let resultado;
    
    if (escolhaJogador == escolhaPc) { // empate jogador
       resultado = 'Empate!';
    } else if ((escolhaJogador > escolhaPc && (escolhaJogador != 2 || escolhaPc != 0)) ||(escolhaJogador == 0 && escolhaPc == 2)) { // vitória jogador
        resultado = 'Você venceu!';
        pontosJog += 1;
        document.querySelector('.pontos-jogador').innerHTML = pontosJog;
    }else { // derrota jogador
        resultado = 'Você perdeu!';
        pontosPc += 1;
        document.querySelector('.pontos-pc').innerHTML = pontosPc;
    }
    document.querySelector('.resultado').innerHTML = resultado;
}