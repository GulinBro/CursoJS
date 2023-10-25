

function calcular(){
    var txtv = document.getElementById('txtvel');
    var vel = Number(txtv.value);
    var res = document.querySelector('div#res');
    res.innerHTML = `<p>Sua velocidade atual é de <strong>${vel} km/h.</strong></p> `
    
    if(vel > 80 ){
        res.innerHTML += `<p><strong>Você foi mutado!!</strong></p>`
    }else {
        res.innerHTML += `Dirija sempre com cinto de segurança!`
    }
}