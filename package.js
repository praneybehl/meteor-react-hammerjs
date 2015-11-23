Package.describe({
  name: 'praneybehl:react-hammerjs',
  version: '0.4.3',
  summary: 'ReactJS - HammerJS integration. Support touch events in your Meteor app.',
  git: 'https://github.com/praneybehl/meteor-react-hammerjs',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.use('react@0.1.13');
  api.use('cosmos:browserify@0.8.3', 'client');
  api.addFiles('package.browserify.js', 'client');
  api.addFiles('package.browserify.options.json', 'client');
  api.export('Hammer');
});


Npm.depends({
  "react-hammerjs": "0.4.2",
  "exposify": "0.5.0"
});
