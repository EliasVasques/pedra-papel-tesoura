const img = ['rock.png', 'paper.png', 'scissors.png'];
let pontosJog = 0;
let pontosPc = 0;

function jogarPc() {
    let aleat = Math.floor(Math.random() * 3);
    return aleat;
}

function jogar(jogador) {
    let pc = jogarPc();
    
    // mãos
    document.querySelector('#mao-jogador').setAttribute('src', 'img/' + img[jogador])
    document.querySelector('#mao-pc').setAttribute('src', 'img/' + img[pc])
    
    let resultado;
    if (jogador == pc) {
       resultado = 'Empate!';
    } else if ((jogador > pc && (jogador != 2 || pc != 0)) ||(jogador == 0 && pc == 2)) {
        resultado = 'Você venceu!';
        pontosJog += 1;
        document.querySelector('.pontos-jogador').innerHTML = pontosJog;
    }else {
        resultado = 'Você perdeu!';
        pontosPc += 1;
        document.querySelector('.pontos-pc').innerHTML = pontosPc;
    }
    document.querySelector('.resultado').innerHTML = resultado;
}