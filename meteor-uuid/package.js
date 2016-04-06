Package.describe({
    name: 'rwatts:meteor-uuid',
    version: '0.2.0',
    // Brief, one-line summary of the package.
    summary: 'Easily generate a UUID on the client or server.',
    // URL to the Git repository containing the source code for this package.
    git: 'https://github.com/rwatts3/meteor-uuid',
    // By default, Meteor will default to using README.md for documentation.
    // To avoid submitting documentation, set this field to null.
    documentation: 'README.md'
});

Package.onUse(function(api) {
    api.versionsFrom('1.3.1');
    api.use('ecmascript');
	api.use('templating', 'client');
	
	api.addFiles('lib/uuid_helpers.js', 'client');
	
	api.export('uuid', ['client', 'server']);
    api.mainModule('lib/uuid.js');
});

Package.onTest(function(api) {
    api.use('ecmascript');
    api.use('mike:mocha-package');
    api.use('rwatts:meteor-uuid');
    api.mainModule('tests/uuid-tests.js');
});