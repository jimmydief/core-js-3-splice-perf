#!/usr/bin/env node

const Benchmark = require("benchmark");
const yargs = require("yargs");

const argv = yargs
	.options({
		coreJsVersion: {
			describe: `Version of core-js to use. Won't be used if not specified.`,
			type: 'string'
		}
	})
	.strict().argv;


if (argv.coreJsVersion) {
	require(parseFloat(argv.coreJsVersion) >= 3 ? 'core-js/features/symbol' : 'core-js/fn/symbol');
}

const data = [];
for (let i = 0; i < 30000; i++) {
	data.push({key: i});
}

new Benchmark.Suite()
	.add('splice', () => {
		for (let i = 10; i < 2000; i++) {
			data.splice(i, 1);
		}
	})
	.on('cycle', function(event) {
		console.log(String(event.target));
	})
	.run();
