Grunt MySQL Runfile
===================
> tool for executing sql files on mysql database

## Getting Started
This plugin requires Grunt '~0.4.5'

Install this grunt plugin next to your project's [grunt.js gruntfile][getting_started] with:

```shell
npm install grunt-mysql-runfile --save-dev
```

Then add this line to your project's `grunt.js` gruntfile:

```js
grunt.loadNpmTasks('grunt-mysql-runfile');
```

## The "mysqlrunfile" task

### Overview
In your project's Gruntfile, add a section named `mysql_runfile` to the config.

```js
grunt.initConfig({
	mysqlrunfile: {
		options: {
			connection: {
				host: 'example.com',
				username: 'exampleuser',
				password: 'examplepassword',
				database: 'exampledatabase',
				multipleStatements: true
			},
			yourtarget1: {
				src: ['databasefiles/**/*']
			},
			yourtarget2: {
				src: ['file1.sql', 'file2.sql']
			}
			yourtarget3: {
				src: 'file3.sql'
			}
		}
	}
})
```
### Options

#### options.connection
Type: `Object`

A database connection config block. This object is directly passed as-is to the database connection, so you can include any options that the layer supports. Any options that is possible by `createConnection` in [node-mysql](https://github.com/felixge/node-mysql/#connection-options) is also possible in mysql-runfile.

#### options.connection.multipleStatements
Type: `Boolean`

Needs to be true if you want to run sql files with multiple statements.

#### [targetname].src
Type: `String` or `String[]`

The location of the files to run on the sql server. You can give full filenames or use glob patterns to select the files you want to run.

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
- v0.2.1 - Added README
- v0.2.0 - Bug fix for running add unix environments.
- v0.1.0 - Initial release.

## License
Licensed under the MIT license.

## Author
Martyn de Vries
