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
    this.fetchTasks();
  },
  methods: {
    async fetchTasks() {
      const response = await axios.get('http://localhost:5000/api/tasks');
      this.tasks = response.data;
    },
    async addTask(task) {
      // Установим статус задачи по умолчанию на "New", если не указан явно
      const newTask = { ...task, status: 'New'}; // Вы можете указать статус в зависимости от логики
      const response = await axios.post('http://localhost:5000/api/tasks', newTask);
      // Добавим новую задачу в локальный массив
      this.tasks.push(response.data);
    },
    async deleteTask(id) {
      await axios.delete(`http://localhost:5000/api/tasks/${id}`);
      this.fetchTasks();
    },
    async updateTask(updatedTask) {
      await axios.put(`http://localhost:5000/api/tasks/${updatedTask._id}`, updatedTask);
      this.fetchTasks();
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
  border-radius: 15px;
  border: 2px solid #2F4F4F;
}
@media (max-width: 700px){
    .task-list{
        flex-direction: column;
    }
    .column{
        width: 100%;
    }
  }
</style>