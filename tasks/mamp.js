/*
 * grunt-mamp
 * https://github.com/tonyspiro/grunt-mamp
 *
 * Copyright (c) 2015 Tony Spiro
 * Licensed under the MIT license.
 */

'use strict';

var fs = require('fs');
var cp = require('child_process');
var cwd = require('path');

module.exports = function(grunt) {

	grunt.registerMultiTask('mamp', 'Grunt MAMP allows you to configure, start and stop your MAMP server from the terminal.', function() {
    
    var target = this.target;
	  var options = this.data.options;

	  var user = options.user;
	  var port = options.port;
	  var path = options.path;
	 	if(options.pathRelative){
	 		path = cwd.resolve() + "/" + options.path;
	 	}
	 	var command = "";
	  
	  if(target === 'configserver'){
			if (fs.existsSync(path)) {
			 	command = "sed -e 's%$path%" + path + "%g' -e 's%$port%" + port + "%g' -e 's%$user%" + user + "%g' node_modules/grunt-mamp/httpd.conf-template > /Applications/MAMP/conf/apache/httpd.conf";
	  		console.log('Configuring mamp server to point to ' + path + ' at http://localhost:'+ port);
			} else {
				grunt.log.error('Site full path not found.');
				return false;
			}

	  } else if (target === 'startserver'){
	  	command = '/Applications/MAMP/bin/start.sh';
	  	console.log('Starting mamp server at http://localhost:'+ port);

	  } else if (target === 'stopserver'){
	  	command = '/Applications/MAMP/bin/stop.sh';
	  	console.log('Stopping mamp server');
	  	
	  }
	  
		cp.exec(command, '', '');
	
	});

};
