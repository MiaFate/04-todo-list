import { v4 as uuidv4 } from 'uuid';
class Task {
  id = '';
  description = '';
  completedIn = null;
  constructor(_description) {
    this.id = uuidv4();
    this.description = _description;
  };
};

export default Task;
