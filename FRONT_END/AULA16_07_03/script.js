
//Resposta 01
/*function Testar(){
	alert("Funciona");
}*/


//Resposta 02
/*function Calcular(){
	let base = parseFloat(document.querySelector("#base").value);
	let altura = parseFloat(document.querySelector("#altura").value);
	document.querySelector("#resultado").innerHTML="O resultado é:" + ((base * altura )/2);
}*/


//Resposta 03
/*
function Resto(){
	let v1 = parseInt(document.querySelector("#v1").value);
	
	if(v1 % 2 == 0){
		document.querySelector("#resultado").innerHTML= "Par" + v1;
	}else{
		document.querySelector("#resultado").innerHTML= "Impar" + v1;
	}
}*/

//Resposta 04
/*
function Maior(){
	let v1 = document.querySelector("#v1").value;
	let v2 = document.querySelector("#v2").value;
	let v3 = document.querySelector("#v3").value;
	
	if( v1 > v2 && v1 > v3){
		document.querySelector("#resultado").innerHTML="Valor 1 é maior" + v1;
	}else if(v2 > v3 && v2 > v1){
		document.querySelector("#resultado").innerHTML="Valor 2 é maior" + v2;
	}else if(v3 > v2 && v3 > v1){
		document.querySelector("#resultado").innerHTML="Valor 3 é maior" + v3;
	}else{
		document.querySelector("#resultado").innerHTML="Por favor, insira um número";
	}
}*/


//Resposta 5
/*
function Temperatura(){
	
	let temp = parseFloat(document.querySelector("#temp").value);
	const conver= Math.round(5 * (temp-32) / 9)*1;
	
	document.querySelector("#resultado").innerHTML="A Temperatura é:" + conver;
	
}*/




//resposta 6
/*function Investimento(){
	let v1 = parseFloat(document.querySelector("#v1").value);
	let v2 = parseFloat(document.querySelector("#v2").value);
	let v3 = parseFloat(document.querySelector("#v3").value);
	const retorno = (v1 * (1 + v2 )) * v3;
	document.querySelector("#resultado").innerHTML= "O resultado é: " + retorno;
}*/


//resposta 9
/*function Salário(){
	let salario = parseFloat(document.querySelector("#salario").value)
	
	if( salario >= 280){
		document.querySelector('#resultado').innerHTML="O salário é:" +((salario * 0.02)+salario);
	}else if ( salario >= 280 && salario < 700){
		document.querySelector('#resultado').innerHTML="O salário é:" +((salario * 0.15)+salario);
}else if ( salario >= 700 && salario < 1500){
		document.querySelector('#resultado').innerHTML="O salário é:" +((salario * 0.10)+salario);
}else if ( salario >= 1500){
		document.querySelector('#resultado').innerHTML="O salário é:" +((salario * 0.05)+salario);
}else{
	document.querySelector('#resultado').innerHTML="O valor informado não é passível de leitura.";
}

}*/

//resposta 12

/*function Gorjeta(){
	const gorjeta = parseFloat(document.querySelector('#gorjeta').value);
	const valor = (gorjeta * 0.10)
	document.querySelector('#resultado').innerHTML="O valor da Gorjeta é:" + valor+" "+"e o valor total é"+" " + (gorjeta+valor);
}*/

//resposta 14

/*function Desconto(){
	let salario = parseFloat(document.querySelector('#desc').value);
	const desconto = (salario * 0.11) 
	
	
	if( desconto >= 334.29){
		document.querySelector('#resultado').innerHTML="O desconto foi de :" +desconto;	
		alert("Desconto maior do que a taxa pode conceder")
	}else{
		document.querySelector('#resultado').innerHTML="O desconto foi de :" +desconto;	
		alert('Desconto Consedido');
	}
}*/

	function Imc() {
		let nome = document.querySelector('#nome').value;
		let peso = parseFloat(document.querySelector('#peso').value);
		let altura = parseFloat(document.querySelector('#altura').value);
		const imc = peso / (Math.pow(altura, 2))
		document.querySelector('#resultado').innerHTML = `O resultado do IMC de ${nome} é ${(imc.toFixed(2))}`;

		if (imc < 16) {
			document.querySelector('#resultado').innerHTML = `Magreza grave de ${nome}, seu IMC é ${(imc.toFixed(2))}`;
		} else if (imc >= 16 && imc < 17 ) {
			document.querySelector('#resultado').innerHTML = `Magreza moderada de ${nome}, seu IMC é  ${(imc.toFixed(2))}`;
		} else if (imc >= 17 && imc < 18.5 ) {
			document.querySelector('#resultado').innerHTML = `Magreza leve de ${nome}, seu IMC é  ${(imc.toFixed(2))}`;
		} else if (imc >= 18.5 && imc < 25) {
			document.querySelector('#resultado').innerHTML = `Saudável de ${nome}, seu IMC é  ${(imc.toFixed(2))}`;
		} else if (imc >= 25 && imc < 30  ) {
			document.querySelector('#resultado').innerHTML = `Sobrepeso de ${nome}, seu IMC é  ${(imc.toFixed(2))}`;
		} else if (imc >= 30 && imc < 35  ) {
			document.querySelector('#resultado').innerHTML = `Obesidade Grau I de ${nome}, seu IMC é ${(imc.toFixed(2))}`;
		} else if (imc >= 35 && imc < 40 ) {
			document.querySelector('#resultado').innerHTML = `Obesidade Grau II (severa) de ${nome}, seu IMC é  ${(imc.toFixed(2))}`;
		} else if (imc >= 40 ) {
			document.querySelector('#resultado').innerHTML =`Obesidade Grau III (mórbida) de ${nome}, seu IMC é ${(imc.toFixed(2))} ` ;
	}else {
		document.querySelector('#resultado').innerHTML =` ${nome}, o valor é incoerente ` ;
	}
	}