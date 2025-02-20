#!/usr/bin/env -S node --disable-warning=ExperimentalWarning

import { parseArgs, styleText } from 'node:util';
import pkg from '../package.json' with { type: 'json' };
import { twice, type TagFunction } from './util.ts';

function printHelp(): void {
  const BIN_NAME = Object.keys(pkg.bin)[0];

  const {log} = console;
  
  const b: TagFunction<string> = (templateStrings, ...substitutions) => (
    styleText('bold', String.raw(templateStrings, ...substitutions))
  );
  const u: TagFunction<string> = (templateStrings, ...substitutions) => (
    styleText('underline', String.raw(templateStrings, ...substitutions))
  );
  
  log(b`${BIN_NAME} ${u`text`}`);
  log(`Print ${u`text`} twice`);
  log();
  log(`Options:`);
  log(`${b`--help -h`}    Print help`);
  log(`${b`--version -v`} Print version`);
}

function main(): void {
  const options = {
    version: {
      type: 'boolean',
      short: 'v',
    },
    help: {
      type: 'boolean',
      short: 'h',
    },
  } as const;
  const {
    values,
    positionals,
  } = parseArgs({ options, allowPositionals: true });

  if (values.version) {
    console.log(`${pkg.name} ${pkg.version}`);
    return;
  }
  if (values.help) {
    printHelp();
    return;
  }

  if (0 in positionals) {
    console.log(twice(positionals[0]));
  } else {
    printHelp();
  }
}

main();
