const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let tasks=[] //the TASKS

function Task(Name,Desc,Completed,Priority,dueDate){
    this.Name=Name
    this.Desc=Desc
    this.Completed=Completed
    this.Priority=Priority
    this.dueDate=dueDate
}

Task.prototype.getTaskDetails = function() {
    return `Name: ${this.Name}\nDescription: ${this.Desc}\nCompleted: ${this.Completed}\nPriority: ${this.Priority}\nDue Date: ${this.dueDate}\n`;
};

//choice 1
function addTask() {
    rl.question('Enter task name: ', (name) => {
      rl.question('Enter task description: ', (desc) => {
        rl.question('Is task completed? (yes/no): ', (completed) => {//here you should enter the value "yes" as is,or else it will be determined as no, of course it's not the best practice, but at lesat it works :D
          rl.question('Enter task priority (Number:the less value -> the highest priority it has): ', (priority) => {
            rl.question('Enter task due date (YYYY-MM-DD): ', (dueDate) => {
              const task = new Task(name, desc, completed, priority, dueDate);
              tasks.push(task);
              console.log('\n\n\nTask added successfully!\n\n\n');
              menu(); // Prompt the menu again
            });
          });
        });
      });
    });
  }

//choice 2
function listAllTasks() {
    if (tasks.length === 0) {
      console.log('No tasks found!\n');
    } else {
      console.log('All Tasks:\n');
      tasks.forEach((task, index) => {
        console.log(`Task ${index + 1}:`);
        console.log(task.getTaskDetails());
      });
    }
    menu(); // Prompt the menu again
  }

//choice 3
function ListCompletedTask(){
    if (tasks.length === 0) {
        console.log('No Completed Tasks found!\n');
      } else {
        tasks.forEach((task, index) => {
            if(task.Completed==="yes"){
                console.log(`Task ${index + 1}:`);
                console.log(task.getTaskDetails());
            }
          });
    }
    menu()
}

//choice 4
function MarkTaskCompleted(indx) {
    if (indx >= 1 && indx <= tasks.length) {
        tasks.forEach((task, index) => {
        if (index === indx - 1) {
            task.Completed = "yes";
        }
        });
        console.log("Marked as Completed!");
    }else{
        console.log("Invalid task index!\n");
    }
    menu();
  }

//choice 5
function DeleteTask(indx) {
    if (indx >= 1 && indx <= tasks.length) {
      tasks.splice(indx - 1, 1);
      console.log("Task deleted successfully!\n");
    } else {
      console.log("Invalid task index!\n");
    }
    menu();
  }

//hoice 6
function SortTasksByDueDate() {
    tasks.sort((task1, task2) => new Date(task1.dueDate) - new Date(task2.dueDate));
    console.log("Tasks sorted by due date!\n");
    menu();
}

//choice 7
function Sort_Priority(){
    tasks.sort((task1, task2) => task1.Priority - task2.Priority);
    console.log("Tasks sorted by priority!\n");
    menu();
}

//choice 8
function clearAllTasks() {
    tasks = []; // Empty the tasks array
    console.log('All tasks cleared!\n');
    menu(); // Prompt the menu again
  }

function menu() {
  console.log("***************************\n" +
    "Welcome to JS TODO-APP\n" +
    "***************************\n" +
    "Select an action:\n" +
    "1) Add a new task\n" +
    "2) List all tasks\n" +
    "3) List completed tasks\n" +
    "4) Mark the task as Completed\n" +
    "5) Delete a task\n" +
    "6) Sort tasks by the due date\n" +
    "7) Sort tasks by priority (Enter a Number representing a Priority Value)\n" +
    "8) Clear all tasks\n" +
    "9) Quit\n" +
    "***************************\n\n" +
    "What's your choice?\n");

  rl.question('Enter Your Choice: ', (choice) => {

    //put the code for each option
    if (choice==="1"){
        addTask()
    }
    else if (choice==="2"){
        listAllTasks()
    }
    else if (choice==="3"){
        ListCompletedTask()
    }
    else if (choice==="4"){
        rl.question('Enter task Number to Mark as Completed: ', (indx) => {
            MarkTaskCompleted(indx)
        })
    }
    else if (choice === "5") {
        rl.question('Enter task Number to Delete: ', (indx) => {
          DeleteTask(indx);
        });
      }
    else if (choice === "6") {
        SortTasksByDueDate();
      }
    else if (choice === "7") {
        Sort_Priority()
    }
    else if (choice === "8") {
        clearAllTasks()
    }
    else if (choice === "q" || choice==="Q") {
      console.log("\n\n\nBye!\n\n\n")
      rl.close();
    } else {
      console.log("\n\n\nUnkown Entry!\n\n\n")
      menu(); // Prnit Menu again
    }
  });
}

menu(); //start

