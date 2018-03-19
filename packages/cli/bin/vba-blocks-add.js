const { default: add } = require('../lib/actions/add');

const help = `
Add a dependency to the project.

Usage: vba-blocks add <name> [options]

Arguments:
  <name>          package-name , package-name@1.2.3, package-name@tag, etc.

Options:
  --path=PATH     Path to local dependency (relative to project)
  --git=URL       Path to git repository (<git remote url>#<branch/commit/tag>)
  -D, --dev       Save as development dependency
  -O, --optional  Make dependency optional
  -E, --exact     Lock dependency to exact version
  -T, --tilde     Lock dependency to minor version`;

module.exports = async args => {
  if (args.help) {
    console.log(help);
    return;
  }

  await add(args);
};
