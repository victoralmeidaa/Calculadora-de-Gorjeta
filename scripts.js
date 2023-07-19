function calcularTip(event) {
    event.preventDefault();
    let valorConta = document.getElementById('bill').value;
    let qualidadeServ = document.getElementById('qualidadeService').value;
    let quantidadeP = document.getElementById('people').value;

    // alerta para preencher o formulario 
    if (bill == '' | qualidadeServ == 0) {
        alert("Por favor, preencha  os valores")
        return;
    }

    // Logica para exibir resultado 
    if (quantidadeP == "" | quantidadeP <= 1) {
        quantidadeP = 1;
        // se quantidade pessoa for menor ou igual a 1 nao exibe div id=mais-uma-pessoa
        document.getElementById('mais-uma-pessoa').style.display = "none"
    } else {
        document.getElementById('mais-uma-pessoa').style.display = "block"
    }
    let total = (valorConta * qualidadeServ) / quantidadeP;
    total = total.toFixed(2);
    document.getElementById('valor-calculado').innerHTML = total;
    document.getElementById('totalGorj').style.display = "block";
}

// Definir display div id=totalGorj como none
document.getElementById('totalGorj').style.display = "none";
// Definir display div id=mais-uma-pessoa como none
document.getElementById('mais-uma-pessoa').style.display = "none";

document.getElementById('formCalc').addEventListener('submit', calcularTip);