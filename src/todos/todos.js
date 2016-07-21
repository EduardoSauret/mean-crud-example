export default function ($scope) {
	$scope.todos = [
	{
		task: 'do dishes',
		isCompleted: false
	},
	{
		task: 'walk the dog',
		isCompleted: true
	}
	];

	$scope.checkboxClick = todo => {
		todo.isCompleted = !todo.isCompleted;
		if (todo.isCompleted === true ) {
			console.log('Checkbox selected ');
		} else if (todo.isCompleted === false) {
			console.log('Checkbox deselected ');
		}
	};
}