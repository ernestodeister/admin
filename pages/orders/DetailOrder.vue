<template>

  <v-layout column justify-center align-center >
    <Head/>
      <v-card width="100%">
        <v-card-title class="headline">
          Sales Number : 9685744
        </v-card-title>
        <v-card-text>
            <v-row>
                <v-col cols="3">
                    <p>
                        Bill to <br>
                        Jhon Doe
                        Codeless Plataforms, 25 Boume Valley Road, <br>
                        Poole, BH12 1DY
                    </p>
                </v-col>
                <v-col cols="7">
                    <p>
                        Ship to <br>
                        Jhon Doe
                        Codeless Plataforms, 25 Boume Valley Road, <br>
                        Poole, BH12 1DY
                    </p>
                </v-col>
                <v-col cols="2">
                    <p>
                        Order Date: 05/07/2018 <br>
                        Order Status: Open<br>
                        PO Ref No: #ASD-987654<br>
                    </p>
                </v-col>
            </v-row>
          <v-data-table
            :headers="headers"
            :items="items"
            hide-default-footer
            class="elevation-1"
          >
            <template v-slot:header.name="{ header }">
            {{ header.text.toUpperCase() }}
            </template>
          </v-data-table>
            <v-row>
                <v-col cols="10">
                </v-col>
                <v-col cols="2">
                    <p>
                        Sub-Total: $3.200 <br>
                        Discount: 0.00%<br>
                        VAT: 20.00%<br>
                    </p>
                </v-col>
            </v-row>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" nuxt to="/inspire">
            Continue
          </v-btn>
        </v-card-actions>
      </v-card>
    
  </v-layout>
</template>

<script>
import Head from '@/components/Head.vue'
export default {
    components: {
    Head
    },
    data: () => ({
      headers: [
        {
          text: '#',
          align: 'start',
          value: 'number',
        },
        { text: 'Item Name', value: 'item' },
        { text: 'Description', value: 'descrip' },
        { text: 'Quantity', value: 'quanti' },
        { text: 'Shipped Quantity', value: 'shipquanti' },
        { text: 'Price', value: 'price' },
      ],
      items: [
        {
          number: '3625',
          item: 'Glass Vase',
          descrip: 'Loren ipsum dolor sit amet Consectetur',
          quanti: 20,
          shipquanti: 20,
          price: 824,
        },
        {
          number: '5874',
          item: 'Ligth bulbs LED 501',
          descrip: 'Loren ipsum dolor sit amet Consectetur',
          quanti: 20,
          shipquanti: 10,
          price: 824,
        },
        {
          number: '1452',
          item: 'Desk Fan 20"',
          descrip: 'Loren ipsum dolor sit amet Consectetur',
          quanti: 20,
          shipquanti: 12,
          price: 824,
        },
        {
          number: '3652',
          item: 'Leather desk chair executive style - Black',
          descrip: 'Loren ipsum dolor sit amet Consectetur',
          quanti: 20,
          shipquanti: 20,
          price: 824,
        },
      ],
    }),
  }
</script>
