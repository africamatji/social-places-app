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
                    <v-radio-group :rules="required" v-model="form.gender">
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
                valid: false,
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
                required: [
                    (v) => (v && v.length > 0) || "Required"
                ],
            }
        ),
        computed: {
        },        
        mounted() {
            console.log('Login page mounted.')
        },
        methods: {
            async submitData () {
                if (this.$refs.form.validate()) {
                    this.btnLoading = true;
                    /*console.log('this.form.name', this.form.name);
                    console.log('email', this.form.email);
                    console.log('gender', this.form.gender);
                    console.log('content', this.form.content);*/
                    
                    const formData = new FormData();
                    formData.append('name', this.form.name);
                    formData.append('email', this.form.email);
                    formData.append('gender', this.form.gender);
                    formData.append('content', this.form.content);

                    const resp = await this.$api.createContact(formData);
                    console.log('resp', resp);  
                }
                this.btnLoading = false;
            },
        },
    }
</script>
