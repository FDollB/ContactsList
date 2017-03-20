var app = angular.module('ContactsApp',[]);

app.controller("MainController", ['$scope', '$http', function($scope, $http) {
	$http.get('/contacts').then(
	function(response) {
		$scope.contacts = response.data;
	}, 
	function(response) {
		console.log("Error " + response);
	});

	$scope.SelectContact = function(contact){
		$scope.selectedContact = contact;
		window.scrollTo(0, 0);
		if ($(window).width() < 767) {
	        //$('#contacts').replaceWith($('#details'));
	        $('#contacts').addClass("hidden-xs");
	        $('#details').removeClass("hidden-xs");
		}
	}

	$scope.BackToContacts = function(){
		$scope.selectedContact = null;
		window.scrollTo(0, 0);
		$('#contacts').removeClass("hidden-xs");
	    $('#details').addClass("hidden-xs");
	}

	$(".backup-picture").on("error", function(){
        $(this).attr('src', './resources/no-image.png');
    });

}]);