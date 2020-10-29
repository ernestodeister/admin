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
              <th class="text-left">Name</th>
              <th class="text-left">Type Doc.</th>
              <th class="text-left">Nro. Doc.</th>
              <th class="text-left">Address</th>
              <th class="text-left">Payment</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="order in orders" :key="order.idd">
              <td><span>{{order.id}}</span> &#160;</td>
              <td><span>{{order.name}}</span> &#160;</td>
              <td><span>{{order.typedoc}}</span> &#160;</td>
              <td><span>{{order.nrodoc}}</span> &#160;</td>
              <td><span>{{order.shipadd}}</span> &#160;</td>
              <td><span>{{order.payment}}</span> &#160;</td>
              <td>
                <v-icon @click="edit(order)">mdi-pencil</v-icon>
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
        updateSubmit: false,
        erro: '',
    }
  },
  mounted() {
    this.load()
  },
  methods: {
    ...mapMutations(['']),
    load(){
      axios.get('http://localhost:3000/order').then(res => {
            this.orders = res.data
        }).catch ((err) => {
            console.log(err);
        })
    },
    edit(order){
      this.order=this.order;
      console.log(order);
    }
  },
  computed:{
    ...mapState(['order']),
   
  }
}
</script>