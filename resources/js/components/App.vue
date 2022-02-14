<template>
  <v-row>
      <v-col cols="12">
        <v-main class="mt-2">
            <router-view />
        </v-main>
      </v-col>
      <v-col cols="12">
          <v-bottom-navigation
            bottom fixed
            v-model="value"
            background-color="#43375b"
            dark
            shift
            color="#fff"
         >  
            <v-btn class="v-btn" @click="$router.push('/')">
                <span>Email Us</span>
                <v-icon x-large color="#fff">mdi-email</v-icon>
            </v-btn>
            <v-btn class="v-btn" @click="$router.push('/login')">
                <span>Admin Login</span>
                <v-icon x-large color="#fff">mdi-lock</v-icon>
            </v-btn>
            <v-btn class="v-btn" @click="$router.push('/about')">
                <span >About</span>
                <v-icon x-large color="#fff">mdi-ghost</v-icon>
            </v-btn>  
  </v-bottom-navigation>
  
      </v-col>
  </v-row>
</template>

<script>
    export default {
        name: "App",
        data: () => ({ value: 0 })
    }
</script>
<style scoped>
    .v-btn {
         min-width: 30% !important;
    }
</style>
