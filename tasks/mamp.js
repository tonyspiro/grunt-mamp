/*
 * grunt-mamp
 * https://github.com/tonyspiro/grunt-mamp
 *
 * Copyright (c) 2015 Tony Spiro
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

	grunt.registerMultiTask('mamp', 'Grunt MAMP allows you to configure, start and stop your MAMP server from the terminal.', function() {
    
    var target = this.target;
	  var options = this.data.options;
	  var site_full_path = options.site_full_path;
	  var port = options.port;
	  
	  if(target == 'configserver'){
	  	var command = "sed -e 's%$path%" + site_full_path + "%g' -e 's%$port%" + port + "%g' node_modules/grunt-mamp/httpd.conf-template > /Applications/MAMP/conf/apache/httpd.conf";
	  	console.log('Configuring mamp server to point to ' + site_full_path + ' at http://localhost:'+ port);
	  }

	  if(target == 'startserver'){
	  	var command = '/Applications/MAMP/bin/start.sh';
	  	console.log('Starting mamp server at http://localhost:'+ port);
	  }

	  if(target == 'stopserver'){
	  	var command = '/Applications/MAMP/bin/stop.sh';
	  	console.log('Stopping mamp server');
	  }

	  var cp = require('child_process');
		cp.exec(command, '', '');
	
	});

};
