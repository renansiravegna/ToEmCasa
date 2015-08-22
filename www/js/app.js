angular.module('starter', ['ngCordova', 'ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
	$ionicPlatform.ready(function() {
		if (window.cordova && window.cordova.plugins.Keyboard) {
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
			cordova.plugins.Keyboard.disableScroll(true);

		}

		if (window.StatusBar) {
			StatusBar.styleDefault();
		}
	});
})

.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider.state('app', {
		url: '/app',
		abstract: true,
		templateUrl: 'templates/menu.html'
	})

	.state('app.locais', {
		url: '/locais',
		views: {
			'menuContent': {
				templateUrl: 'templates/locais.html',
				controller: 'LocaisCtrl'
			}
		}
	})

	.state('app.camera', {
		url: '/camera',
		views: {
			'menuContent': {
				templateUrl: 'templates/camera.html',
				controller: 'CameraCtrl'
			}
		}
	})

	.state('app.chamada', {
		url: '/chamada',
		views: {
			'menuContent': {
				templateUrl: 'templates/chamada.html',
				controller: 'ChamadaCtrl'
			}
		}
	});

	$urlRouterProvider.otherwise('/app/locais');
});