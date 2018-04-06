myApp.controller('question', function ($scope, $http, $rootScope) {
    let index = 0;
    let score = 0;
    $scope.Name = "Megha Jain";
    $scope.mobileNo = "8962299199";
    $scope.id = "A-101";
    $scope.password = "meghaj4091";
    $scope.Question = function () {
      $scope.show = true;
      $http.get("../Data/question.json")
        .then(function (response) {
          $scope.name = response.data.questions;
          $scope.index = index;
        });
    }
    $scope.next = function () {
      $http.get("../Data/question.json")
        .then(function (response) {
          $scope.name = response.data.questions;
          index++;
          $scope.index = index;
        });
 }
    $scope.previous = function () {
      $http.get("../Data/question.json")
        .then(function (response) {
          $scope.name = response.data.questions;
          index--;
          $scope.index = index;
        });
    }
    $scope.checkAnswer = function (index) {
      $scope.m = index;
      $scope.display = true;
      $rootScope.score = score;
      $http.get("../Data/question.json")
        .then(function (response) {
          var ans = $('input[name=answer]:checked').val();
          if (ans == response.data.questions[index].options[response.data.questions[index].answer - 1]) {
            score++;
            $rootScope.score = score;
          }
          $rootScope.answer = $rootScope.score;
          $rootScope.avg = ($rootScope.score * 100) / 10;
          if ($rootScope.avg >= 60) {
            $rootScope.selected = "yes";
          } else {
            $rootScope.selected = "No"
          }
        });
      if ($scope.m == 9) {
        $scope.display = false;
        alert(" quiz completed ... ");
      }
      if ($scope.m == -1) {
        $scope.display = false;
      }
    }
   let lastChecked = null
    $scope.radioCheckUncheck = function (event) {
      if (event.target.value === lastChecked) {
        console.log("hello");
        delete $scope.forms.selected;
        lastChecked = null
  
      }
    }
  
   
  
  });
  