// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})


.config(['$stateProvider', '$urlRouterProvider', '$ionicConfigProvider', function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
	//tab for android
	//Modify the tabs of android display position! start
  $ionicConfigProvider.platform.ios.tabs.style('standard');
  $ionicConfigProvider.platform.ios.tabs.position('bottom');
  $ionicConfigProvider.platform.android.tabs.style('standard');
  $ionicConfigProvider.platform.android.tabs.position('standard');

  $ionicConfigProvider.platform.ios.navBar.alignTitle('center');
  $ionicConfigProvider.platform.android.navBar.alignTitle('center');

  $ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-thin-left');
  $ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');

  $ionicConfigProvider.platform.ios.views.transition('ios');
  $ionicConfigProvider.platform.android.views.transition('android');
  //Modify the tabs of android display position! end
  
  $stateProvider
    .state('tabs',{
      url:'/tab',
      templateUrl:'templates/tabs.html'
    })
    .state('tabs.first',{
      url:'/first',
      views:{
        'tab-home':{
          templateUrl:'templates/first.html'
        }
      }
    })
    .state('tabs.home',{
      url:'/home',
      views:{
        'tab-home':{
          templateUrl:'templates/first.html'
        }
      }
    })
    .state('tabs.about',{
      url:'/about',
      views:{
        'tab-about':{
          templateUrl:'templates/about.html'
        }
      }
    })
    .state('tabs.other',{
      url:'/other',
      views:{
        'tab-other':{
          templateUrl:'templates/other.html'
        }
      }
    })
		.state('second',{
      url:'/second',
      	templateUrl:'templates/second.html'
    })
		.state('third',{
      url:'/third',
      	templateUrl:'templates/third.html'
    })
    .state('range',{
      url:'/range',
          templateUrl:'templates/range.html'
    })
		.state('fourth',{
      url:'/fourth',
      	templateUrl:'templates/fourth.html'
    })
		.state('five',{
      url:'/five',
      	templateUrl:'templates/five.html'
    })
		.state('six',{
      url:'/six',
      	templateUrl:'templates/six.html'
    })
  	$urlRouterProvider.otherwise('/tab/home')
}])


