<template>
    <div class="task">
      <h4>{{ task.title }}</h4>
      <p>{{ task.description }}</p>
     <div class="task-block">
      <select v-model="task.status" @change="updateTaskStatus">
        <option v-for="status in statuses" :key="status" :value="status">{{ status }}</option>
      </select>
      <button @click="deleteTask">Delete</button>
     </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ['task'],
    data() {
      return {
        statuses: ['New', 'In Progress', 'Completed'],
      };
    },
    methods: {
      updateTaskStatus() {
        this.$emit('update', this.task);
      },
      deleteTask() {
        this.$emit('delete', this.task._id);
      },
    },
  };
  </script>
  
  <style scoped>
  .task {
    padding: 10px;
    background: white;
    margin: 5px;
    border-radius: 5px;
  }
  .task-block{
    margin-top: 10px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: row;
    justify-content:space-between;
  }
  select{
    padding: 5px;
    border-radius: 5px;
    width: 150px;
    height: 30px;
    border: 2px solid #2F4F4F;
  }
  button{
    width: 150px;
    height: 30px;
    border: 2px solid #2F4F4F;
  }
  @media (max-width: 1500px){
    .task-block{
      flex-direction: column;
    }
    select{
      margin-bottom: 7px;
    }
  }
  @media (max-width: 700px){
    select, button{
     width: 120px;
    }
    .task-block{
      flex-direction: row;
    }
    select{
      margin-bottom: 0;
    }
  }
  
  </style>