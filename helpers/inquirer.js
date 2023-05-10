import colors from "colors";
import inquirer from "inquirer";
const questions = [
  {
    type: 'list',
    name: 'option',
    message: 'What you want to do?',
    choices: [
      {
        value: 1,
        name: `${'1.'.brightMagenta} New task`
      },
      {
        value: 2,
        name: `${'2.'.brightMagenta} Tasks list`
      },
      {
        value: 3,
        name: `${'3.'.brightMagenta} Completed tasks list`
      },
      {
        value: 4,
        name: `${'4.'.brightMagenta} Incomplete tasks list`
      },
      {
        value: 5,
        name: `${'5.'.brightMagenta} Complete task(s)`
      },
      {
        value: 6,
        name: `${'6.'.brightMagenta} Delete task`
      },
      {
        value: 0,
        name: `${'0.'.brightMagenta} Exit`
      }
    ]
  }
];

const inquirerMenu = async () => {
  console.clear();
  console.log('=================================='.brightGreen);
  console.log('         Choose an option:        ');
  console.log('==================================\n'.brightGreen);

  const { option } = await inquirer.prompt(questions);

  return option;

};

const pause = async () => {

  const question = [
    {
      type: 'input',
      name: 'option',
      message: `press ${'ENTER'.brightGreen} to continue`,
    }
  ];
  console.log('\n');
  const { option } = await inquirer.prompt(question);
  return option;
}

const readInput = async (message) => {
  const question = [
    {
      type: 'input',
      name: 'description',
      message,
      validate(value) {
        if (value.length === 0) {
          return 'Please insert a description'
        }
        return true;
      }
    }];

  const { description } = await inquirer.prompt(question);
  return description;

};

const deleteTaskList = async (tasks = []) => {
  const choices = tasks.map((task, i) => {
    const index = `${i + 1}.`.brightGreen;
    return {
      value: task.id,
      name: `${index} ${task.description}`
    };
  });

  choices.unshift({
    value: '0',
    name: `${'0.'.brightGreen} Cancel`
  })

  const questions = [
    {
      type: 'list',
      name: 'id',
      message: 'Delete',
      choices
    }
  ];

  const { id } = await inquirer.prompt(questions);
  return id;
};

const askConfirmation = async (message) => {
  const question = [
    {
      type: 'confirm',
      name: 'ok',
      message
    }
  ];

  const { ok } = await inquirer.prompt(question);
  return ok;

};


const showCheckList = async (tasks = []) => {
  const choices = tasks.map((task, i) => {
    const index = `${i + 1}.`.brightGreen;
    return {
      value: task.id,
      name: `${index} ${task.description}`,
      checked: (task.completedIn) ? true : false
    };
  });

  const question = [
    {
      type: 'checkbox',
      name: 'ids',
      message: 'Selections',
      choices
    }
  ];

  const { ids } = await inquirer.prompt(question);
  return ids;
};

export {
  inquirerMenu,
  pause,
  readInput,
  deleteTaskList,
  askConfirmation,
  showCheckList
}
