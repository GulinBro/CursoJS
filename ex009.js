
function verificapais(){
    var txt = document.querySelector('input#txt')
    var local = txt.value
    var res = document.querySelector('div#res')

    res.innerHTML = `Você é do (a) ${local}.`

        if(local != 'Brasil'){
            res.innerHTML += `<p>Você é Estrangeiro</p>`
         }else {
             res.innerHTML += `<p>Você é Brasileiro</p>`
    }
}