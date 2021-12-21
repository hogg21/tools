import { initTodoListHandlers } from './list/todoList';
import { renderTasks } from './list/renderer';
import './index.scss';

document.addEventListener('DOMContentLoaded', () => {
  renderTasks();
  initTodoListHandlers();
});

// eslint-disable-next-line consistent-return
const onStorageChange = (e) => {
  if (e.key !== 'tasksList') {
    return null;
  }
  renderTasks();
};

window.addEventListener('storage', onStorageChange);
