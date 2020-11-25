<template>
    <v-layout column justify-center align-center :fullscreen="$vuetify.breakpoint.mobile">
        <v-card width="95%" class="mt-8">
            <v-card-title class="headline">
                View Detail of PAYMENT
            </v-card-title>
            <v-card-text>
                <div>
                    <v-expansion-panels
                    v-model="panel"
                    :disabled="disabled"
                    multiple
                    >
                    <v-expansion-panel>
                        <v-expansion-panel-header>DATA OF ORDER</v-expansion-panel-header>
                        <v-expansion-panel-content>
                        <v-row>
                            <v-col
                            cols="4"
                            >
                                <v-text-field
                                    v-model="order.nroOrder"
                                    label="Nro Order"
                                    readonly
                                ></v-text-field>
                            </v-col>
                            <v-col
                            cols="4"
                            >
                                <v-text-field
                                    v-model="order.idCli"
                                    label="Id Client"
                                    readonly
                                ></v-text-field>
                            </v-col>
                            <v-col
                            cols="4"
                            >
                                <v-text-field
                                     v-model="order.orderDate"
                                    label="Order Date"
                                    readonly
                                ></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col
                            cols="4"
                            >
                                <v-text-field
                                     v-model="order.shippingDate"
                                    label="Shipping Date"
                                    readonly
                                ></v-text-field>
                            </v-col>
                            <v-col
                            cols="8"
                            >
                                <v-text-field
                                     v-model="order.shippingAddr"
                                    label="shipping Addrees"
                                    readonly
                                ></v-text-field>
                            </v-col>
                        </v-row>
                        
                        </v-expansion-panel-content>
                    </v-expansion-panel>

                    <v-expansion-panel>
                        <v-expansion-panel-header>DATA OF CLIENT</v-expansion-panel-header>
                        <v-expansion-panel-content>
                            <v-row>
                                <v-col
                                cols="3"
                                >
                                    <v-text-field
                                        v-model="client.name"
                                        label="Name"
                                        readonly
                                    ></v-text-field>
                                </v-col>
                                <v-col
                                cols="3"
                                >
                                    <v-text-field
                                        v-model="client.typedoc"
                                        label="Type Document"
                                        readonly
                                    ></v-text-field>
                                </v-col>
                                <v-col
                                cols="3"
                                >
                                    <v-text-field
                                        v-model="client.nrodoc"
                                        label="Nro Document"
                                        readonly
                                    ></v-text-field>
                                </v-col>
                                <v-col
                                cols="3"
                                >
                                    <v-text-field
                                        v-model="client.telmobile"
                                        label="Telephone Mobile"
                                        readonly
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col
                                cols="3"
                                >
                                    <v-text-field
                                        v-model="client.email"
                                        label="Email"
                                        readonly
                                    ></v-text-field>
                                </v-col>
                                <v-col
                                cols="3"
                                >
                                    <v-text-field
                                        v-model="client.paymethod"
                                        label="Pay Method"
                                        readonly
                                    ></v-text-field>
                                </v-col>
                                <v-col
                                cols="3"
                                >
                                    <v-text-field
                                        v-model="client.nrodoc"
                                        label="Pay Cod"
                                        readonly
                                    ></v-text-field>
                                </v-col>
                                <v-col
                                cols="3"
                                >
                                    <v-text-field
                                        v-model="client.country"
                                        label="Country"
                                        readonly
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                    </v-expansion-panels>
                </div>
            </v-card-text>
        </v-card>
    </v-layout>
</template>

<script lang="ts">
import Vue from 'vue'
import {mapState} from "vuex"

  export default Vue.extend({
    data: () => ({
      panel: [0, 1],
      disabled: false,
      readonly: false,
    }),

    methods: {
        
    },
    computed:{
    ...mapState(['order','client']),
    },
    mounted(){
        
    }
    
  })
</script>