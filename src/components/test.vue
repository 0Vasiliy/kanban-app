<!-- <template>
    <div class="task-list">
      <h2>Kanban Board</h2>
      <div v-for="status in statuses" :key="status" class="column">
        <h3>{{ status }}</h3>
        <Task 
          v-for="task in tasks.filter(t => t.status === status)" 
          :key="task._id" 
          :task="task" 
          @delete="deleteTask"
          @update="updateTask"
        />
        <AddTask @add="addTask" />
      </div>
    </div>
  </template>
  
  <script>
  import Task from './Task.vue';
  import AddTask from './AddTask.vue';
  import axios from 'axios';
  
  export default {
    components: { Task, AddTask },
    data() {
      return {
        tasks: [],
        statuses: ['New', 'In Progress', 'Completed'],
      };
    },
    created() {
      this.fetchTasks();
      this.loadTasksFromStorage();
    },
    beforeDestroy() {
      this.saveTasksToStorage();
    },
    methods: {
      async fetchTasks() {
        const response = await axios.get('http://localhost:5000/api/tasks');
        this.tasks = response.data;
        this.saveTasksToStorage();  // Сохраняем после получения
      },
      loadTasksFromStorage() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks'));
        if (storedTasks) {
          this.tasks = storedTasks;
        }
      },
      saveTasksToStorage() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
      },
      async addTask(task) {
        const newTask = { ...task, status: 'New' };
        const response = await axios.post('http://localhost:5000/api/tasks', newTask);
        this.tasks.push(response.data);  // Добавляем новую задачу к списку
        this.saveTasksToStorage();  // Сохраняем в хранилище
      },
      async deleteTask(taskId) {
        await axios.delete(`http://localhost:5000/api/tasks/${taskId}`);
        this.tasks = this.tasks.filter(task => task._id !== taskId);
        this.saveTasksToStorage();  // Сохраняем изменения
      },
      async updateTask(updatedTask) {
        const response = await axios.put(`http://localhost:5000/api/tasks/${updatedTask._id}`, updatedTask);
        const index = this.tasks.findIndex(task => task._id === updatedTask._id);
        if (index !== -1) {
          this.tasks.splice(index, 1, response.data);  // Обновляем задачу в списке
        }
        this.saveTasksToStorage();  // Сохраняем изменения
      },
    },
  };
  </script>
  
  <style>
  .task-list {
    display: flex;
  }
  .column {
    margin: 10px;
    padding: 10px;
    background: lightgray;
    width: 30%;
  }
  /* </style> */ -->

<!-- 
  <template>
    <div class="task-list">
      <h2>Kanban Board</h2>
      <div v-for="status in statuses" :key="status" class="column">
        <h3>{{ status }}</h3>
        <Task 
          v-for="task in tasks.filter(t => t.status === status)" 
          :key="task._id" 
          :task="task" 
          @delete="deleteTask"
          @update="updateTask"
        />
        <AddTask @add="addTask" />
      </div>
    </div>
  </template>
  
  <script>
  import Task from './Task.vue';
  import AddTask from './AddTask.vue';
  import axios from 'axios';
  
  export default {
    components: { Task, AddTask },
    data() {
      return {
        tasks: [],
        statuses: ['New', 'In Progress', 'Completed'],
      };
    },
    created() {
      this.loadTasks();
      this.fetchTasks();
    },
    methods: {
      loadTasks() {
        const storedTasks = localStorage.getItem('tasks');
        if (storedTasks) {
          this.tasks = JSON.parse(storedTasks);
        }
        console.log(this.tasks)
      },
      async fetchTasks() {
        const response = await axios.get('http://localhost:5000/api/tasks');
        this.tasks = response.data;
        this.saveTasks(); // Сохранение задач в локальном хранилище
      },
      async addTask(task) {
        const newTask = { ...task, status: 'New' }; 
        const response = await axios.post('http://localhost:5000/api/tasks', newTask);
        this.tasks.push(response.data);
        this.saveTasks(); // Обновление локального хранилища
      },
      async deleteTask(id) {
        await axios.delete(`http://localhost:5000/api/tasks/${id}`);
        this.tasks = this.tasks.filter(task => task._id !== id); // Удаляем задачу из локального массива
        this.saveTasks(); // Обновление локального хранилища
      },
      async updateTask(updatedTask) {
        await axios.put(`http://localhost:5000/api/tasks/${updatedTask._id}`, updatedTask);
        const index = this.tasks.findIndex(task => task._id === updatedTask._id);
        if (index !== -1) {
          this.tasks.splice(index, 1, updatedTask); // Обновляем задачу в локальном массиве
        }
        this.saveTasks(); // Обновление локального хранилища
      },
      saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks)); // Сохраняем массив задач в локальном хранилище
      },
    },
  };
  </script>

<style>
.task-list {
  display: flex;
}
.column {
  margin: 10px;
  padding: 10px;
  background: lightgray;
  width: 30%;
}
</style> -->