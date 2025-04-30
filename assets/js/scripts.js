document.getElementById("formulario").addEventListener("submit", function (event) {
	event.preventDefault()

	const input = document.getElementById("numero").value
	const marco = document.getElementById("resultado")
	const resultado = document.querySelector("#resultado h2")

	if (isNaN(input) || input.trim() === "" || input < 0) {
		marco.setAttribute("class", "col-10 col-sm-8 col-md-5 col-lg-3 bg-light border border-danger border-5 p-3 my-3 d-flex justify-content-center align-items-center")
		resultado.setAttribute("class", "text-center text-danger m-0")
		resultado.innerHTML = `Error<br>Ingresa un numero entero!!!`
	}
	else {
		marco.setAttribute("class", "col-10 col-sm-8 col-md-5 col-lg-3 bg-light border border-success border-5 p-3 my-3 d-flex justify-content-center align-items-center")
		resultado.setAttribute("class", "text-center text-success m-0")
		resultado.textContent = `Resultado: ${fibonacci(parseInt(input))}`
	}
})

function fibonacci(n) {
    if (n <= 0) return []

    const secuencia = [0]

    if (n === 1) return secuencia

    secuencia.push(1)
    for (let i = 2; i < n; i++) {
        const siguiente = secuencia[i - 1] + secuencia[i - 2]
        secuencia.push(siguiente)
    }

    return secuencia
}
