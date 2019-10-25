#!/usr/bin/env node

const {spawnSync, execSync} = require('child_process');
const log = require('fancy-log');
const chalk = require('chalk');
const path = require('path');
const fs = require('fs');

const CORE_JS_VERSIONS = ['2.6.10', '3.0.0', '3.2.1', '3.3.4'];

const PACKAGE_JSON_PATH = path.resolve(__dirname, 'package.json');

function updateDependencies(updater) {
	const packageJson = JSON.parse(fs.readFileSync(PACKAGE_JSON_PATH));

	updater(packageJson.dependencies);

	fs.writeFileSync(PACKAGE_JSON_PATH, JSON.stringify(packageJson, null, 4));

	execSync('npm install');
}

function runIteration(coreJsVersion, shouldPolyfill) {
	spawnSync(
		path.resolve(__dirname, 'run-iteration.js'),
		shouldPolyfill ? [`--coreJsVersion=${coreJsVersion}`] : [],
		{
			stdio: 'inherit',
			shell: true
		}
	);
}

CORE_JS_VERSIONS.forEach((coreJsVersion) => {
	log(`Installing core-js version ${coreJsVersion}...`);
	updateDependencies((dependencies) => {
		dependencies['core-js'] = coreJsVersion;
	});

	[true, false].forEach((shouldPolyfill) => {
		log(`Running benchmark with polyfill ${shouldPolyfill ? 'enabled' : 'disabled'}...`);

		runIteration(coreJsVersion, shouldPolyfill);
	})
})

log(`Uninstalling core-js...`);
updateDependencies((dependencies) => {
	delete dependencies['core-js'];
});

log(chalk.green('All done!'));
