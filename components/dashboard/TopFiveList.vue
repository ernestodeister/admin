<template>
  <v-card>
    <v-card-subtitle>
      <v-container px-6 py-0>
        <v-row align="center">
          {{ title }}
          <v-spacer />
          <span class="group pa-2 primary">
            <v-icon dark>{{ icon }}</v-icon>
          </span>
        </v-row>
      </v-container>
    </v-card-subtitle>
    <v-divider></v-divider>
    <v-card-text>
      <v-data-table
        :headers="headers"
        :items="invoices"
        hide-default-footer
        dense
        fixed-header
      >
        <template v-slot:top>
          <v-dialog v-model="dialog" max-width="500px">
            <v-card>
              <v-card-title>
                <span class="headline">Information</span>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.invoice_number"
                        label="Invoice Number"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </template>
        <template v-slot:item.actions="{ item }">
          <v-icon small class="mr-2" @click="editItem(item)">
            mdi-dots-vertical
          </v-icon>
        </template>
      </v-data-table>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'TopFiveList',
  props: ['invoices', 'headers', 'title', 'icon'],
  data: () => ({
    dialog: false,
    editedItem: {
      invoice_number: '',
      due_date: 0,
      Amount: 0
    }
  }),

  computed: {},

  watch: {
    dialog(val) {
      val || this.close()
    }
  },
  methods: {
    editItem(item) {
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    close() {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
      })
    }
  }
}
</script>
