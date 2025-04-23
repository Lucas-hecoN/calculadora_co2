document.getElementById('carbonForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const transporte = document.getElementById('transporte').value;
    const distancia = parseFloat(document.getElementById('distancia').value);
    const dias = parseInt(document.getElementById('dias').value);
    const alimentacao = document.getElementById('alimentacao').value;
  
    let fatorTransporte = {
      aviao: 0.09,
      carro: 0.192,
      onibus: 0.05,
      bicicleta: 0
    };
  
    let fatorAlimentacao = {
      comum: 5,
      vegetariana: 3,
      vegana: 2
    };
  
    const co2Transporte = distancia * (fatorTransporte[transporte] || 0);
    const co2Hospedagem = dias * 10;  // valor médio por dia em kg CO2
    const co2Alimentacao = dias * fatorAlimentacao[alimentacao];
  
    const totalCO2 = co2Transporte + co2Hospedagem + co2Alimentacao;
  
    document.getElementById('resultado').innerHTML = `
      <h2>Resultado:</h2>
      <p>Você gerou aproximadamente <strong>${totalCO2.toFixed(2)} kg</strong> de CO2 nesta viagem.</p>
      <h3>💡 Sugestões para compensar:</h3>
      <ul>
        <li>Plantar ${Math.ceil(totalCO2 / 20)} árvore(s).</li>
        <li>Utilizar transporte coletivo ou bicicleta sempre que possível.</li>
        <li>Apoiar projetos de reflorestamento.</li>
      </ul>
    `;
    document.getElementById('resultado').classList.remove('hidden');
  });
  