import path from 'path';
import webpack from 'webpack';
import memoryfs from 'memory-fs';

export default (config, options = {}) => {
	const compiler = webpack(config);
	
	compiler.outputFileSystem = new memoryfs();

	return new Promise((resolve, reject) => {
		compiler.run((err, stats) => {
			if (err) reject(err);

			resolve(stats);
		});
	});
}

