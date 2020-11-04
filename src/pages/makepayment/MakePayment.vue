<template>
    <v-layout column justify-center align-center :fullscreen="$vuetify.breakpoint.mobile">
    <v-card width="100%">
      <v-card-title class="headline">
          Orders
      </v-card-title>
      <v-card-text>
        <p>
          LIST ORDERS
        </p>
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">ID</th>
              <th class="text-left">Nro Order</th>
              <th class="text-left">Id Client</th>
              <th class="text-left">Shipping Address</th>
              <th class="text-left">Order Date</th>
              <th class="text-left">Shipping Date</th>
              <th class="text-left">Product quantity</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="order in orders" :key="order.idd">
              <td><span>{{order.id}}</span> &#160;</td>
              <td><span>{{order.nroOrder}}</span> &#160;</td>
              <td><span>{{order.idCli}}</span> &#160;</td>
              <td><span>{{order.shippingAddr}}</span> &#160;</td>
              <td><span>{{order.orderDate}}</span> &#160;</td>
              <td><span>{{order.shippingDate}}</span> &#160;</td>
              <td><span>{{order.product.length}}</span> &#160;</td>
              <td>
                <v-btn  class="ma-2" text icon color="gray" to="/user_payment">
                  <v-icon @click="edit(order)" smallclass="mr-2">mdi-pencil</v-icon>
                </v-btn>
                <!-- <v-icon @click="edit(order)" to="/user_payment">mdi-pencil</v-icon> -->
                <v-icon @click="del(order)">mdi-delete</v-icon>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
  
  </v-card-text></v-card></v-layout>
</template>

<script>
/* eslint-disable */ 
import axios from 'axios'
import {mapState, mapMutations} from "vuex"
export default {
  data(){
    return{
        orders: '',
        erro: '',
    }
  },
  mounted() {
    this.load()
  },
  methods: {
    ...mapMutations(['setOrder']),
    load(){
      axios.get('http://localhost:3000/order').then(res => {
            this.orders = res.data
        }).catch ((err) => {
            console.log(err);
        })
    },
    edit(order){
      this.$store.dispatch("searchOrder", order.id)
      this.$store.dispatch("searchClient", order.idCli)
    },
  },
  computed:{
    ...mapState(['order']),
  }
}
</script>