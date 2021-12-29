const imgSrc = ['rock.png', 'paper.png', 'scissors.png'];
let pontosJog = 0;
let pontosPc = 0;

function aleatorioUmATres() {
    return Math.floor(Math.random() * 3);
}

function alterarMaos(indiceJogador, indicePc) {
    document.querySelector('#mao-jogador').setAttribute('src', 'img/' + imgSrc[indiceJogador])
    document.querySelector('#mao-pc').setAttribute('src', 'img/' + imgSrc[indicePc])
}

function resultadoQuemVenceu(escolhaJogador, escolhaPc) {
    /*
    0 empate
    1 vitória jogador
    -1 vitória computador
    */
    if (escolhaJogador == escolhaPc) {
       return 0;
    } else if ((escolhaJogador > escolhaPc && (escolhaJogador != 2 || escolhaPc != 0)) ||(escolhaJogador == 0 && escolhaPc == 2)) { 
        return 1;
    }else { 
        return -1;
    }
}

function atualizarTelaResultado(escolhaJogador, escolhaPc) {
    alterarMaos(escolhaJogador, escolhaPc);
    let resultado = resultadoQuemVenceu(escolhaJogador, escolhaPc)
    let mensagemResultado;

    if (resultado == 1) { 
        pontosJog += 1;
        document.querySelector('.pontos-jogador').innerHTML = pontosJog;
        mensagemResultado = 'Você venceu!'
    } else if (resultado == -1) { 
        pontosPc += 1;
        document.querySelector('.pontos-pc').innerHTML = pontosPc;
        mensagemResultado = 'Você perdeu!'
    } else { 
        mensagemResultado = 'Empate!'
    }
    document.querySelector('.resultado').innerHTML = mensagemResultado;
}