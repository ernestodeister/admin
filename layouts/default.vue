<template>
  <v-app :fullscreen="$vuetify.breakpoint.mobile">
    <Menu />
    <AppBar />
    <v-main class="color">
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer :fixed="fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import AppBar from '@/components/AppBar.vue'
import Menu from '@/components/Menu.vue'

export default {
  data() {
    return {
      clipped: true,
      drawer: false,
      fixed: false,
      notifications: false,
      items: [],
      miniVariant: false
    }
  },
  components: {
    AppBar,
    Menu
  }
}
</script>
<style>
.color {
  background-color: #ebeef0;
}
</style>
