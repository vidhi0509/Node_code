// Modules - Encapsulated code (only share minimum)
// CommonJs, every file is a module (by default)

const names = require('./3-modules1');
const sayHi = require('./4-modules2');
const data = require('./5-alternative_export')
require('./6-mind_grenade')
sayHi('susan')
sayHi(names.john)
sayHi(names.peter)