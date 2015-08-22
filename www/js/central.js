window.central = (function() {
	var self = {};
	_luzEstaLigada = false;
	_alarmeEstaDisparado = false;
	_devePararDeEscutar = false;

	self.http = undefined;
	self.location = undefined;

	self.abrirPortao = function() {
		self.http.get('http://200.163.33.178:8099/abrir_portao');
	};

	self.alternarLuz = function() {
		if (_luzEstaLigada)
			self.http.get('http://200.163.33.178:8099/desligar_luz');
		else
			self.http.get('http://200.163.33.178:8099/ligar_luz');

		_luzEstaLigada = !_luzEstaLigada;

		console.log('Estado da luz: ', _luzEstaLigada);
	};

	self.luzEstaLigada = function() {
		return _luzEstaLigada;
	};

	self.dispararAlarme = function() {
		if (_alarmeEstaDisparado)
			self.http.get('http://200.163.33.178:8099/alarme_desativado');
		else
			self.http.get('http://200.163.33.178:8099/alarme_disparando');

		_alarmeEstaDisparado = !_alarmeEstaDisparado;
	};

	self.escutarChamada = function() {
		console.log('escutando chamada');
		_devePararDeEscutar = false;

		var intervalo = setInterval(function() {
			console.log(_devePararDeEscutar);

			if (_devePararDeEscutar)
				clearInterval(intervalo);

			self.http.get('http://200.163.33.178:8099/botao_chamada')
				.then(function(resposta) {
					console.log(resposta.data);

					if (resposta.data === 'atenda')
						self.location.path('/app/chamada');
				});
		}, 3000);
	};

	self.pararDeEscutar = function() {
		console.log(_devePararDeEscutar);
		_devePararDeEscutar = true;
	};

	return self;
})();