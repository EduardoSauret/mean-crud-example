import angular from 'angular';
import _ from 'lodash';

const todoFactory = angular.module('app.todoFactory', [])

.factory('todoFactory', ($http) => {

	function getTasks($scope) {
		$http.get('/todos').success( response => {
			$scope.todos = response.todos;
		});
	}

	function createTask($scope, params) {
		$http.post('/todos', {
			task: $scope.createTaskInput,
			isCompleted: false,
			isEditing: false,
		}).success(response => {
			getTasks($scope);
			$scope.createTaskInput = '';
		});
// 		params.createHasInput = false;
//      $scope.createTaskInput = ''; 
	}

	function updateTask(todo) {
		todo.task = todo.updatedTask;
		todo.isEditing = false;
	}

	function deleteTask($scope, todoToDelete) {
		_.remove($scope.todos, todo => todo.task === todoToDelete.task);
	}

	function watchCreateTaskInput(params, $scope, val) {
		const createHasInput = params.createHasInput;

        if (val && !createHasInput) {
            $scope.todos.push({ task: val, isCompleted: false});
            params.createHasInput = true;
        } else if (val && createHasInput) {
            $scope.todos[$scope.todos.length -1].task = val;
        } else if (!val && createHasInput) {
            $scope.todos.pop()
            params.createHasInput = false;
        }
	}

	return {
		createTask,
		updateTask,
		deleteTask,
		watchCreateTaskInput,
		getTasks
	};
});  

export default todoFactory;

