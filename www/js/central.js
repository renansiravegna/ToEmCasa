window.central = (function() {
	var self = {};
	_luzEstaLigada = false;
	_alarmeEstaDisparado = false;

	self.http = undefined;
	self.location = undefined;

	self.abrirPortao = function() {
		self.http.get('http://192.168.0.105:5000/abrir_portao');
	};

	self.alternarLuz = function() {
		if (_luzEstaLigada)
			self.http.get('http://192.168.0.105:5000/desligar_luz');
		else
			self.http.get('http://192.168.0.105:5000/ligar_luz');

		_luzEstaLigada = !_luzEstaLigada;

		console.log('Estado da luz: ', _luzEstaLigada);
	};

	self.luzEstaLigada = function() {
		return _luzEstaLigada;
	};

	self.dispararAlarme = function() {
		if (_alarmeEstaDisparado)
			self.http.get('http://192.168.0.105:5000/alarme_desativado');
		else
			self.http.get('http://192.168.0.105:5000/alarme_disparando');

		_alarmeEstaDisparado = !_alarmeEstaDisparado;
	};

	self.escutarChamada = function() {
		self.http.get('http://192.168.0.105:5000/botao_chamada')
			.then(function(resposta) {
				console.log(resposta.data);

				// if (resposta.data === 'atenda')
					self.location.path('/app/chamada');
			});
	};

	return self;
})();