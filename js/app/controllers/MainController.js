function MainController() {
    this.name = 'Steve Jobs';
}

function addNumbers(numberOne, numberTwo) {
  return +numberOne + +numberTwo;
}

angular
    .module('app')
    .controller('MainController', MainController);