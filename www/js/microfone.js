window.microfone = (function() {
	var self = {};
	var _ultimoAudio;
	var _mediaAtiva;

	self.gravar = function() {
		_ultimoAudio = new Date().getTime() + ".wav";
		_mediaAtiva = criarMedia(_ultimoAudio);
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

	function criarMedia(nomeDoAudio) {
		return new Media(nomeDoAudio, sucesso, falha);
	}

	function sucesso() {
		console.log("Audio gravado com sucesso");
	}

	function falha() {
		console.log("Falha ao gravar o audio");
	}

	return self;
})();