<template>
    <v-layout column justify-center align-center :fullscreen="$vuetify.breakpoint.mobile">
        <v-card width="100%">
            <v-card-title class="headline">
                Validation Client Information
            </v-card-title>
            <v-card-text>
                <v-form ref="form" v-model="valid" lazy-validation>
                    <v-row>
                        <v-col cols="6">
                            <v-text-field v-model="order.nroOrder" label="Nro Order" required>
                            </v-text-field>
                        </v-col>
                        <v-col cols="6">
                            <v-text-field v-model="client.name" label="Name" required>
                            </v-text-field>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col cols="6">
                            <v-select v-model="client.typedoc" :items="select1" label="Type Doc." required>
                            </v-select>
                        </v-col>
                        <v-col cols="6">
                            <v-text-field v-model="client.nrodoc" label="Nro Document" required >
                            </v-text-field>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col cols="4">
                            <v-text-field v-model="client.telmobile" label="Telmobile" required >
                            </v-text-field>
                        </v-col>
                        <v-col cols="4">
                            <v-text-field v-model="client.email" label="Email" required >
                            </v-text-field>
                        </v-col>
                        <v-col cols="4">
                            <v-text-field v-model="client.country" label="Country" required >
                            </v-text-field>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col cols="6">
                            <v-select v-model="client.paymethod" :items="select2" label="Pay Method" required>
                            </v-select>
                        </v-col>
                        <v-col cols="6">
                            <v-text-field v-model="client.paycod" label="Pay Code" required >
                            </v-text-field>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate" >
                        Save
                        </v-btn>

                        <v-btn color="error" class="mr-4" @click="reset" >
                        continue
                        </v-btn>
                    </v-row>

                </v-form>
        
            </v-card-text>
        </v-card>
    </v-layout>
</template>

<script lang="ts">
import Vue from 'vue'
import {mapState} from "vuex"
  export default Vue.extend({
    data: () => ({
      valid: true,
      select1: [
        'DNI',
        'RUC',
        'PASAPORTE',
        'CARNET DE EXT.',
      ],
      select2: [
        'TARJETA',
        'CASH',
        'CREDIT AND DEBIT CARDS',
        'TRANSFER',
      ],
    }),

    methods: {
      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
    },
    computed:{
    ...mapState(['order','client']),
    }
  })
</script>