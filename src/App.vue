<template>
  <div id="app">
    <TaskList/>
  </div>
</template>

<script>
import TaskList from './components/TaskList.vue';

export default {
  components: {
    TaskList
  }
};
</script>

<style>
*{
  max-width: 1920px;
  margin: 0  auto;
  padding: 0;  
  box-sizing: border-box;
}
.container{
    margin: 0 auto;
    max-width: 1920px;
    width: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
}
</style>