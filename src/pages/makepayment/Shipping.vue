<template>
    <v-layout column justify-center align-center :fullscreen="$vuetify.breakpoint.mobile">
        <v-card width="95%" class="mt-8">
            <v-card-title class="headline">
                Validation of direction of Shipping
            </v-card-title>
            <v-card-text>
                <v-form ref="form">
                    <v-row>
                        <v-col cols="4">
                            <v-text-field v-model="order.nroOrder" label="Nro Order" required disabled>
                            </v-text-field>
                        </v-col>
                        <v-col cols="4">
                            <v-text-field v-model="client.id" label="Client Code" required disabled>
                            </v-text-field>
                        </v-col>
                        <v-col cols="4">
                            <v-text-field v-model="client.name" label="Name" required disabled>
                            </v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-text-field v-model="order.shippingAddr" id="shippingAddr" label="Direction of Shipping" required>
                        </v-text-field>
                    </v-row>

                    <v-row>
                        <div id="map" style="width: 100%;height: 500px;"></div>
                    </v-row>

                    <v-row>
                        <v-col cols="9">

                        </v-col>
                        <v-col cols="3">
                            <v-btn  color="success" class="mr-4" @click="update()" >
                                Edit
                            </v-btn>

                            <v-btn color="primary" class="mr-4" to="/viewdetail">
                                continue
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-form>
            </v-card-text>
        </v-card>
    </v-layout>
</template>

<script lang="ts">
import Vue from 'vue'
import {mapState} from "vuex"
import axios from 'axios'

  export default Vue.extend({
    data: () => ({
      markers:[]
      
    }),

    methods: {
        update(){ 
            return axios.put('http://localhost:3000/order/' + this.order.id , {
            idCli : this.order.idCli,
            nroOrder: this.order.nroOrder,
            shippingAddr: this.order.shippingAddr,
            orderDate: this.order.orderDate,
            shippingDate: this.order.shippingDate,
            product: this.order.product,
            }).then(res => {
                console.log(res);
                alert("Direccion modificada");
            }).catch((err) => {
                console.log(err);
            })  
        },
        showLocationMap(latitude, longitude){
            let map = new window.google.maps.Map(document.getElementById("map"),{
                zoom : 17,
                center : new window.google.maps.LatLng(latitude, longitude),
                mapTypeId : window.google.maps.MapTypeId.ROADMAP
            });

            //add marker

            new window.google.maps.Marker({
                position: new window.google.maps.LatLng(latitude, longitude),
                map: map
            })
        }
    },
    computed:{
    ...mapState(['order','client']),
    },
    mounted(){
        let text = new window.google.maps.places.Autocomplete(
            document.getElementById("shippingAddr")
        )

        text.addListener("place_changed", () =>{
            let place = text.getPlace();
            console.log(place);
            this.showLocationMap(place.geometry.location.lat(), place.geometry.location.lng())
        });

        new window.google.maps.Map(document.getElementById('map'), {
            center: {lat: -34.397, lng: 150.644},
            zoom: 8,
        });
    }
    
  })
</script>