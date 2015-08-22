// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ngCordova', 'ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
	$ionicPlatform.ready(function() {
		// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
		// for form inputs)
		if (window.cordova && window.cordova.plugins.Keyboard) {
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
			cordova.plugins.Keyboard.disableScroll(true);

		}
		if (window.StatusBar) {
			// org.apache.cordova.statusbar required
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

	$urlRouterProvider.otherwise('/app/chamada');
});