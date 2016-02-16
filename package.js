Package.describe({
  name: 'frpz:dns',
  version: '1.0.0',
  // Brief, one-line summary of the package.
  summary: 'Meteor smart package for dns node.js package',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/frpz/dns',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.1');
  api.addFiles('dns.js', ["server"]);
  api.export('dns');
});
