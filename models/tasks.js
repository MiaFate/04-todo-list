import colors from "colors";
import Task from "./task.js";

class Tasks {
  _list = {};
  get arrList() {
    const list = [];
    Object.keys(this._list).forEach(key => {
      const task = this._list[key];
      list.push(task);
    })
    return list;
  }

  constructor() {
    this._list = {};
  };

  deleteTask(id = '') {
    if (this._list[id]) {
      delete this._list[id];
    }
  }

  loadTasksFromArr(_tasks = []) {
    _tasks.forEach((_task) => {
      this._list[_task.id] = _task;
    })
  }

  newTask(description = '') {
    const task = new Task(description);
    this._list[task.id] = task;
  };

  fullList() {
    console.log('');
    this.arrList.forEach((task, i) => {
      const index = `${i + 1}.`.brightMagenta;
      const { description, completedIn } = task;

      const state = (completedIn)
        ? `Completed`.brightGreen
        : `Incomplete`.brightRed;

      console.log(`${index} ${description} :: ${state}`)
    });
  };

  completedIncompleteList(completed = true) {
    let i = 0;
    console.log('');

    this.arrList.forEach((task) => {

      const { description, completedIn } = task;
      const state = (completedIn)
        ? `Completed`.brightGreen
        : `Incomplete`.brightRed;

      if (completed) {
        if (completedIn) {
          i++;
          const index = `${i}.`.brightMagenta;
          console.log(`${index} ${description} :: ${completedIn.brightGreen}`)
        };
      } else {
        if (!completedIn) {
          i++;
          const index = `${i}.`.brightMagenta;
          console.log(`${index} ${description} :: ${state}`)
        };
      }

    });

  };

  toggleCompleted(ids = []) {
    ids.forEach(id => {
      const task = this._list[id];
      if (!task.completedIn) {
        task.completedIn = new Date().toISOString();
      }
    });

    this.arrList.forEach(task => {
      if (!ids.includes(task.id)) {
        this._list[task.id].completedIn = null;
      }
    })
  };

};
export default Tasks;
