<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Login msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import Login from '@/components/Login.vue'; // @ is an alias to /src

export default {
  components: {
    Login,
  },
}
</script>
