angular.module('starter.controllers', [])

.controller('CameraCtrl', function($scope, $timeout, $cordovaFileTransfer, $http) {
	window.central.http = $http;

	$scope.atender = function($event) {
		var estadoAtual = $event.currentTarget.className;
		var video = document.getElementById('video');

		if (estadoAtual.indexOf('atendido') > -1) {
			video.pause();
			$event.currentTarget.className = estadoAtual.replace('atendido', 'atender');
		} else {
			video.play();
			$event.currentTarget.className = estadoAtual.replace('atender', 'atendido');
		}
	};

	$scope.falar = function() {
		window.microfone.gravar(falaCompleta);
		window.sandbox.selecionar('div.falar').removerClass('falar').adicionarClass('parar-de-falar');
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

		if (window.central.luzEstaLigada())
			window.sandbox.selecionar('div.ligar-as-luzes').removerClass('ligar-as-luzes').adicionarClass('luzes-ligadas');
		else
			window.sandbox.selecionar('div.luzes-ligadas').removerClass('luzes-ligadas').adicionarClass('ligar-as-luzes');
	};
})

.controller('ConfigCtrl', function($scope) {})

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

	// With the new view caching in Ionic, Controllers are only called
	// when they are recreated or on app start, instead of every page change.
	// To listen for when this page is active (for example, to refresh data),
	// listen for the $ionicView.enter event:
	//$scope.$on('$ionicView.enter', function(e) {
	//});

	// Form data for the login modal
	$scope.loginData = {};

	// Create the login modal that we will use later
	$ionicModal.fromTemplateUrl('templates/login.html', {
		scope: $scope
	}).then(function(modal) {
		$scope.modal = modal;
	});

	// Triggered in the login modal to close it
	$scope.closeLogin = function() {
		$scope.modal.hide();
	};

	// Open the login modal
	$scope.login = function() {
		$scope.modal.show();
	};

	// Perform the login action when the user submits the login form
	$scope.doLogin = function() {
		console.log('Doing login', $scope.loginData);

		// Simulate a login delay. Remove this and replace with your login
		// code if using a login system
		$timeout(function() {
			$scope.closeLogin();
		}, 1000);
	};
})

.controller('PlaylistsCtrl', function($scope) {
	$scope.playlists = [{
		title: 'Reggae',
		id: 1
	}, {
		title: 'Chill',
		id: 2
	}, {
		title: 'Dubstep',
		id: 3
	}, {
		title: 'Indie',
		id: 4
	}, {
		title: 'Rap',
		id: 5
	}, {
		title: 'Cowbell',
		id: 6
	}];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {});