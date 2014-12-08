// main.js
'use strict';

// Register AngularJS module lbServices as a dependency
angular.module('arf-app',['lbServices']);
//.config();

/////////////////////////////////////////////////////////////////
// ONCE DOCUMENT IS LOADED...
//
jQuery(document).ready(function($){
	// Initialize socket.io client
	var socket = io();
	
	// Handle command submit
	$('.form-submit_cmd').submit(function(event) {
		event.preventDefault();
		// socket.emit('command',$(this).children('.submit_cmd-command').val());
		socket.emit('command', {
			cmd: $(this).children('.submit_cmd-command').val(),
			imp_id: $(this).children('.submit_cmd-command').attr("imp_id"),
			agent: $(this).children('.submit_cmd-command').attr("agent")
		});
	});
});