
const btnUsuarioPedra = document.querySelector('#pedra')
const btnUsuarioPapel = document.querySelector('#papel')
const btnUsuarioTesoura = document.querySelector('#tesoura')
const playUsuario = document.querySelector('.opcao__usuario')
const opcaoComp = document.querySelector('.opcao__computador')
let botaoClicado = '';

btnUsuarioPedra.addEventListener('click', () => {
    opcaoBtnUsuario('./assets/img/pedra_esquerda.png')
    botaoClicado = 'pedra';
})

btnUsuarioPapel.addEventListener('click', () => {
    opcaoBtnUsuario('./assets/img/papel_esquerda.png');
    botaoClicado = 'papel';
})

btnUsuarioTesoura.addEventListener('click', () => {
    opcaoBtnUsuario('./assets/img/tesoura_esquerda.png')
    botaoClicado = 'tesoura';
});
