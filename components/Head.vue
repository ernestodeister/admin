<template>
<div class="width d-none d-sm-flex">
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
                <div class="d-none d-md-flex">BACK TI LIST</div>
            </v-btn>
        </v-col>
        <v-col cols="1">
            <v-btn class="ma-2" text icon color="gray">
                <v-icon>mdi-file-excel</v-icon>
                <div class="d-none d-md-flex">CVS</div>
            </v-btn>
        </v-col>
        <v-col cols="1">
            <v-btn class="ma-2" text icon color="gray">
                <v-icon>mdi-file-pdf</v-icon>
                <div class="d-none d-md-flex">PDF</div>
            </v-btn>
        </v-col>
        <v-col cols="1">
            <v-btn class="ma-2" text icon color="gray">
                <v-icon>mdi-printer</v-icon>
                <div class="d-none d-md-flex">Print</div>
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
