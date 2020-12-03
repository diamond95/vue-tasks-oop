<template>
  <div class="home">
    <img alt="Todo photo" src="../assets/todo.jpg">
    <TaskList></TaskList>
  </div>
</template>

<script>
import TaskList from '@/components/TaskList.vue'

export default {
  name: 'Home',
  components: {
    TaskList
  }
}
</script>
