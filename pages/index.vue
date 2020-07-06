<template>
  <v-layout column>
    <!--    <v-flex xs12 sm8 md6>-->
    <v-row>
      <v-col md="4" xs="12">
        <v-row>
          <v-card class="mx-auto">
            <v-row align="center">
              <v-col md="8" xs="12" class="py-0">
                <v-card-title>
                  Place an order
                </v-card-title>
                <v-card-subtitle>
                  Search products and create order lines
                </v-card-subtitle>
              </v-col>
              <v-col md="4" xs="12" class="py-2 px-2" align="center">
                <v-btn color="primary" nuxt to="/inspire" x-large>
                  <v-icon large>mdi-cart-outline</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-card>
        </v-row>
        <v-row class="py-2">
          <v-card class="mx-auto">
            <v-row align="center">
              <v-col md="8" xs="12" class="py-0">
                <v-card-title>
                  Make a Payment
                </v-card-title>
                <v-card-subtitle>
                  Credit card, Paypal, Worldpay, Account
                </v-card-subtitle>
              </v-col>
              <v-col md="4" xs="12" class="py-2 px-2" align="center">
                <v-btn color="primary" nuxt to="/inspire" x-large>
                  <v-icon large>mdi-credit-card-outline</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-card>
        </v-row>
      </v-col>
      <v-col>
        <v-row class="px-4">
          <v-card
            class="d-inline-block mx-auto"
            :height="this.$vuetify.breakpoint.smAndDown ? '140px' : '230px'"
            :width="this.$vuetify.breakpoint.smAndDown ? '100%' : '225px'"
          >
            <v-card-text class="light_primary"></v-card-text>
            <v-card-subtitle>
              <v-icon>mdi-alert-circle-outline</v-icon>
              Past Due
            </v-card-subtitle>
            <v-card-actions class="card-actions">
              <h2>€ 1,423</h2>
            </v-card-actions>
          </v-card>
          <v-spacer></v-spacer>
          <v-card
            class="d-inline-block mx-auto"
            :height="this.$vuetify.breakpoint.smAndDown ? '140px' : '230px'"
            :width="this.$vuetify.breakpoint.smAndDown ? '100%' : '225px'"
          >
            <v-card-text class="primary white--text"></v-card-text>
            <v-card-subtitle>
              <v-icon>mdi-av-timer</v-icon>
              Due soon
            </v-card-subtitle>
            <v-card-actions class="card-actions">
              <h2>€ 23,423</h2>
            </v-card-actions>
          </v-card>
          <v-spacer></v-spacer>
          <v-card
            class="d-inline-block mx-auto"
            :height="this.$vuetify.breakpoint.smAndDown ? '140px' : '230px'"
            :width="this.$vuetify.breakpoint.smAndDown ? '100%' : '225px'"
          >
            <v-card-text class="dark_primary"></v-card-text>
            <v-card-subtitle>
              <v-icon>mdi-flag-outline</v-icon>
              Total Oustanding
            </v-card-subtitle>
            <v-card-actions class="card-actions">
              <h2>€ 61,423</h2>
            </v-card-actions>
          </v-card>
        </v-row>
      </v-col>
    </v-row>

    <!--           Second row        -->
    <!--    ***********************  -->
    <v-row>
      <!--    Orders table-->
      <v-col>
        <v-card>
          <v-card-subtitle>
            <v-container px-6 py-0>
              <v-row align="center">
                Last 5 Orders
                <v-spacer />
                <span class="group pa-2 primary">
                  <v-icon dark>mdi-cart</v-icon>
                </span>
              </v-row>
            </v-container>
          </v-card-subtitle>
          <v-divider></v-divider>
          <v-card-text>
            <v-simple-table>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left">Sales number</th>
                    <th class="text-left">Order date</th>
                    <th class="text-left">Status</th>
                    <th class="text-right"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>114647</td>
                    <td>28/06/2020</td>
                    <td>Shipped</td>
                    <td>
                      <v-icon>mdi-dots-vertical</v-icon>
                    </td>
                  </tr>
                  <tr>
                    <td>564647</td>
                    <td>21/03/2020</td>
                    <td>Open</td>
                    <td>
                      <span pa-0 ma-0>
                        <v-icon>mdi-dots-vertical</v-icon>
                      </span>
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-card-text>
        </v-card>
      </v-col>

      <!--  Next deliveries due table-->
      <v-col>
        <v-card>
          <v-card-subtitle>
            <v-container px-6 py-0>
              <v-row>
                Next 5 Deliveries due
                <v-spacer />
                <span class="group pa-2 primary">
                  <v-icon dark>mdi-truck-delivery-outline</v-icon>
                </span>
              </v-row>
            </v-container>
          </v-card-subtitle>
          <v-divider></v-divider>
          <v-card-text>
            <v-simple-table>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left">Delivery number</th>
                    <th class="text-left">Due Date</th>
                    <th class="text-left">Status</th>
                    <th class="midh-text"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>564647</td>
                    <td>28/06/2020</td>
                    <td>Out for delivery</td>
                    <td><v-icon>mdi-dots-vertical</v-icon></td>
                  </tr>
                  <tr>
                    <td>564647</td>
                    <td>28/06/2020</td>
                    <td>Out for delivery</td>
                    <td>
                      <span pa-0 ma-0>
                        <v-icon>mdi-dots-vertical</v-icon>
                      </span>
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-card-text>
        </v-card>
      </v-col>

      <!--  Oustanding payments table-->
      <v-col>
        <TopFiveList
          :invoices="outstanding.invoices"
          :headers="outstanding.headers"
          :title="outstanding.title"
          :icon="outstanding.icon"
        />
      </v-col>
    </v-row>
  </v-layout>
</template>

<script>
import TopFiveList from '@/components/dashboard/TopFiveList.vue'
export default {
  components: { TopFiveList },
  computed: {
    isSmall() {
      return this.$vuetify.breakpoint.smAndDown
    },
    size() {
      const size = { xs: 'x-small', sm: 'small', lg: 'large', xl: 'x-large' }[
        this.$vuetify.breakpoint.name
      ]
      return size ? { [size]: true } : {}
    }
  },
  data: () => ({
    outstanding: {
      title: 'Oustanding Payments',
      icon: 'mdi-cash',
      invoices: [
        {
          invoice_number: 346253,
          due_date: '10/04/2020',
          Amount: 6
        },
        {
          invoice_number: 233724,
          due_date: '09/05/2019',
          Amount: 10
        },
        {
          invoice_number: 34234,
          due_date: '11/08/2018',
          Amount: 31
        },
        {
          invoice_number: 134234,
          due_date: '06/04/2020',
          Amount: 25
        },
        {
          invoice_number: 745645,
          due_date: '03/11/2019',
          Amount: 198
        }
      ],
      headers: [
        { text: 'Invoice Number', value: 'invoice_number', sortable: false },
        { text: 'Due date', value: 'due_date', sortable: false },
        { text: 'Amount', value: 'Amount', sortable: false, align: 'center' },
        { text: '', value: 'actions', sortable: false, align: 'center' }
      ]
    }
  })
}
</script>

<style scoped>
.card-actions {
  position: absolute;
  bottom: 0;
}
</style>
