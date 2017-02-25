var myPTApp = angular.module('myPTApp', []);

myPTApp.controller('GoalController', ['$scope', function($scope){

	$scope.message = 'Here is your goal';

	$scope.plan = [
		{
			name:'finish this app', 
			progress:2
		},
		{
			name:'add it to resume', 
			progress:2
		},
		{
			name:'get a job', 
			progress:2
		}
	];

}]);
