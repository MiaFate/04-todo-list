import colors from "colors";
import {
  inquirerMenu,
  pause,
  readInput,
  deleteTaskList,
  askConfirmation,
  showCheckList,
} from "./helpers/inquirer.js";
import Tasks from "./models/tasks.js";
import { readDb, saveDb } from "./helpers/saveFile.js";
const main = async () => {
  let opt = '';
  const tasks = new Tasks();
  const tasksDb = readDb();

  if (tasksDb) {
    tasks.loadTasksFromArr(tasksDb)
  }
  await pause();

  do {
    opt = await inquirerMenu();

    switch (opt) {
      case 1:
        const description = await readInput('Description: ');
        tasks.newTask(description);
        console.log(description);
        break;

      case 2:
        tasks.fullList();
        break;
      case 3:
        tasks.completedIncompleteList();
        break;
      case 4:
        tasks.completedIncompleteList(false);
        break;
      case 5:
        const ids = await showCheckList(tasks.arrList);
        tasks.toggleCompleted(ids);
        break;
      case 6:
        const id = await deleteTaskList(tasks.arrList);
        if (id !== '0') {
          const ok = await askConfirmation('Are you sure?');
          if (ok) {
            tasks.deleteTask(id);
            console.log('task deleted');
          }
        }
        break;
    }

    saveDb(tasks.arrList);

    await pause();
  } while (opt !== 0);

  //await pausa();
}

main();
