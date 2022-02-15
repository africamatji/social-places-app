<template>
  <v-row justify="center">
        <v-toolbar dense>
            <v-app-bar-nav-icon></v-app-bar-nav-icon>

            <v-toolbar-title>Dashboard</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn icon @click="doLogout">
                <span>Logout</span>
                <v-icon>mdi-lock</v-icon>
            </v-btn>
 
            <v-btn icon>
            <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
        </v-toolbar>
      <v-col cols="12">
          <v-row justify="center">
              <v-col cols="8">
                  <h2>Admin Dashboard</h2>
              </v-col>
              <v-col cols="8">
                  <v-row>
                      <v-col cols="6">
                        <v-text-field
                            v-model="search"
                            label="Search"
                            class="mx-4"
                        ></v-text-field>   
                      </v-col>
                      <v-col cols="6">
                          <span>Filter by Gender</span>
                        <v-radio-group row v-model="gender">
                            
                            <v-radio
                                label="Male"
                                color="orange darken-3"
                                value="M"
                            ></v-radio>
                            <v-radio
                                label="Female"
                                color="orange darken-3"
                                value="F"
                            ></v-radio>
                            <v-radio
                                label="All"
                                color="orange darken-3"
                                value=""
                            ></v-radio>
                         </v-radio-group>
                      </v-col>
                  </v-row>
              </v-col>
              <v-col cols="8">
                    <v-data-table
                    :headers="headers"
                    :items="dataItems"
                    :items-per-page="5"
                    :search="search"
                    class="elevation-1"
                    ></v-data-table>
              </v-col>
          </v-row>
      </v-col>
  </v-row>
</template>

<script>
    export default {
        name: "Dashboard",
        data () {
            return {
                search: '',
                gender: '',
                headers: [
                    { text: 'id', value: 'id' },
                    {
                        text: 'Name',
                        align: 'start',
                        value: 'name',
                    },
                    { text: 'email', value: 'email' },
                    { 
                        text: 'Gender', value: 'gender', 
                        filter: value => {
                            if (!this.gender) return true

                            return value == this.gender;
                        }
                    },
                    { text: 'Content', value: 'content' },
                ],
                dataItems: []
            };
        },
        async created () {
            const data = await this.$api.getContacts();
            this.dataItems = data.data;
        },
        methods: {
            doLogout () {
                this.$store.dispatch("unsetAdminUserDetails");
                this.$router.push('/login');
            },
        },
    }
</script>
