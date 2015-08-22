window.central = (function() {
	var self = {};
	_luzEstaLigada = false;

	self.http = undefined;

	self.abrirPortao = function() {
		self.http.get('http://192.168.0.150:5000/abrir_portao');
	};

	self.alternarLuz = function() {
		_luzEstaLigada = !_luzEstaLigada;

		if (_luzEstaLigada)
			self.http.get('http://192.168.0.150:5000/desligar_luz');
		else
			self.http.get('http://192.168.0.150:5000/ligar_luz');

		console.log('Estado da luz: ', _luzEstaLigada);
	};

	self.luzEstaLigada = function() {
		return _luzEstaLigada;
	};

	return self;
})();