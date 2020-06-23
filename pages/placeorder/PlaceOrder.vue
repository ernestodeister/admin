<template>
  <v-layout column justify-center align-center >
      <v-card width="100%">
        <v-card-title class="headline">
          Place And Order
        </v-card-title>
        <v-card-text>
            <v-row>
                <v-col cols="5">
                    <v-form
                        ref="form"
                        v-model="valid"
                        lazy-validation
                    >
                        <v-row>
                            <v-col cols="4">
                                <v-subheader>Requested Delivery Date</v-subheader>
                            </v-col>
                            <v-col cols="8">
                                <v-menu
                                ref="menu1"
                                v-model="menu1"
                                :close-on-content-click="false"
                                transition="scale-transition"
                                offset-y
                                max-width="290px"
                                min-width="290px"
                                >
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-text-field
                                        v-model="dateFormatted"
                                        label=""
                                        persistent-hint
                                        v-bind="attrs"
                                        @blur="date = parseDate(dateFormatted)"
                                        v-on="on"
                                        ></v-text-field>
                                    </template>
                                    <v-date-picker v-model="date" no-title @input="menu1 = false"></v-date-picker>
                                </v-menu>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="4">
                                <v-subheader>PO Reference</v-subheader>
                            </v-col>
                            <v-col cols="8">
                                <v-text-field
                                label=""
                                value="12345"
                                ></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="4">
                                <v-subheader>Billing Address</v-subheader>
                            </v-col>
                            <v-col cols="8">
                                <v-select
                                v-model="select"
                                :items="test"
                                :rules="[v => !!v || 'Billing is required']"
                                label="Billing"
                                required
                                ></v-select>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="4">
                                <v-subheader>Shipping Address</v-subheader>
                            </v-col>
                            <v-col cols="8">
                                <v-select
                                v-model="select"
                                :items="test"
                                :rules="[v => !!v || 'Shipping is required']"
                                label="Shipping"
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
                                solo
                                name="input-7-4"
                                label=""
                                ></v-textarea>
                            </v-col>
                        </v-row>
                    </v-form>
                </v-col>
                <v-col cols="3">
                    
                </v-col>
                <v-col cols="4">
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
                <v-col cols="12" >
                  <v-simple-table dense>
                    <template v-slot:default>
                      <thead>
                        <tr>
                          <th class="text-left">Product Lookup</th>
                          <th class="text-left">Catalogue</th>
                          <th class="text-left">Quantity</th>
                          <th class="text-left">Item Price</th>
                          <th class="text-left">Line Total</th>
                          <th class="text-left">Delete</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="item in items" :key="item.prodlookup">
                          <td>
                            <v-text-field
                              outlined
                              label="Search"
                              prepend-inner-icon="mdi-magnify"
                            ></v-text-field>
                          </td>
                          <td>
                                <v-dialog v-model="dialog" persistent max-width="1000">
                                  <template v-slot:activator="{ on, attrs }">
                                    <v-btn
                                      text
                                      icon
                                      color="grey"
                                      dark
                                      v-bind="attrs"
                                      v-on="on"
                                    >
                                      <v-icon>mdi-format-list-bulleted</v-icon>
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
                                        item-key="prod"
                                        class="elevation-1"
                                        hide-default-footer
                                        :search="search"
                                        show-select
                                      >
                                        <template v-slot:item.ava="{ item }">
                                          <v-chip :color="getColor(item.ava)" dark>{{ item.ava }}</v-chip>
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
                          </td>
                          <td>
                            <v-col cols="3"  >
                              <v-text-field
                              label="No."
                              outlined
                              dense
                              ></v-text-field>
                            </v-col>
                          </td>
                          <td>{{ item.itemprice }}  </td>
                          <td>{{ item.linetotal }}  </td>
                          <td>
                            <v-icon>mdi-window-close</v-icon>
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
                                $0.00
                            </v-col>
                        </v-row>
                    </v-chip>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="10" >
                </v-col>
                <v-col cols="2" >
                    <v-btn class="float-right" depressed small color="primary">Submit Order</v-btn>
                </v-col>
            </v-row>

        </v-card-text>
      </v-card>
    
  </v-layout>
</template>

<script>
  export default {
    data: (vm) => ({
      search: '',
      dialog: false,
      valid: true,
      name: '',
      singleSelect: false,
      selected: [],
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      select: null,
      test: [
        'Bourne Gate 1',
        'Bourne Gate 2',
        'Bourne Gate 3',
        'Bourne Gate 4',
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
            prod: 'Frozen Yogurt',
            ava: 10,
            unitprice: 29.99,
          },
          {
            prod: 'Ice cream sandwich',
            ava: 15,
            unitprice: 29.99,
          },
          {
            prod: 'Eclair',
            ava: 20,
            unitprice: 29.99,
          },
          {
            prod: 'Cupcake',
            ava: 5,
            unitprice: 29.99,
          },
          {
            prod: 'Gingerbread',
            ava: 10,
            unitprice: 29.99,
          },
          {
            prod: 'Jelly bean',
            ava: 8,
            unitprice: 29.99,
          },
      ], 
      items: [
        {
          prodlookup: '',
          catalo: '',
          quant: 'NO',
          itemprice: 0.00,
          linetotal: 0.00,
          delete: '',
        },
        {
          prodlookup: '',
          catalo: '',
          quant: 'NO',
          itemprice: 0.00,
          linetotal: 0.00,
          delete: '',
        },
      ],
      checkbox: false,
      date: new Date().toISOString().substr(0, 10),
      dateFormatted: vm.formatDate(new Date().toISOString().substr(0, 10)),
      menu1: false,
      menu2: false,
    }),

    computed: {
      computedDateFormatted () {
        return this.formatDate(this.date)
      },
    },

    watch: {
      date (val) {
        this.dateFormatted = this.formatDate(this.date)
      },
    },

    methods: {
      formatDate (date) {
        if (!date) return null

        const [year, month, day] = date.split('-')
        return `${month}/${day}/${year}`
      },
      parseDate (date) {
        if (!date) return null

        const [month, day, year] = date.split('/')
        return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
      },
      getColor (calories) {
        if (calories < 10) return 'red lighten-4'
        else if (calories < 5) return 'orange lighten-4'
        else return 'light-green lighten-4'
      },
    },
  }
</script>