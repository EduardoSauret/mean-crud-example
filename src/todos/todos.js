export default function($scope) {
    let params = {
        createHasInput: false
    };

    $scope.todos = [{
        task: 'do dishes',
        isCompleted: false,
        isEditing: false
    }, {
        task: 'walk the dog',
        isCompleted: true,
        isEditing: false
    }];

    $scope.onCompletedClick = todo => {
        todo.isCompleted = !todo.isCompleted;
        if (todo.isCompleted === true) {
            console.log('Checkbox selected ');
        } else if (todo.isCompleted === false) {
            console.log('Checkbox deselected ');
        } 
    };

    $scope.onEditClick = todo => {
        todo.isEditing = true;
    }

    $scope.onCancelClick = todo => {
        todo.isEditing = false;
    }

    $scope.createTask = () => {
        params.createHasInput = false;
        $scope.createTaskInput = '';
    };

    $scope.$watch('updatedTask', val => {

    });


    $scope.$watch('createTaskInput', val => {
        if (val && !params.createHasInput) {
            $scope.todos.push({ task: val, isCompleted: false});
            params.createHasInput = true;
        } else if (val && params.createHasInput) {
            $scope.todos[$scope.todos.length -1].task = val;
        } else if (!val && params.createHasInput) {
            $scope.todos.pop()
            params.createHasInput = false;
        }

    });


}
