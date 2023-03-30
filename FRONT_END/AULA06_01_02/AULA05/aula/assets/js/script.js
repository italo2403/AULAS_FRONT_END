function funcao1()
{
    funcao2();
}

function funcao2(){
    alert("Bem Vindo")
}


var btn = document.querySelector("#back-to-top");
btn.addEventListener("click", 
function() {
    window.scrollTo(0, 0);
});