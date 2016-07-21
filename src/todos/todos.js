export default function($scope) {
    let params = {
        createHasInput: false
    }

    $scope.todos = [{
        task: 'do dishes',
        isCompleted: false
    }, {
        task: 'walk the dog',
        isCompleted: true
    }];

    $scope.checkboxClick = todo => {
        todo.isCompleted = !todo.isCompleted;
        if (todo.isCompleted === true) {
            console.log('Checkbox selected ');
        } else if (todo.isCompleted === false) {
            console.log('Checkbox deselected ');
        }
    };

    $scope.$watch('createTaskInput', val => {
        if (!val && params.createHasInput) {
            $scope.todos.pop();
            params.createHasInput = false;
        } else if (val && !params.createHasInput) {
            $scope.todos.push({ task: val, isCompleted: false });
            params.createHasInput = true;
        } else if (val && params.createHasInput) {
        	$scope.todos[$scope.todos.lenght - 1].task = val;
        }

    });


}
