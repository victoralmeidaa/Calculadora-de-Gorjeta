function calcularTip(event){
    event.preventDefault();
    let valorConta = document.getElementById('bill').value; 
    let qualidadeServ = document.getElementById('qualidadeService').value;
    let quantidadeP = document.getElementById('people').value;

    if(bill == '' | qualidadeServ == 0){
        alert("Por favor, preencha  os valores")
        return;
    }

    if(quantidadeP == "" | quantidadeP <=1){
        quantidadeP = 1;
            document.getElementById('each').style.display = "none"
    } else {
        document.getElementById('each').style.display = "block"
    }
        let total = (valorConta * qualidadeServ) / quantidadeP;
        total = total.toFixed(2);
        document.getElementById('tip').innerHTML = total;
        document.getElementById('totalGorj').style.display = "block";
}

document.getElementById('totalGorj').style.display = "none"; 
document.getElementById('each').style.display = "none";

 document.getElementById('formCalc').addEventListener('submit', calcularTip);