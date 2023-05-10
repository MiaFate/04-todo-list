require('colors');

const mostrarMenu = () => {

  return new Promise(resolve => {

    console.clear();
    console.log('=================================='.brightGreen);
    console.log('         Choose an option:        '.brightGreen);
    console.log('==================================\n'.brightGreen);

    console.log(`${'1.'.brightMagenta} New task`);
    console.log(`${'2.'.brightMagenta} Tasks list`);
    console.log(`${'3.'.brightMagenta} Completed tasks list`);
    console.log(`${'4.'.brightMagenta} Incomplete tasks list`);
    console.log(`${'5.'.brightMagenta} Complete task(s)`);
    console.log(`${'6.'.brightMagenta} Delete task`);
    console.log(`${'0.'.brightMagenta} Exit\n`);

    const readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout
    });

    readline.question('Choose an option: ', (opt) => {
      readline.close();
      resolve(opt);
    });

  });


};

const pausa = () => {
  return new Promise(resolve => {

    const readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout
    });

    readline.question(`\nPresione ${'ENTER'.brightGreen} para continuar\n`, (opt) => {
      readline.close();
      resolve();
    });

  });

};

module.exports = {
  mostrarMenu,
  pausa
}
