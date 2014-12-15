'use strict';

var _ = require('lodash'),
	fileutils = require('./lib/fileutils');

module.exports = function(grunt) {

	grunt.registerMultiTask('mysqlrunfile', 'Runs given sql files.', function() {

		var drivers = ['simulation', 'mysql'];

		var options = this.options({
			driver: 'simulation',
			db: null,
			connection: {
				host: 'localhost',
				user: '',
				password: '',
				database: 'mysqlrftest'
			}
		});

		if(!_.contains(drivers, options.driver))
		{
			grunt.log.error('Invalid driver. Supported values are: ', grunt.log.wordlist(drivers));
			return false;
		}

		grunt.verbose.writeln('Loading driver ' + options.driver);
		var connection = require('./lib/' + options.driver).init(grunt, options);


		
	});
};
