angular.module('starter.controllers', [])

.controller('LocaisCtrl', function($scope, $http, $location) {
	window.central.http = $http;
	window.central.location = $location;

	window.central.escutarChamada();
	console.log(1);
	$scope.visualizar = function() {
		$location.path('/app/camera');
	};
})

.controller('CameraCtrl', function($scope, $timeout, $cordovaFileTransfer, $http, $location) {
	window.central.http = $http;
	window.central.location = $location;

	$scope.falar = function() {
		window.microfone.gravar(falaCompleta);
	};

	$scope.pararDeFalar = function() {
		window.microfone.parar();
	};

	function falaCompleta() {
		window.microfone.exibirUltimoAudio();
		window.sandbox.selecionar('div.parar-de-falar').removerClass('parar-de-falar').adicionarClass('falar');

		var server = 'http://192.168.0.150:5000/';
		var arquivo = '/storage/emulated/0/' + window.microfone.obterUltimoAudio();
		var option = {};
		var aceitarCertificados = true;

		console.log(arquivo);

		$cordovaFileTransfer.upload(server, arquivo, option, aceitarCertificados).then(function(result) {
			console.log('Arquivo enviado com sucesso');
		}, function(err) {
			console.log('Upload falhou');
			console.log(err);
		});
	}

	$scope.abrirPortao = function() {
		window.central.abrirPortao();
	};

	$scope.ligarLuzes = function() {
		window.central.alternarLuz();
	};

	$scope.dispararAlarme = function() {
		window.central.dispararAlarme();
	};
})

.controller('ChamadaCtrl', function($scope, $location) {

	$scope.atender = function() {
		$location.path('/app/camera');
		// Desfazer chamada
	};

	$scope.negar = function() {
		$location.path('/app/locais');
		// Desfazer chamada
	};
});