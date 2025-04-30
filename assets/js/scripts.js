document.getElementById("formulario").addEventListener("submit", function (event) {
    event.preventDefault()

    const input = document.getElementById("numero").value
    const resultado = document.querySelector("#resultado h2");

    if (isNaN(input) || input.trim() === "") {
      return
    } else {
        resultado.textContent = `Resultado: ${fibonacci(parseInt(input))}`
    }
  });

  function fibonacci(n) {
    
}