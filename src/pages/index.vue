<template>
  <v-layout column>
    <Menu />
    <AppBar />

    <router-view/>
    <v-footer app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-layout>
  
</template>

<script>
import AppBar from '../components/AppBar.vue'
import Menu from '../components/Menu.vue'

export default {
  components: { AppBar,Menu },
}
</script>

<style scoped>
.card-actions {
  position: absolute;
  bottom: 0;
}
.color {
  background-color: #ebeef0;
  height: 100vh;
}
</style>
