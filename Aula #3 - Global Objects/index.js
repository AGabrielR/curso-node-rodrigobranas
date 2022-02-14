//max = 10000;

//Se eu não usar VAR (ou LET OU CONST) se torna variável global
//global.max = 10000
//GLOBAL.max = 10000 (não é mais utilizado)
//root.max = 10000 (não é mais utilizado)

var serialGenerator = require('./serialGenerator');

console.log(serialGenerator.generate());