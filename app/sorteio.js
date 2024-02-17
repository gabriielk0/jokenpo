function gerarNumero () {
    const maiorValor = 9;
    return parseInt(Math.random() * maiorValor + 1);
}

let escolhaComp = '';



function chuteComputador() {
    const papelComp = [1, 4, 7];
    const pedraComp = [2, 5, 8];
    const numero = gerarNumero();
   
    if (papelComp.includes(numero)) {
        comptOpcao('./assets/img/papel_direita.png');
        escolhaComp ='papel';
        console.log(escolhaComp);
        console.log('numero:',numero)
    } else if (pedraComp.includes(numero)){
        comptOpcao('./assets/img/pedra_direita.png');
        escolhaComp ='pedra';
        console.log(escolhaComp);
        console.log('numero:', numero)
    } else {
        comptOpcao('./assets/img/tesoura_direita.png');
        escolhaComp ='tesoura';
        console.log(escolhaComp);
        console.log('numero:',numero)
    }

}

function comparar (botaoClicado, escolhaComp) {
    switch(botaoClicado) {
        case 'papel':
            switch (escolhaComp) {
                    case 'papel':
                        console.log('empate')
                        break;
                    case 'pedra':
                        console.log('ganhou')
                        break;
                    case 'tesoura':
                        console.log('perdeu')
                        break;
                }
            break;
        case 'pedra':
            switch (escolhaComp) {
                    case 'papel':
                        console.log('perdeu')
                        break;
                    case 'pedra':
                        console.log('empate')
                        break;
                    case 'tesoura':
                        console.log('ganhou')
                        break;
                }
            break;
        case 'tesoura':
        switch (escolhaComp) {
                case 'papel':
                    console.log('ganhou')
                    break;
                case 'pedra':
                    console.log('perdeu')
                    break;
                case 'tesoura':
                    console.log('empate')
                    break;
            }
        break;
    }
}

function comptOpcao (caminho) {
    opcaoComp.src = (caminho);
}

function opcaoBtnUsuario (caminho) {
    playUsuario.src = caminho;
    chuteComputador();
}
