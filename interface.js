var jogo = new JogoXadrez();

function init() {
	document.write("<table align=\"center\"><th><div id=\"anim\"><h2>Bem-Vindo<br>ao<br>XadrezJS</h2><h4>by MarcosATSF</h4></div></th></table>");
	gerar_tabuleiro();
	jogo.reiniciar();
	atualizar_jogo();
}

(function titleMarquee() {
    document.title = document.title.substring(1)+document.title.substring(0,1);
    setTimeout(titleMarquee, 200);
})();

function select(i,j) {
	var tabuleiro = document.getElementById('tabuleiro');
	var obj = tabuleiro.rows[i].cells[j];

	if (select.obj_clicado === undefined || select.obj_clicado === null) {
		var peca = jogo.getPeca(i, j);
		if(peca.tipo != jogo.getVez()){
			jogo.getVez() == 0 ? alert("Vez do jogador Branco!") : alert("Vez do jogador Preto!");
			return;
		} 

		if (peca == null) return;

		select.obj_clicado = obj;
		select.obj_bgcolor = obj.style.backgroundColor;
		select.peca = peca;
		obj.style.backgroundColor = "green";
	} else if (jogo.moverPeca(select.peca, i, j)) {
		select.obj_clicado.style.backgroundColor = select.obj_bgcolor;
		select.obj_clicado = null;
		atualizar_jogo();
		jogo.rodaVez();
	} else {
		alert("Movimento invalido!");
		select.obj_clicado.style.backgroundColor = select.obj_bgcolor;
		select.obj_clicado = null;
	}
}

function atualizar_jogo() {
	const pecas = ["", "♔", "♕", "♖", "♗", "♘", "♙", "♚", "♛", "♜", "♝", "♞", "♟"];
	let tabuleiro = document.getElementById('tabuleiro');
	let tabData = jogo.getTabuleiro();

	for (var i = 0, n = tabuleiro.rows.length; i < n; i++) {
		for (var j = 0, m = tabuleiro.rows[i].cells.length; j < m; j++) {
			obj = tabuleiro.rows[i].cells[j];
			obj.innerHTML = pecas[tabData[i][j]]; 
		}
	}
	
	switch(jogo.verificaEstados()){
		case 1: alert("Jogador Preto venceu!");
		setTimeout(reiniciar_jogo(),3000);
		break;
		case 2: alert("Jogador Branco venceu!");
		setTimeout(reiniciar_jogo(),3000);
		break;
	}
}

function reiniciar_jogo() {
	jogo.reiniciar();
	atualizar_jogo();
}

function gerar_tabuleiro() {
	var table = "<table id=\"tabuleiro\" align=\"center\">";
	var color = false;

	for (var i = 0; i < 8; i++) {
		table += "<tr>";
		for (var j = 0; j < 8; j++) {
			if (color) {
				table += "<td id=\"i" + i + "j" + j + "\" class=\"bgBlack\" onclick=\"select(" + i + "," + j + ");\"></td>";//bgcolor=\"silver\"
			} else {
				table += "<td id=\"i" + i + "j" + j + "\" class=\"bgWhite\" onclick=\"select(" + i + "," + j + ");\"></td>";//bgcolor=\"white\"
			}

			color = !color;
		}
		table += "</tr>";
		color = !color;
	}
	table += "</table>";
	document.write(table);
}

init();
