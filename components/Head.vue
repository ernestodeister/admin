<template>
<div class="width">
    <v-row>
        <v-col cols="8">
            <v-row class="margin">
                <v-icon>mdi-newspaper</v-icon>
                <h2 class="margin">Orders > 9685742</h2>
            </v-row>
        </v-col>
        <v-col cols="1">
            <v-btn class="ma-2" text icon color="gray">
                <v-icon>mdi-keyboard-backspace</v-icon>
                BACK TI LIST
            </v-btn>
        </v-col>
        <v-col cols="1">
            <v-btn class="ma-2" text icon color="gray">
                <v-icon>mdi-file-excel</v-icon>
                CVS
            </v-btn>
        </v-col>
        <v-col cols="1">
            <v-btn class="ma-2" text icon color="gray">
                <v-icon>mdi-file-pdf</v-icon>
                PDF
            </v-btn>
        </v-col>
        <v-col cols="1">
            <v-btn class="ma-2" text icon color="gray">
                <v-icon>mdi-printer</v-icon>
                Print
            </v-btn>
        </v-col>
        
    </v-row>
</div>

  
</template>

<script>
export default {
    name: 'Head',
}
</script>
<style>
.width{
    width: 100%;
}
.margin{
    margin-left: 1%;
}

</style>
