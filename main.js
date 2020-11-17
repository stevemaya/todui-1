const readline = require('readline');


const interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const menu = `
Your options are:

1. Add a todo.
2. Remove a todo.
3. Remove all completed todos.
4. Toggle a todo's completion status.
5. Toggle a todo's priority.
6. Quit.

`

const handleMenu = function (choice) {
  if (choice === '1') {
    console.log('You chose: Add a todo');
    console.log('Type in 6 to quit');
    interface.question(menu, handleMenu);
  } else if (choice === '2') {
    console.log('You chose: Remove a todo');
    console.log('Type in 6 to quit');
    interface.question(menu, handleMenu);
  } else if (choice === '3') {
    console.log('You chose: Remove all completed todos');
    console.log('Type in 6 to quit');
    interface.question(menu, handleMenu);
  } else if (choice === '4') {
    console.log('You chose: Toggle a todos completion status.')
    console.log('Type in 6 to quit');
    interface.question(menu, handleMenu);
  } else if (choice === '5') {
    console.log('You chose: Toggle a todos priority');
    console.log('Type in 6 to quit');
    interface.question(menu, handleMenu);
  } else {
    console.log('Type 6 to quit app');
    interface.close();
  }
}

interface.question(menu, handleMenu);

