<template>
  <v-layout column justify-center align-center >
            <v-card width="100%">
              <v-card-title class="headline">
                Place And Order
              </v-card-title>
              <v-card-text>
                <v-form @submit.prevent="add">
                  <v-row>
                      <v-col class="sup" xs="12" sm="12" md="6" lg="6" xl="5"> 
                          
                          <input type="hidden" v-model="form.id" id="inputAdd">
                              <v-row>
                                  <v-col cols="4">
                                      <v-subheader>Names and surnames of the client</v-subheader>
                                  </v-col>
                                  <v-col cols="8">
                                      <v-text-field
                                      label=""
                                      v-model="form.name"
                                      ></v-text-field>
                                  </v-col>
                              </v-row>
                              <v-row>
                                  <v-col cols="4">
                                      <v-subheader>Document type</v-subheader>
                                  </v-col>
                                  <v-col cols="8">
                                      <v-select
                                      v-model="form.typedoc"
                                      :items="select1"
                                      label=""
                                      required
                                      ></v-select>
                                  </v-col>
                              </v-row>
                              <v-row>
                                  <v-col cols="4">
                                      <v-subheader>Document Number</v-subheader>
                                  </v-col>
                                  <v-col cols="8">
                                      <v-text-field
                                      label=""
                                      v-model="form.nrodoc"
                                      ></v-text-field>
                                  </v-col>
                              </v-row>
                              <v-row>
                                  <v-col cols="4">
                                      <v-subheader>Shipping Address</v-subheader>
                                  </v-col>
                                  <v-col cols="8">
                                      <v-text-field
                                      label=""
                                      v-model="form.shipadd"
                                      ></v-text-field>
                                  </v-col>
                              </v-row>
                              <v-row>
                                  <v-col cols="4">
                                      <v-subheader>Payment Method</v-subheader>
                                  </v-col>
                                  <v-col cols="8">
                                      <v-select
                                      v-model="form.payment"
                                      :items="select2"
                                      label=""
                                      required
                                      ></v-select>
                                  </v-col>
                              </v-row>
                              <v-row>
                                  <v-col cols="4">
                                      <v-subheader>Order Comments</v-subheader>
                                  </v-col>
                                  <v-col cols="8">
                                      <v-textarea
                                      v-model="form.ordcom"
                                      name="input-7-4"
                                      label=""
                                      ></v-textarea>
                                  </v-col>
                              </v-row>
                              
                      </v-col>
                      <v-col class="sup" xs="12" sm="12" md="6" lg="6" xl="4">
                          <v-sheet
                          elevation="12"
                          class="pa-12"
                          >
                          <v-row>
                              <v-col cols="6" >
                                  <h3>Billing Address</h3><br>
                                  <p>
                                  Bourner Gate<br>
                                  25 Bourne Valley Road<br>
                                  Poole, Dorset, BH12 1DY<br>
                                  United Kingdom<br>
                                  </p>
                              </v-col>
                              <v-col cols="6">
                                  <h3>Shipping Address</h3><br>
                                  <p>
                                  UI. Rymarska 16/5 <br>
                                  Wroclaw dolnoslaskie<br>
                                  Poland<br>
                                  </p>
                              </v-col>
                          </v-row>
                          </v-sheet>
                      </v-col>
                  </v-row>
                  <v-row>
                    <v-spacer></v-spacer>
                      <v-dialog v-model="dialog" persistent max-width="1000" data-app >
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn small class="float-left" color="primary" type="button" 
                            v-bind="attrs"
                            v-on="on">
                              <v-icon small>mdi-plus</v-icon>
                                Add products
                            </v-btn>  
                        </template>
                          <v-card>
                            <v-card-title class="headline">
                              <v-row> Product Catalogue</v-row>
                              <v-row>
                                <v-spacer></v-spacer>
                                <v-text-field
                                  v-model="search"
                                  append-icon="mdi-magnify"
                                  label="Search"
                                  single-line
                                  hide-details
                                ></v-text-field>
                              </v-row>
                            </v-card-title>
                            <v-card-text >
                              <p>
                                Search or look up Products and add then to your order line.
                              </p>
                              <v-data-table
                                v-model="selected"
                                :single-select="singleSelect"
                                :headers="headers"
                                :items="product"
                                item-key=prod
                                class="elevation-1"
                                hide-default-footer
                                :search="search"
                                show-select
                              >
                                <template>
                                  <!-- <v-chip  dark>{{ item.ava }}</v-chip> -->
                                </template>
                              </v-data-table>
                            </v-card-text>
                            <v-card-actions>
                              <v-spacer></v-spacer>
                              <v-btn color="green darken-1" text @click="dialog = false">Cancel</v-btn>
                              <v-btn color="green darken-1" text @click="dialog = false">Save</v-btn>
                            </v-card-actions>
                          </v-card>
                     </v-dialog>
                    
                  </v-row>
                  <v-row>
                      <v-col cols="12" >
                        <v-simple-table dense>
                          <template v-slot:default>
                            <thead>
                              <tr>
                                <th class="text-left" style="width : 20%">Product Lookup</th>
                                <th class="text-left" style="width : 20%">Catalogue</th>
                                <th class="text-left" style="width : 20%">Quantity</th>
                                <th class="text-left" style="width : 20%">Item Price</th>
                                <th class="text-left" style="width : 20%">Line Total</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr v-for="item in selected" :key="item.id">
                                <!-- <input type="hidden" v-model="form.product.id" > -->
                                <td>
                                  {{item.prod}}
                                </td>
                                <td>
                                  {{item.ava}}
                                </td>
                                <td>
                                    <v-text-field
                                    outlined
                                    dense
                                    v-model="cant"
                                    ></v-text-field>
                                </td>
                                <td> 
                                 {{item.unitprice}}
                                </td>
                                <td>
                                 {{item.unitprice * cant}}
                                </td>
                              </tr>
                            </tbody>
                          </template>
                        </v-simple-table>
                      </v-col>
                  </v-row>
                  <v-row>
                      <v-col cols="10" >
                      </v-col>
                      <v-col cols="2" >
                          <v-chip
                          label
                          class="float-right"
                          >
                              <v-row>
                                  <v-col cols="4">
                                      ORDER TOTAL
                                  </v-col>
                                  <v-col cols="4">
                                  </v-col>
                                  <v-col cols="4">
                                      {{total }}
                                  </v-col>
                              </v-row>
                          </v-chip>
                      </v-col>
                  </v-row>
                  <v-row>
                      <v-col cols="10" >
                      </v-col>
                      <v-col cols="2" >
                          <v-btn small class="mx-2 float-right" color="primary" type="submit" v-show="!updateSubmit">
                            <v-icon small>mdi-content-save</v-icon>
                            Guardar
                          </v-btn>
                      </v-col>
                  </v-row>
                </v-form>
              </v-card-text>
            </v-card>
          
  </v-layout>
</template>
<script lang="ts">
/* eslint-disable */ 
import Vue from 'vue'
import axios from 'axios'
export default Vue.extend({
   data () {
       return{
      date: new Date().toISOString().substr(0, 10),
      search: '',
      dialog: false,
      valid: true,
      name: '',
      singleSelect: false,
      selected: [],
      email: '',
      select: null,
      cant: 0,
      total: 0,
      form: {
          id: '',
          name: '',
          typedoc: '',
          nrodoc: '',
          shipadd: '',
          payment: '',
          ordcom: '',
          product: {
            id : '',
            name : '',
            price : '',
            cant : ''
          }
        },
      updateSubmit: false,
      erro: '',
      Order: '',
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
      /*modal*/
      headers: [
          {
            text: 'Product',
            align: 'start',
            sortable: false,
            value: 'prod',
          },
          { text: 'Availability', value: 'ava' },
          { text: 'Unit Price', value: 'unitprice' },
        ],
      product:[
          {
            id: 1,
            prod: 'Frozen Yogurt',
            ava: 10,
            unitprice: 9.99,
          },
          {
            id: 2,
            prod: 'Ice cream sandwich',
            ava: 15,
            unitprice: 19.99,
          },
          {
            id: 3,
            prod: 'Eclair',
            ava: 20,
            unitprice: 29.99,
          },
          {
            id: 4,
            prod: 'Cupcake',
            ava: 5,
            unitprice: 39.99,
          },
          {
            id: 5,
            prod: 'Gingerbread',
            ava: 10,
            unitprice: 49.99,
          },
          {
            id: 6,
            prod: 'Jelly bean',
            ava: 8,
            unitprice: 59.99,
          },
      ], 
      
      checkbox: false,
      menu1: false,
      menu2: false,
       }
    },

    mounted() {
      this.load()
    },

methods: {
    load(){
        axios.get('http://localhost:3000/order').then(res => {
            this.Order = res.data
            //console.log(this.Order);
        }).catch ((err) => {
            console.log(err);
        })
    },
    add(){
      
        this.erro = '';
        axios.post('http://localhost:3000/order/', this.form).then(res => {
          this.load()
          this.form.name = ''
          this.form.typedoc = ''
          this.form.nrodoc = ''
          this.form.shipadd = ''
          this.form.payment = ''
          this.form.ordcom = ''
          this.form.product.name = ''
          this.form.product.cant = ''
          this.form.product.price = ''
        })
      
    },
    
  }
  })
</script>