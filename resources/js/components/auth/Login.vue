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
                    <v-col cols="12" v-if="showResponse">
                        <v-alert
                            color="green"
                            dismissible
                            type="success"
                        >
                            {{ responseMessage }}
                        </v-alert>
                    </v-col>
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
                showResponse: false,
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
            async submitData () {
                if (this.$refs.form.validate()) {
                    this.btnLoading = true;
                    
                    const formData = new FormData();
                    formData.append('email', this.form.email);
                    formData.append('password', this.form.password);

                    const resp = await this.$api.adminLogin(formData);

                    if (resp.status === 200) {
                        this.$router.push('/admin/dashboard')
                    } else {
                        this.showResponse = true;
                        this.responseMessage = 'Error loggin in';
                    }
                }
                this.btnLoading = false;
            },
        },
    }
</script>
