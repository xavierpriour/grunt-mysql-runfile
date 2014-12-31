'use strict';

module.exports = function(grunt) {

	// Project configuration
	grunt.initConfig({

		// Reads the package file to use in config.
		pkg: grunt.file.readJSON('package.json'),

		mysqlrunfile : {
			options : {
				connection: {
					host: 'localhost',
					user: 'mysqlrunfiletest',
					password: 'mysqlrunfiletest',
					database: 'mysqlrunfiletest',
					multipleStatements: true
				}
			},
			runfiles1 : {
				src: 'test/files1/**/*.sql'
			},
			runfiles2 : {
				src: ['test/files2/**/*.sql', 'test/files22/**/*.sql']
			},
			runfiles3 : {
				src: ['test/files3/**/*.sql']
			}
		}
	});

	grunt.loadTasks('tasks');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-clean');

	grunt.registerTask('test', ['mysqlrunfile:runfiles1']);

};
