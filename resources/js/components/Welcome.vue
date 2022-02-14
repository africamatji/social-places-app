<template>
  <v-row>
      <v-col cols="12">
          Welcome page
      </v-col>
  </v-row>
</template>

<script>
    export default {
        name: "Welcome",
        data: () => (
            { 
                value: 1 
            }
        ),
        computed: {
        },        
        mounted() {
            console.log('Welcome page mounted.')
        }
    }
</script>
