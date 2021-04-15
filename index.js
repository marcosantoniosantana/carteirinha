function validar(){
	var nome = document.getElementById('nome').value;
	var idade = document.getElementById('ano').value;
	var escolhe = document.getElementById('s').value;
	var city = document.getElementById('cidade').value;
	var bt = document.createElement('botao');
	var img = document.createElement('img');
	img.src = "qr.png";
	img.style.width = "140px";
	img.style.height = "140px";


	if (idade <= 2006) {
		window.alert("validando...")
	document.getElementById('pidade').innerHTML = "Nasceu em: " + idade;
	document.getElementById('name').innerHTML = "Nome: " + nome;
	document.getElementById('local').innerHTML = "Nascido em: " + city;
	document.getElementById('num').innerHTML = "Número de registro: " + Math.round(Math.random() * 1234 / 5) * 7 + 2 + 0;
	document.getElementById('botao').innerHTML = '<input type="button" onClick="janela()" id="bt" value="Abrir">';
	document.getElementById('ft').appendChild(img);

	}else{
		window.alert("INVALIDO!!!!")
		document.getElementById('ano').style.color = "#ff0000";
	}

	if (idade == null || idade == "") {
		window.alert('INSIRA Sua idade')
	document.getElementById('pidade').innerHTML = "";
	document.getElementById('name').innerHTML = "";
	document.getElementById('local').innerHTML = "";
	document.getElementById('num').innerHTML = "";
	document.getElementById('ft').innerHTML = "";
	document.getElementById('botao').innerHTML = "";

	}

	if (nome == null || nome == "") {
		window.alert('INSIRA SEU NOME!')
	document.getElementById('pidade').innerHTML = "";
	document.getElementById('name').innerHTML = "";
	document.getElementById('num').innerHTML = "";
	document.getElementById('ft').innerHTML = "";
	document.getElementById('botao').innerHTML = "";

	}
}