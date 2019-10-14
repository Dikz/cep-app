const axios = require('axios')

$(() => {
	$('[name="cep"]').keyup(function(event) {
		let cep = this.value

		if (cep.length >= 8) {
			axios(`https://viacep.com.br/ws/${cep}/json/`)
				.then(res => {
					if (res.data.erro) return $('#resultado').html(renderFail(cep))

					$('#resultado').html(renderResult(res.data))
				})
				.catch(err => $('#resultado').html(renderFail(cep)))
		} else {
			$('#resultado').html('')
		}
	})
})

let renderResult = local => {
	return `<div class="card bg-light" style="opacity: .8">
		<div class="card-header">${local.localidade} - ${local.cep}</div>
		<div class="card-body">
			<h5 class="card-title">${local.localidade} - ${local.uf}</h5>
			<p class="card-text">IBGE: ${local.ibge}</p>
		</div>
	</div>`
}

let renderFail = (value) => {
	return `<div class="card bg-warning text-light" style="opacity: .8">
		<div class="card-header">Opss!</div>
		<div class="card-body">
			<h5 class="card-title">Não achei isso 😅</h5>
			<p class="card-text">Tem certeza que é ${value} ?</p>
		</div>
	</div>`
}

let inputWord = (key) => {
	return `<div class="card bg-danger text-light" style="opacity: .8">
		<div class="card-header">O que é isso?</div>
		<div class="card-body">
			<h5 class="card-title">CEP não tem letras!</h5>
			<p class="card-text">O que quer com esse letra: ${key} ?</p>
		</div>
	</div>`
}
