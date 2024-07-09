import { v4 as uuidv4 } from 'uuid';

interface Task {
    id: string;
    title: string;
    status: boolean;
  }
  
  class ToDoList {
    private tasks: Task[] = [];
  
    // نمایش لیست وظایف
    showTasks(): void {
      for (const task of this.tasks) {
        console.log(`ID: ${task.id}, عنوان: ${task.title}, وضعیت: ${task.status ? 'انجام شده' : 'انجام نشده'}`);
      }
    }
  
    // اضافه کردن وظیفه جدید
    addTask(title: string): void {
      const newTask: Task = {
        id: uuidv4(),
        title,
        status: false,
      };
      this.tasks.push(newTask);
    }
  
    // فیلتر کردن وظایف
    filterTasks(filterCriteria: (task: Task) => boolean): Task[] {
      return this.tasks.filter(filterCriteria);
    }
  
    // حذف وظیفه
    removeTask(taskId: string): void {
      this.tasks = this.tasks.filter((task) => task.id !== taskId);
    }
  
    // تغییر وضعیت وظیفه
    toggleTaskStatus(taskId: string): void {
      for (const task of this.tasks) {
        if (task.id === taskId) {
          task.status = !task.status;
          break;
        }
      }
    }
  
    // جستجو در عنوان وظایف
    searchTasks(query: string): Task[] {
      const normalizedQuery = query.toLowerCase();
      return this.tasks.filter((task) => task.title.toLowerCase().includes(normalizedQuery));
    }
  }

  // ایجاد لیست وظایف
const todoList = new ToDoList();

// اضافه کردن چند وظیفه
todoList.addTask('خرید مواد غذایی');
todoList.addTask('انجام تمرینات');
todoList.addTask('تماس با دکتر');

// نمایش لیست وظایف
todoList.showTasks();

// فیلتر کردن وظایف انجام نشده
const unfinishedTasks = todoList.filterTasks((task) => !task.status);
console.log('\nوظایف انجام نشده:');
for (const task of unfinishedTasks) {
  console.log(`ID: ${task.id}, عنوان: ${task.title}`);
}

// حذف وظیفه با شناسه خاص
todoList.removeTask('123e4567-e89b-12d3-a456-426655440000'); // جایگزینی با شناسه واقعی

// تغییر وضعیت وظیفه
todoList.toggleTaskStatus('789a0123-4567-89ab-cdef-123456789012');

// جستجو در عنوان وظایف
const searchResults = todoList.searchTasks('تمرین');
console.log('\nنتایج جستجو:');
for (const task of searchResults) {
  console.log(`ID: ${task.id}, عنوان: ${task.title}`);
}