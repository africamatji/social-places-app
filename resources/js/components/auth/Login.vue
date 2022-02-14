<template>

  <v-row justify="center">
        <v-col cols="12" sm="4" align="center"  class="mt-8">
            <span class="white-text"><h4>Admin Login</h4></span>
        </v-col>
      <v-col cols="12">
          <v-row>
              <v-col>
                <v-form
                    ref="form"
                    v-model="valid"
                    lazy-validation
                 >
            <v-row justify="center">
                <v-col cols="8" class="mt-8">
                    <v-text-field
                        placeholder="Email"
                        type="email"
                        v-model="form.email"
                        solo-inverted
                        :rules="emailRules"
                        required
                    ></v-text-field>
                    <v-text-field
                        placeholder="Password"
                        type="password"
                        v-model="form.password"
                        solo-inverted
                        :rules="passwordRules"
                        required
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-row v-if="errors">
                <v-col v-for="error in errors" v-bind:key="error">
                    <v-alert
                        dense
                        outlined
                        type="error"
                    >
                        {{ error }}
                    </v-alert>
                </v-col>
            </v-row>
            <v-row>
                <!--<v-col sm="6">
                    <v-btn text plain to="/register">Create an Account</v-btn>
                </v-col>-->
                <v-col sm="6" align="right">
                    <v-btn
                        :disabled="!valid"
                        color="primary"
                        class="mr-4"
                        @click="submitData"
                        :loading='btnLoading'
                        plain
                        outlined
                    >
                        Login
                    </v-btn>
                </v-col>
            </v-row>
    </v-form>
              </v-col>
          </v-row>
    </v-col>
  </v-row>
</template>

<script>
    export default {
        name: "Login",
        data: () => (
            { 
                valid: true,
                btnLoading: false,
                errors: [],
                form: {
                    email: null,
                    password: null,
                },
                emailRules: [
                    v => !!v || 'E-mail is required',
                    v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
                ],
                passwordRules: [
                    v => !!v || 'Password is required',
                ],
            }
        ),
        methods: {
            submitData () {

            },
        },
    }
</script>
