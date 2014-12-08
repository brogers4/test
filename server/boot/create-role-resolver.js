// create-role-resolver.js
var debug = require('debug')('boot:create-role-resolver');

module.exports = function(app) {
	var Role = app.models.Role;
	Role.registerResolver('familyMember', function(role, context, cb) {
		function reject() {
			console.log("Rejecting role");
			process.nextTick(function() {
				cb(null,false);
			});
		}
		// TODO: Validate if role appropriate
		console.log("Approving role");
		cb(null,true);
	});
};