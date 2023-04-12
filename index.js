//fazer aparecer a Frase: Prazer te ver aqui, fulano! quando a pessoa digitar o nome e apertar no botão entrar.//

function getValue () {
    var value = document.getElementById("name").value;
    document.getElementById("result").innerHTML = "É um prazer te ver aqui, " + value + "!";
}

//Quando a pessoa clicar em sair, vai limpar o campo de texto e em seguida a frase Prazer te ver aqui, fulano!//

function removeValue () {
    document.getElementById("name").value = "";
    document.getElementById("result").innerHTML = "";
}
