<template>

  <v-row justify="center">
        <v-col cols="12" sm="4" align="center"  class="mt-8">
            <span class="white-text"><h4>Say Hi</h4></span>
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
                        placeholder="Name"
                        type="text"
                        v-model="form.name"
                        :rules="nameRules"
                        required
                    ></v-text-field>
                    <v-text-field
                        placeholder="Email"
                        type="email"
                        v-model="form.email"
                        :rules="emailRules"
                        required
                    ></v-text-field>
                    <v-radio-group v-model="form.gender">
                        <v-radio
                            label="Female"
                            color="orange darken-3"
                            value="F"
                        ></v-radio>
                        <v-radio
                            label="Male"
                            color="orange darken-3"
                            value="M"
                        ></v-radio>
                    </v-radio-group>
                    <v-textarea
                        class="text-input-blue"
                        label="Your comment"
                        v-model="form.content"
                        rows="2"
                        :rules="contentRules"
                    ></v-textarea>
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
                        class="mr-4"
                        @click="submitData"
                        :loading='btnLoading'
                        outlined
                    >
                        Submit
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
        name: "Contact",
        data: () => (
            { 
                valid: true,
                btnLoading: false,
                errors: [],
                genderItems: ['Foo', 'Bar', 'Fizz', 'Buzz'],
                form: {
                    email: null,
                    name: null,
                    gender: null,
                    content: null,
                },
                emailRules: [
                    v => !!v || 'E-mail is required',
                    v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
                ],
                nameRules: [
                    v => !!v || 'Name is required',
                ],
                contentRules: [
                    (v) => (v && v.length >= 5) || 'Your comment is too short'
                ],
            }
        ),
        computed: {
        },        
        mounted() {
            console.log('Login page mounted.')
        },
        methods: {
            submitData () {
                this.btnLoading = true;
            },
        },
    }
</script>
