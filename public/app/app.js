(function(){
	var app = angular.module("app", ['ngRoute']);

	app.config(["$logProvider", function($logProvider){
		$logProvider.debugEnabled(true);
	}]);

	app.config(["$routeProvider", function($routeProvider){

		$routeProvider
			.when("/", {
				controller: "HomeController",
				controllerAs: "home",
				templateUrl: "app/templates/home.html"
			})

	}]);
})()