'use strict';

var Q = require('q'),
	fs = require('fs'),
	_ = require('lodash'),
	mysql = require('mysql');

exports.init = function(grunt, options)
{
	var exports = {},
		connection;

	exports.connect = function() {
		var deferred = Q.defer();

		grunt.log.writeln('MySQL: Connecting to server...');

		connection = mysql.createConnection(options.connection);

		connection.connect(function(err) {
			if (err) {
				grunt.fatal('Unable to connect to database server: ', err);

				deferred.reject();
				return;
			}

			deferred.resolve();
		});

		return deferred.promise;
	};

	exports.query = function(content) {
		var deferred = Q.defer();

		connection.query(content, function(err) {
			if(err) {
				grunt.fatal(err.message);
				deferred.reject();
				return;
			}

			deferred.resolve();
		});

		return deferred.promise;
	};

	return exports;
};
