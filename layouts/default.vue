<template>
  <v-app>
    <v-navigation-drawer
      permanent
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn depressed>
        <v-icon left>mdi-magnify</v-icon>
        Search
      </v-btn>
      <v-btn depressed>
        <v-icon>mdi-forum</v-icon>
      </v-btn>
      <v-btn depressed>
        <v-icon>{{
          notifications ? 'mdi-bell-alert' : 'mdi-bell-outline'
        }}</v-icon>
      </v-btn>
      <!--  user information  -->
      <v-divider inset vertical></v-divider>
      <v-col class="hidden-xs-only" sm="1" md="1">
        <strong v-html="user.name"></strong>
      </v-col>
      <v-avatar size="36px">
        <img v-if="user.avatar" alt="Avatar" :src="user.avatar" />
        <v-icon v-else :color="user.color" v-text="user.icon"></v-icon>
      </v-avatar>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light>
              mdi-repeat
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer :fixed="fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: true,
      drawer: false,
      fixed: false,
      notifications: false,
      user: {
        avatar: 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460',
        name: 'John Doe',
        color: 'red',
        icon: 'people'
      },
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Customer Portal'
    }
  }
}
</script>
