window.microfone = (function() {
	var self = {};
	var _ultimoAudio;
	var _mediaAtiva;

	self.gravar = function(callbackDeSucesso) {
		_ultimoAudio = new Date().getTime() + ".wav";
		_mediaAtiva = criarMedia(_ultimoAudio, callbackDeSucesso);
		_mediaAtiva.startRecord();
	};

	self.parar = function() {
		_mediaAtiva.stopRecord();
	}

	self.exibirUltimoAudio = function() {
		var media = criarMedia(_ultimoAudio);
		media.play();
	};

	self.obterUltimoAudio = function() {
		return _ultimoAudio;
	};

	function criarMedia(nomeDoAudio, callbackDeSucesso) {
		return new Media(nomeDoAudio, function() {
			sucesso(callbackDeSucesso);
		}, falha);
	}

	function sucesso(callback) {
		if (callback)
			callback();

		console.log("Sucesso na operação com media");
	}

	function falha(err) {
		console.log("Falha ao gravar o audio");
		console.log(err);
	}

	return self;
})();