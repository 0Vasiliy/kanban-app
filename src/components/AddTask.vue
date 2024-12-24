<template>
    <div class="wrapper">
      <input v-model="title" placeholder="Title"/>
      <input v-model="description" placeholder="Description"/>
      <button @click="addTask">Добавить задачу</button>    
    </div>
    <div v-if="errorMessage" class="error">{{ errorMessage }}</div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        title: '',
        description: '',
        errorMessage: '',
      };
    },
    methods: {
      addTask() {
        if (!this.title.trim() || !this.description.trim()) {
        this.errorMessage = 'Заголовок и описание не могут быть пустыми!';
        return;
        };
        const newTask = {
          title: this.title,
          description: this.description,
          status: 'New',
        };
        this.$emit('add', newTask);
        this.title = '';
        this.description = '';
      },
    },
  };
  </script>
  <style>
  input, button{
    /* padding: 3px; */
    border-radius: 5px;
    width: 150px;
    height: 30px;
    border: 2px solid #2F4F4F;
  }
  button{
    cursor: pointer;
  }
  .wrapper{
    margin-top: 10px;
    display:flex;
    flex-direction:row;
    justify-content: space-between;
  }
  .error {
    color: red;
  }
  @media (max-width: 1500px){
    .wrapper{
      flex-direction: column;
    }
    input{
      margin-bottom: 7px;
    }
  }
  @media (max-width: 700px){
    .wrapper{
      flex-direction: row;
    }
    input{
      margin-bottom: 0;
    }
  }
  @media (max-width: 500px){
    .wrapper{
      flex-direction: column;
    }
    input{
      margin-bottom: 7px;
    }
  }
  </style>