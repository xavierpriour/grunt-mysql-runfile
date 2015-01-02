'use strict';

module.exports = function(grunt) {

	var watchFiles = {
		jsFiles: ['gruntfile.js', 'tasks/**/*.js']
	};

	// Project configuration
	grunt.initConfig({

		// Reads the package file to use in config.
		pkg: grunt.file.readJSON('package.json'),

		jshint: {
			all: {
				src: watchFiles.jsFiles
			},
			options: {
				jshintrc: '.jshintrc'
			}
		},

		mysqlrunfile : {
			options : {
				connection: {
					host: process.env.WERCKER_MYSQL_HOST,
					user: process.env.WERCKER_MYSQL_USERNAME,
					password: process.env.WERCKER_MYSQL_PASSWORD,
					database: process.env.WERCKER_MYSQL_DATABASE,
					multipleStatements: true
				}
			},
			yourtarget1: {
				src: ['test/files1/**/*']
			},
			yourtarget2: {
				src: 'test/files2/01 - files2.sql'
			},
			yourtarget3: {
				src: ['test/files2/02 - files2.sql', 'test/files2/01 - files2.sql']
			}
		}
	});

	grunt.loadTasks('tasks');

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-clean');

	grunt.registerTask('test', ['mysqlrunfile:yourtarget1']);

	grunt.registerTask('default', ['jshint', 'test']);
};
