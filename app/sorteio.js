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
        console.log('numero:',numero)
    } else if (pedraComp.includes(numero)){
        comptOpcao('./assets/img/pedra_direita.png');
        console.log('pedra')
        console.log('numero:', numero)
    } else {
        comptOpcao('./assets/img/tesoura_direita.png');
        console.log('tesoura')
        console.log('numero:',numero)
    }

    debugger

    switch(botaoClicado) {
        case 'papel':
            switch(numero) {
                case papelComp.includes(numero):
                    console.log('Empate')

                case pedraComp.includes(numero):
                    console.log('ganhhou')

                default:
                    console.log('perdeu')

            // if (papelComp.includes(numero)) {
            //     console.log('Empate')
            //     console.log('---------')
            // } else if(pedraComp.includes(numero)){
            //     console.log('Você ganhou')
            //     console.log('---------')
            // } else {
            //     console.log('Você perdeu!')
            //     console.log('---------')
            // }

        // case 'pedra':
        //     if (papelComp.includes(numero)) {
        //         console.log('Você perdeu!')
        //         console.log('---------')
        //     } else if(pedraComp.includes(numero)){
        //         console.log('Empate')
        //         console.log('---------')
        //     } else {
        //         console.log('Você Ganhou!')
        //         console.log('---------')
        //     }

        // case 'tesoura':
        //     if (papelComp.includes(numero)) {
        //         console.log('Você ganhou')
        //         console.log('---------')
        //     } else if(pedraComp.includes(numero)){
        //         console.log('Você perdeu')
        //         console.log('---------')
        //     } else {
        //         console.log('Empate')
        //         console.log('---------')
        //     }
    }
}
}
function comptOpcao (caminho) {
    opcaoComp.src = (caminho);
}

function opcaoBtnUsuario (caminho) {
    playUsuario.src = caminho;
    chuteComputador();
}
