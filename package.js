Package.describe({
  name: 'east5th:package-scan',
  version: '0.0.1',
  summary: 'Looks through your installed package list looking for dangerous packages.',
  git: 'https://github.com/East5th/package-scan',
  documentation: 'README.md',
  debugOnly: true
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('lib/package-scan.js');
  api.addFiles('data/alerts.json', 'server', {isAsset: true});
});