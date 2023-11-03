function verificar(){
    
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else{

        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(fsex[0].checked){
            genero = 'homem'
            if(idade >= 0 && idade < 10){
                // Criança
                img.setAttribute('src','bbmasculino.jpg')
                res.innerHTML = `É uma criança com ${idade} anos.` 
            }else if(idade < 21){
                // Jovem
                img.setAttribute('src','jovemhomem.jpg')
                res.innerHTML = `É um jovem de ${idade} anos.`
            }else if(idade < 50){
                // Adulto
                img.setAttribute('src','homem.jpg')
                res.innerHTML = `É um homem de ${idade} anos.`
            }else {
                // Idoso
                img.setAttribute('src','idoso.jpg')
                res.innerHTML = `É um idoso de ${idade} anos.<br>`
            }
        }else if(fsex[1].checked){
            genero = 'mulher'
            if(idade >=0 && idade <10){
                // kid
                img.setAttribute('src','bbfeminina.jpg')
                res.innerHTML = `É uma criança com ${idade} anos.` 
            }else if(idade < 21){
                // Jovem
                img.setAttribute('src','jovemmulher.jpg')
                res.innerHTML = `É uma jovem de ${idade} anos.`
            }else if(idade < 50){
                // Adulto
                img.setAttribute('src','mulher.jpg')
                res.innerHTML = `É uma mulher de ${idade} anos.`
            }else {
                // Idoso
                img.setAttribute('src','idosa.jpg')
                res.innerHTML = `É um idosa de ${idade} anos.<br>`
            }
        }

        res.style.textAlign = 'center'
        // res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)

    }
}