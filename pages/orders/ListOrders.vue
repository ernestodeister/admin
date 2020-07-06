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
            <v-data-table
                :headers="headers"
                :items="orders"
                sort-by="state"
                class="elevation-1"
            >
                <template v-slot:top>
                <v-toolbar flat color="white">
                    <v-toolbar-title>My Orders</v-toolbar-title>
                    <v-divider
                    class="mx-4"
                    inset
                    vertical
                    ></v-divider>
                    <v-spacer></v-spacer>
                    <v-dialog v-model="dialog" max-width="500px">
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn
                        color="primary"
                        dark
                        class="mb-2"
                        v-bind="attrs"
                        v-on="on"
                        >New Orders</v-btn>
                    </template>
                    <v-card>
                        <v-card-title>
                        <span class="headline">{{ formTitle }}</span>
                        </v-card-title>

                        <v-card-text>
                        <v-container>
                            <v-row>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field v-model="editedItem.norder" label="N° Order"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field v-model="editedItem.salesnumber" label="Sales Number"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field v-model="editedItem.billto" label="Bill to"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field v-model="editedItem.shipto" label="Ship to"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field v-model="editedItem.state" label="State"></v-text-field>
                            </v-col>
                            </v-row>
                        </v-container>
                        </v-card-text>

                        <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
                        <v-btn color="blue darken-1" text @click="save">Save</v-btn>
                        </v-card-actions>
                    </v-card>
                    </v-dialog>
                </v-toolbar>
                </template>
                <template v-slot:item.actions="{ item }">
                <!-- <v-icon
                    small
                    class="mr-2"
                    @click="editItem(item)"
                >
                    mdi-pencil
                </v-icon> -->
                <v-btn class="ma-2" text icon color="gray" :to="'DetailOrder'">
                    <v-icon smallclass="mr-2">mdi-pencil</v-icon>
                </v-btn>
                <v-icon
                    class="ma-2"
                    small
                    @click="deleteItem(item)"
                >
                    mdi-delete
                </v-icon>
                </template>
                <template v-slot:no-data>
                <v-btn color="primary" @click="initialize">Reset</v-btn>
                </template>
            </v-data-table>


        </v-card-text>
        <!-- <v-card-actions>
          <v-spacer />
          <v-btn color="primary" nuxt to="/inspire">
            Continue
          </v-btn>
        </v-card-actions> -->
      </v-card>
    
  </v-layout>
</template>

<script>
  export default {
    data: () => ({
      dialog: false,
      headers: [
        {
          text: 'N° Order',
          align: 'start',
          sortable: false,
          value: 'norder',
        },
        //{ text: 'N° Order', value: 'norder' },
        { text: 'Sales Numer', value: 'salesnumber' },
        { text: 'Bill to', value: 'billto' },
        { text: 'Ship to', value: 'shipto' },
        { text: 'State', value: 'state', sortable: false },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      orders: [],
      editedIndex: -1,
      editedItem: {
        norder: '',
        salesnumber: 0,
        billto: '',
        shipto: '',
        state: '',
      },
      defaultItem: {
        norder: '',
        salesnumber: 0,
        billto: '',
        shipto: '',
        state: '',
      },
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Order' : 'Edit Order'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
    },

    created () {
      this.initialize()
    },

    methods: {
      initialize () {
        this.orders = [
          {
            norder: 'N° 00001',
            salesnumber: 9658426,
            billto: 'Jhon Doe',
            shipto: 'Jhon Doe',
            state: 'cancelled',
          },
          {
            norder: 'N° 00002',
            salesnumber: 9505621,
            billto: 'Jhon Doe',
            shipto: 'Jhon Doe',
            state: 'pending',
          },
          {
            norder: 'N° 00002',
            salesnumber: 9505621,
            billto: 'Jhon Doe',
            shipto: 'Jhon Doe',
            state: 'pending',
          },
          {
            norder: 'N° 00001',
            salesnumber: 9658426,
            billto: 'Jhon Doe',
            shipto: 'Jhon Doe',
            state: 'cancelled',
          },
          {
            norder: 'N° 00002',
            salesnumber: 9505621,
            billto: 'Jhon Doe',
            shipto: 'Jhon Doe',
            state: 'pending',
          },
          {
            norder: 'N° 00001',
            salesnumber: 9658426,
            billto: 'Jhon Doe',
            shipto: 'Jhon Doe',
            state: 'cancelled',
          },
          {
            norder: 'N° 00002',
            salesnumber: 9505621,
            billto: 'Jhon Doe',
            shipto: 'Jhon Doe',
            state: 'pending',
          },
          {
            norder: 'N° 00001',
            salesnumber: 9658426,
            billto: 'Jhon Doe',
            shipto: 'Jhon Doe',
            state: 'cancelled',
          },
          {
            norder: 'N° 00002',
            salesnumber: 9505621,
            billto: 'Jhon Doe',
            shipto: 'Jhon Doe',
            state: 'pending',
          },
          {
            norder: 'N° 00001',
            salesnumber: 9658426,
            billto: 'Jhon Doe',
            shipto: 'Jhon Doe',
            state: 'cancelled',
          },
        ]
      },

      deleteItem (item) {
        const index = this.orders.indexOf(item)
        confirm('Are you sure you want to delete this item?') && this.orders.splice(index, 1)
      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.orders[this.editedIndex], this.editedItem)
        } else {
          this.orders.push(this.editedItem)
        }
        this.close()
      },
    },
  }
</script>
