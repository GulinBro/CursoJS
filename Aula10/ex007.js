var tn1 = document.getElementById('txtn1'); // Variavel recebendo dados do ID 
var tn2 = document.querySelector('input#txtn2'); // Variavel recebendo dados do ID
var res = document.getElementById('res'); // Variavel recebendo dados do ID 

function somar(){ // Função somar
var n1 = Number(tn1.value);
var n2 = Number(tn2.value);
var s = n1 + n2;
res.innerHTML = `<br> A soma entre ${n1} e ${n2} é igual a: <strong>${s}</strong>`
}