
function carregar(){
    var msg = document.querySelector('div#msg')
    var img = document.querySelector('img#imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos.`

    if(hora >= 0 && hora <12){
        // Bom dia  
        img.src = 'manhã.jpg'
        document.body.style.background = '#e2cd9f'
        msg.innerHTML += '<br>Bom dia!'

    }else if (hora >= 12 && hora < 18){
        // Boa tarde
        img.src = 'trade.jpg'
        document.body.style.background = '#b5644d'
        msg.innerHTML += '<br>Boa tarde!'
    }else {
        // Boa noite
        img.src = 'noite.jpg'
        document.body.style.background = '#093063'
        msg.innerHTML += '<br>Boa Noite!'
    }
}

