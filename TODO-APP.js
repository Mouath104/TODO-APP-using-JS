const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function menu() {
  console.log("***************************\n" +
    "Welcome to JS TODO-APP\n" +
    "***************************\n" +
    "Select an action:\n" +
    "1) Add a new task\n" +
    "2) List all tasks\n" +
    "3) List completed tasks\n" +
    "4) Mark the task as done\n" +
    "5) Delete a task\n" +
    "6) Sort tasks by the due date\n" +
    "7) Sort tasks by priority\n" +
    "8) Clear all tasks\n" +
    "9) Quit\n" +
    "***************************\n\n" +
    "What's your choice?\n");

  rl.question('Enter Your Choice: ', (choice) => {

    //put the code for each option
    if (choice === "q" || choice==="Q") {
      rl.close();
    } else {
      console.log("\n\n\nUnkown Entry!\n\n\n")
      menu(); // Prnit Menu again
    }
  });
}

menu(); //start

