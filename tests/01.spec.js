import compiler from './compiler.js';
var fs = require('fs');
var path = require('path');
var protoLoader = require('../index.js');

test('Conver protobuff to JSON', async () => {
	const stats = await compiler({
		context: __dirname,
		entry: '../example/person.proto',
		output: {
			path: path.resolve(__dirname),
			filename: 'bandle.js'
		},
		module: {
			rules: [{
				test: /\.proto$/,
				use: {
					loader: path.resolve(__dirname, '../index.js'),
				}
			}]
		}
	});
	const output = stats.toJson().modules[0].source;
	console.info(output);
	
	expect(true).toBe(true);
});

