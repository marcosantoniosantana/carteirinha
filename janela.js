function janela(){
	var alterar = document.getElementById('gera-carteira').remove();
	var alterar2 = document.getElementById('bt').remove();
	var cria_janela = document.getElementById('mural').innerHTML = '<div id="campo"><h1 class="titulo-bp"> Mural </h1> <textarea id="texto"></textarea> <input type="text" id="caixa"><input type="button" onClick="mensagens()" value="enviar" id="send"> </div>';
	
}

function mensagens(){

	var msm = document.getElementById('caixa').value;

	window.alert('validando...')

	document.getElementById('texto').innerHTML = msm;

}