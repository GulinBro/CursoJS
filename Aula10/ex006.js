var a = document.getElementById('area') // Variavel recebendo dados do ID area
a.addEventListener('click', clicar) // Adicionando um Evento
a.addEventListener('mouseenter', entrar)  // Adicionando um Evento
a.addEventListener('mouseout', sair)  // Adicionando um Evento

function clicar(){ //Função clicar
    a.innerText = 'Clicou!'
    a.style.background = 'red'
}

function entrar(){ // Função Entrar
    a.innerText = 'Entrou!'
    a.style.background = 'blue'
}
function sair(){ // Função sair
    a.innerText = 'Saiu!'
    a.style.background = 'rgb(15, 121, 15)'
}