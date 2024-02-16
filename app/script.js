const btnUsuarioPedra = document.querySelector('#pedra')
const btnUsuarioPapel = document.querySelector('#papel')
const btnUsuarioTesoura = document.querySelector('#tesoura')
const playUsuario = document.querySelector('.opcao__usuario')
const opcaoComp = document.querySelector('.opcao__computador')

btnUsuarioPedra.addEventListener('click', () => {
    opcaoBtnUsuario('./assets/img/pedra_esquerda.png')
})

btnUsuarioPapel.addEventListener('click', () => {
    opcaoBtnUsuario('./assets/img/papel_esquerda.png');
})

btnUsuarioTesoura.addEventListener('click', () => {
    opcaoBtnUsuario('./assets/img/tesoura_esquerda.png')
})
;

function gerarNumero () {
    const maiorValor = 9;
    return parseInt(Math.random() * maiorValor + 1);
}


function chuteComputador() {
    const papelComp = [1, 4, 7];
    const pedraComp = [2, 5, 8];
    const numero = gerarNumero();

    if (papelComp.includes(numero)) {
        comptOpcao('./assets/img/papel_direita.png');
        console.log('papel')
        console.log(numero)
    } else if (pedraComp.includes(numero)){
        comptOpcao('./assets/img/pedra_direita.png');
        console.log('pedra')
        console.log(numero)
    } else {
        comptOpcao('./assets/img/tesoura_direita.png');
        console.log('tesoura')
        console.log(numero)
    }
}

function comptOpcao (caminho) {
    opcaoComp.src = (caminho);
}

function opcaoBtnUsuario (caminho) {
    playUsuario.src = caminho;
    chuteComputador();
}