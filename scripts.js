
function jogarPc() {
    let aleatorio = Math.floor(Math.random() * 3) + 1;
    return aleatorio;
}

function jogar(jogador) {
    let pc = jogarPc()

    for (let i=1; i<4; i++){
        document.getElementById(i).classList.remove('escolhido-pc')
        document.getElementById(i).classList.remove('escolhido-jogador')
    }
    document.getElementById(pc).classList.add('escolhido-pc');
    document.getElementById(jogador).classList.add('escolhido-jogador');
    
    if (jogador == pc) {
        window.alert('empate!')
    } else if ((jogador > pc && (jogador != 3 || pc != 1)) ||(jogador == 1 && pc == 3)) {
        window.alert('Você venceu!')
    }else {
        window.alert('Você perdeu!')
    }
}