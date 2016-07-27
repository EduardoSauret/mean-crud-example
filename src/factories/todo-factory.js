import angular from 'angular';

const todoFactory = angular.module('app.todoFactory', [])

.factory('todoFactory', () => {
	function createTask($scope, params) {
		params.createHasInput = false;
        $scope.createTaskInput = ''; 
	}

	return {
		createTask
	};
});  

export default todoFactory;

