// Ionic Starter App
// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])


    .config(function($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('signin', {
                url: '/sign-in',
                templateUrl: 'templates/sign-in.html',
                controller: 'SignInCtrl'
            })
            .state('welcome', {
                url: '/welcome',
                templateUrl: 'templates/welcome.html'
            })

            .state('forgotpassword', {
                url: '/forgotpassword',
                templateUrl: 'templates/forgotpassword.html'
            })

        $urlRouterProvider.otherwise('/sign-in');
    })





    .controller('SignInCtrl', function($scope, $state) {

        $scope.signIn = function(user) {
            console.log('Sign-In', user);
            $state.go('welcome');
        };

        $scope.signUp = function(user) {
            console.log('Sign-In', user);
            $state.go('welcome');
        };

        $scope.forgotPassword = function(user) {
            console.log('Sign-In', user);
            $state.go('forgotpassword');
        };
    })





/*
    .run(function($ionicPlatform) {
        $ionicPlatform.ready(function() {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if(window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if(window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
    })





*/


















































/*
    app.config(function($stateProvider, $urlRouterProvider)
    {
      $urlRouterProvider.otherwise('/signin')

      $stateProvider.state('home', {
            url: '/sign-in',
            templateUrl: 'templates/sign-in.html'
          })


      $stateProvider.state('help',{
        url: '/help',
        views: {
          help: {
            templateUrl: 'view2.html'
          }
        }
      })
    })




    .run(function($ionicPlatform) {
      $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if(window.cordova && window.cordova.plugins.Keyboard) {
          cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if(window.StatusBar) {
          StatusBar.styleDefault();
        }
      });
    })

        */