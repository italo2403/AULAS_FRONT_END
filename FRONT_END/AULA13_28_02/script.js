function Remover(){
  let nome = document.querySelector('#nome').value;
  nomes.pop();
  document.querySelector('#resultado').innerHTML=nomes.join(', ')
}