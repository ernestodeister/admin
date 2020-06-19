<template>
    <v-navigation-drawer
      permanent
      :mini-variant.sync="mini"
      :mini-variant-width="width"
      v-model="drawer"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <template v-for="(item, index) in items">
          
          
           <v-subheader
                v-if="item.header"
                :key="item.header"
              >
                <v-div v-if="!mini" >{{ item.header }}</v-div>
                <v-div v-if="mini" >{{ item.header2 }}</v-div>
            </v-subheader>
          
             <v-divider
                v-else-if="item.divider"
                :key="index"
              ></v-divider> 
              
          <v-list-item
            v-else
            :key="item.title"
            :to="item.to"
            ripple
          >
            <v-list-item-action>
              <v-icon >{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title v-text="item.title" />
            </v-list-item-content>
  
          </v-list-item> 
           
         
        </template> 
      </v-list>
    </v-navigation-drawer>
</template>

<script>

export default {
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
          to: '/'
        },
        { divider: true },
        {
            header: 'Overview',
            header2: 'O',
        },
        {
          icon: 'mdi-newspaper',
          title: 'ORDERS',
          to: '/orders/ListOrders'
        },
        {
          icon: 'mdi-package-variant',
          title: 'DELIVERY',
          to: '/delivery'
        },
        {
          icon: 'mdi-file',
          title: 'INVOICES',
          to: '/invoices'
        },
        {
          icon: 'mdi-cash-multiple',
          title: 'PAYMENTS',
          to: '/payments'
        },
        {
          icon: ' mdi-checkbox-multiple-marked-outline',
          title: 'CREDIT NOTES',
          to: '/credit_note'
        },
        {
          icon: 'mdi-file-document',
          title: 'STATEMENT',
          to: '/statement'
        },
        { divider: true },
        {
            header: 'Account Management',
            header2: 'A M',
            icon: null,
            title: null,
            to: null
        },
        {
          icon: 'mdi-credit-card',
          title: 'MAKE A PAYMENT',
          to: '/make_payment'
        },
        {
          icon: 'mdi-cart-outline',
          title: 'PLACE AN ORDER',
          to: '/place_order'
        }
      ],
    }
  },
  methods: {

    
      
    },
    
  computed: {
  mini() {
    switch (this.$vuetify.breakpoint.name) {
      case 'xs': return true
      case 'sm': return true
      case 'md': return true
      case 'lg': return false
      case 'xl': return false
  }
}
}
}
</script>
