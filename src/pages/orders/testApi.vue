<template>
    <div>
        <table>
            <tbody>
                <tr v-for="data in datos" :key="data.id">
                    <td>{{data.id}}</td>
                    <td>{{data.completed}}</td>
                    <td>{{data.title}}</td>
                    <td>{{data.userid}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import axios from 'axios'
export default Vue.extend({
   data () {
       return{
            datos:null
       }
    },

    mounted() {
      this.getData();
    },

    methods: {
      getData () {
        axios.get('https://www.mydeister.com/service/rest/demo_form/api/v1/api/vue/admin')
        .then( response => {
            this.datos = response.data
        }).catch(e => console.log(e))
      },

      getData2 () {
        axios.get('https://example.com/getSomething', {
        headers: {
          Authorization: 'Bearer ' + '123' //the token is a variable which holds the token
        }
        })
      },

    
    },
  })
</script>