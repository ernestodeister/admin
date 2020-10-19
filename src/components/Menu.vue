<template>
    <v-navigation-drawer
      permanent
      v-model="drawer"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <template v-for="(item, index) in items">
          <div :key="index">
           <v-subheader
                v-if="item.header"
                :key="item.header"
              >
                {{ item.header }}
            </v-subheader>
             <v-divider
                v-else-if="item.divider"
                :key="index"
              ></v-divider> 
          <v-list-item
            v-else
            :key="item.title"
            ripple
            :to="item.to"
          >
           <!-- <router-link to="/about">About</router-link> -->
            <v-list-item-action>
              <v-icon >{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title v-text="item.title" />
            </v-list-item-content>
          </v-list-item> 
          </div>
        </template> 
      </v-list>
      
    </v-navigation-drawer>
    
</template>

<script lang="ts">
import Vue from 'vue'
import Vuetify from 'vuetify'

Vue.use(Vuetify);
export default Vue.extend({
  name: 'Menu',
  data() {
    return {
      clipped: true,
      drawer: true,
      fixed: false,
      resize: true,
      width: 60,
      notifications: false,
      items: [
        {
          icon: 'mdi-television-guide',
          title: 'DASHBOARD',
          to: '/',
          val: true,
        },
        { divider: true , val: true },
        {
            header: 'Overview',
            val: false,
        },
        {
          icon: 'mdi-newspaper',
          title: 'ORDERS',
          to: '/orders/ListOrders',
          val: true,
        },
        {
          icon: 'mdi-package-variant',
          title: 'DELIVERY',
          to: '/delivery',
          val: true,
        },
        {
          icon: 'mdi-file',
          title: 'INVOICES',
          to: '/invoices',
          val: true,
        },
        {
          icon: 'mdi-cash-multiple',
          title: 'PAYMENTS',
          to: '/payments',
          val: true,
        },
        {
          icon: ' mdi-checkbox-multiple-marked-outline',
          title: 'CREDIT NOTES',
          to: '/credit_note',
          val: true,
        },
        {
          icon: 'mdi-file-document',
          title: 'STATEMENT',
          to: '/statement',
          val: true,
        },
        { divider: true, val: true },
        {
            header: 'Account Management',
            val: false,
        },
        {
          icon: 'mdi-credit-card',
          title: 'MAKE A PAYMENT',
          to: '/make_payment',
          val: true,
        },
        {
          icon: 'mdi-cart-outline',
          title: 'PLACE AN ORDER',
          to: '/placeorder/PlaceOrder',
          val: true,
        }
      ],
    }
  },
  methods: {

    },
    
  computed: {

  }
})
</script>
