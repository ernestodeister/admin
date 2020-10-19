<template>
<v-app>
  <v-main>
    <Index />
  </v-main>
</v-app>
</template>

<script>
import Index from './pages/index';

export default {
  name: 'App',

  components: {
    Index,
  },

  data: () => ({
    //
  }),
};
</script>

<!--<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>-->


