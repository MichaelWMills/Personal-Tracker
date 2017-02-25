var myPTApp = angular.module('myPTApp', []);

myPTApp.controller('GoalController', ['$scope', function($scope){

	$scope.message = 'Here is your goal';

	$scope.goals = ['finish this app', 'add it to resume', 'get a job'];

}]);
