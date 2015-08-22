window.sandbox = (function() {
	var self = {};
	var _selecao;

	self.selecionar = function(query) {
		_selecao = document.querySelectorAll(query);
		return self;
	};

	self.exibir = function() {
		self.map(function(elemento) {
			elemento.className = elemento.className.replace(/invisivel/gi, '');
		});
		return self;
	};

	self.esconder = function() {
		self.map(function(elemento) {
			elemento.className += ' invisivel';
		});
		return self;
	};

	self.adicionarClass = function(nomeDaClass) {
		self.map(function(elemento) {
			elemento.className += ' ' + nomeDaClass;
		});
		return self;
	};

	self.removerClass = function(nomeDaClass) {
		self.map(function(elemento) {
			elemento.className = elemento.className.replace(' ' + nomeDaClass, '');
			elemento.className = elemento.className.replace(nomeDaClass, '');
		});
		return self;
	};

	self.map = function(callback) {
		for (var index = 0; index < _selecao.length; index++)
			callback(_selecao[index]);

		return self;
	};

	return self;
})();