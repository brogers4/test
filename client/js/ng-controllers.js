'use strict';

angular
	.module('arf-app')
	.controller('ControllerCtrl', ['$scope', 'Controller', function($scope, Controller) {
		$scope.controllers = [];
		function getControllers() {
			// console.log("Getting controllers for USER ID: "+myUserID+" and token: "+myToken);
			// console.log("== Expected number: "+myControllers.length);
			for(var i=0; i<myControllers.length; i++){
				// console.log("== Looking for controller "+myControllers[i].id);
				Controller.findById({id: myControllers[i].id, access_token: myToken}).$promise.then(function(results){
					// console.log("Found controllers: "+JSON.stringify(results));
					$scope.controllers.push(results);
				});
			}
		}
		getControllers();
		
		$scope.commands = ["Hello World!","This is a test.","Conquer the world."];
		
		$scope.addController = function() {
			console.log("In addController...");
		};
		
		$scope.removeController = function(controller) {
			console.log("In removeController...");
		};
		
		$scope.addCommand = function() {
			console.log("In addCommand...");
			$scope.commands.push($scope.commandText);
			$scope.commandText = '';
		};
		
		$scope.blinkUp = function(controller) {
			console.log("Blinking up...");
			console.log("  >> Controller: "+controller.id);
			console.log("  >> Imp Agent: "+controller.agent);
			console.log("  >> Impee: "+controller.imp_id);
			$.ajax({
				url: controller.agent+"/blinkup",
				type: 'post',
				data: {
					owner: myUserID,
					controller_name: controller.name,
					controller_id: controller.id,
					imp_id: controller.imp_id
				},
				headers: {
					"ARF-Controller-ID": controller.id
				},
				dataType: 'text',
				success: function(data) {
					console.log("Blinkup Successful: "+data);
				}
			});
		}
	}]);