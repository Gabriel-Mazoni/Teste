function CalcDifalUnica() {
    // Obter os valores dos inputs
    const valorProduto = parseFloat(document.getElementById('ValorProduto').value);
    const aliquotaOrigem = parseFloat(document.getElementById('AliquotaOrigem').value);
    const aliquotaDestino = parseFloat(document.getElementById('AliquotaDestino').value);
    
    // Validar os valores de entrada
    if (isNaN(valorProduto) || isNaN(aliquotaOrigem) || isNaN(aliquotaDestino)) {
        document.getElementById('resultado').textContent = "Por favor, preencha todos os campos com valores válidos.";
        return;
    }
    
    // Calcular o DIFAL (base única)
    const diferencaAliquotas = aliquotaDestino - aliquotaOrigem;
    let valorDifal = (valorProduto * diferencaAliquotas) / 100;
    
    // Usando Math.abs() para garantir valor positivo
    valorDifal = Math.abs(valorDifal);
    
    // Exibir o resultado
    document.getElementById('resultado').textContent = 
        `Valor do DIFAL: R$ ${valorDifal.toFixed(2)}`;
}

function CalcDifalDupla() {
    //Obter os valores dos inputs
    const valorProduto = parseFloat(document.getElementById('ValorProduto2').value);
    const aliquotaOrigem = parseFloat(document.getElementById('AliquotaOrigem2').value);
    const aliquotaDestino = parseFloat(document.getElementById('AliquotaDestino2').value);

    // Validar os valores de entrada
    if (isNaN(valorProduto) || isNaN(aliquotaOrigem) || isNaN(aliquotaDestino)) {
        document.getElementById('resultado2').textContent = "Por favor, preencha todos os campos com valores válidos.";
        return;
    }
    
    // Calcular o DIFAL (base dupla)
    const ICMSInterestadual = (valorProduto * aliquotaOrigem) / 100;
    const Base1 = valorProduto - ICMSInterestadual;
    const Base2 = Base1 / (1 - (aliquotaDestino / 100));
    const ICMSInterno = Base2 * (aliquotaDestino / 100);
    let valorDifal = ICMSInterno - ICMSInterestadual;

    // Usando Math.abs() para garantir valor positivo
    valorDifal = Math.abs(valorDifal);

    // Exibir o resultado
    document.getElementById('resultado2').textContent = 
        `Valor do DIFAL: R$ ${valorDifal.toFixed(2)}`;

}


function LimparCampos() {
    document.getElementById('ValorProduto').value = '';
    document.getElementById('AliquotaOrigem').value = '';
    document.getElementById('AliquotaDestino').value = '';
    document.getElementById('resultado').textContent = ''
    document.getElementById('resultado2').textContent = '';
    document.getElementById('ValorProduto2').value = '';
    document.getElementById('AliquotaOrigem2').value = '';
    document.getElementById('AliquotaDestino2').value = '';
}