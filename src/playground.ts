// Use this file to interactively try out TypeScript
// Details: https://github.com/rauschma/nodejs-type-stripping#using-srcplaygroundts-as-a-simple-typescript-playground

import pkg from '../package.json' with {type: 'json'};

console.log('Version of this package: ' + pkg.version);
console.log('YES');
