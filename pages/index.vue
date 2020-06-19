<template>
  <v-layout column>
    <!--    <v-flex xs12 sm8 md6>-->
    <v-row>
      <v-col cols="5">
        <v-row>
          <v-card class="d-inline-block mx-auto">
            <v-container>
              <v-row align="center">
                <v-col cols="auto py-0">
                  <v-card-title>
                    Place an order
                  </v-card-title>
                  <v-card-subtitle>
                    Search products and create order lines
                  </v-card-subtitle>
                </v-col>
                <v-col cols="py-0">
                  <v-btn color="primary" nuxt to="/inspire" x-large>
                    <v-icon large>mdi-cart-outline</v-icon>
                  </v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-row>
        <v-row class="py-2">
          <v-card class="d-inline-block mx-auto">
            <v-container>
              <v-row align="center">
                <v-col cols="auto" class="py-0">
                  <v-card-title>
                    Make a Payment
                  </v-card-title>
                  <v-card-subtitle>
                    Credit card, Paypal, Worldpay, Account
                  </v-card-subtitle>
                </v-col>
                <v-col cols="auto" class="py-0">
                  <v-btn color="primary" nuxt to="/inspire" x-large>
                    <v-icon large>mdi-credit-card-outline</v-icon>
                  </v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-row>
      </v-col>
      <v-col>
        <v-card class="d-inline-block mx-auto" height="100%" width="100%">
          <v-card-text class="light_primary"></v-card-text>
          <v-card-subtitle>
            <v-icon>mdi-alert-circle-outline</v-icon>
            Past Due
          </v-card-subtitle>
          <v-card-actions class="card-actions">
            <h2>€ 1,423</h2>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col>
        <v-card class="d-inline-block mx-auto" height="100%" width="100%">
          <v-card-text class="primary white--text"></v-card-text>
          <v-card-subtitle>
            <v-icon>mdi-av-timer</v-icon>
            Due soon
          </v-card-subtitle>
          <v-card-actions class="card-actions">
            <h2>€ 23,423</h2>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col>
        <v-card class="d-inline-block mx-auto" height="100%" width="100%">
          <v-card-text class="dark_primary"></v-card-text>
          <v-card-subtitle>
            <v-icon>mdi-flag-outline</v-icon>
            Total Oustanding
          </v-card-subtitle>
          <v-card-actions class="card-actions">
            <h2>€ 61,423</h2>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <!--           Second row        -->
    <!--    ***********************  -->
    <v-row>
      <!--    Orders table-->
      <v-col>
        <v-card>
          <v-card-subtitle>
            <v-container px-6>
              <v-row>
                Last 5 Orders
                <v-spacer />
                <v-icon>mdi-cart</v-icon>
              </v-row>
            </v-container>
          </v-card-subtitle>
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
                    <td>564647</td>
                    <td>28/06/2020</td>
                    <td>Shipped</td>
                    <td>...</td>
                  </tr>
                  <tr>
                    <td>564647</td>
                    <td>21/03/2020</td>
                    <td>Open</td>
                    <td>...</td>
                  </tr>
                  <tr>
                    <td>564647</td>
                    <td>28/06/2020</td>
                    <td>Open</td>
                    <td>...</td>
                  </tr>
                  <tr>
                    <td>564647</td>
                    <td>28/06/2020</td>
                    <td>Shipped</td>
                    <td>...</td>
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
            <v-container px-6>
              <v-row>
                Next 5 Deliveries due
                <v-spacer />
                <v-icon>mdi-truck-delivery-outline</v-icon>
              </v-row>
            </v-container>
          </v-card-subtitle>
          <v-card-text>
            <v-simple-table>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left">Delivery number</th>
                    <th class="text-left">Due Date</th>
                    <th class="text-left">Status</th>
                    <th class="text-right"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>564647</td>
                    <td>28/06/2020</td>
                    <td>Out for delivery</td>
                    <td>...</td>
                  </tr>
                  <tr>
                    <td>564647</td>
                    <td>28/06/2020</td>
                    <td>Out for delivery</td>
                    <td>...</td>
                  </tr>
                  <tr>
                    <td>564647</td>
                    <td>11/06/2020</td>
                    <td>Out for delivery</td>
                    <td>...</td>
                  </tr>
                  <tr>
                    <td>564647</td>
                    <td>09/06/2020</td>
                    <td>Dispatched</td>
                    <td>...</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-card-text>
        </v-card>
      </v-col>

      <!--  Oustanding payments table-->
      <v-col>
        <v-card>
          <v-card-subtitle>
            <v-container px-6>
              <v-row>
                Oustanding payments
                <v-spacer />
                <v-icon>mdi-cash</v-icon>
              </v-row>
            </v-container>
          </v-card-subtitle>
          <v-card-text>
            <v-simple-table>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left">Invoice number</th>
                    <th class="text-left">Due Date</th>
                    <th class="text-left">Amount</th>
                    <th class="text-right"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>564647</td>
                    <td>28/06/2020</td>
                    <td>€ 353.4</td>
                    <td>...</td>
                  </tr>
                  <tr>
                    <td>564647</td>
                    <td>28/06/2020</td>
                    <td>€ 5322.4</td>
                    <td>...</td>
                  </tr>
                  <tr>
                    <td>564647</td>
                    <td>11/06/2020</td>
                    <td>€ 112.3</td>
                    <td>...</td>
                  </tr>
                  <tr>
                    <td>564647</td>
                    <td>09/06/2020</td>
                    <td>€ 645.1</td>
                    <td>...</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-layout>
</template>

<script>
export default {
  components: {}
}
</script>

<style scoped>
.card-actions {
  position: absolute;
  bottom: 0;
}
</style>
