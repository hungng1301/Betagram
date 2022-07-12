<template>
  <v-app>
    <v-main class="grey lighten-5">
      <v-container>
        <v-form class="form-login">
          <v-card outlined class="login-box">
            <v-card-actions class="d-block mx-9">
              <v-card-title class="title-font">Betagram</v-card-title>
              <v-text-field
                v-model="login_name"
                class="my-3"
                height="10px"
                filled
                outlined
                hide-details
                dense
              >
                <template v-slot:label>
                  <span style="font-size: 13px">
                    Phone number, username or email
                  </span>
                </template>
              </v-text-field>
              <v-text-field
                v-model="password"
                class="mb-3"
                height="10px"
                filled
                outlined
                hide-details
                dense
                :type="show ? 'text' : 'password'"
                :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="show = !show"
              >
                <template v-slot:label>
                  <span style="font-size: 13px"> Password </span>
                </template>
              </v-text-field>

              <v-alert v-model="check" type="error" dismissible
                >Login name or password is incorrect</v-alert
              >

              <v-btn
                class="white--text"
                style="text-transform: none"
                color="#3e72ff"
                block
                @click="login"
                >Log In</v-btn
              >

              <v-card flat class="d-flex mt-5 mb-n7">
                <v-divider class="mt-2" />
                <v-subheader class="align-start">OR</v-subheader>
                <v-divider class="mt-2" />
              </v-card>
            </v-card-actions>
            <v-card-subtitle>
              <v-list-item>
                <v-list-item-subtitle>
                  <v-btn icon><Icon icon="logos:facebook" height="20" /></v-btn>
                  Log in with Facebook</v-list-item-subtitle
                >
              </v-list-item>
              <v-card-text class="mt-n3" style="font-size: 12px"
                >Forgot password?</v-card-text
              >
            </v-card-subtitle>
          </v-card>

          <v-card class="mt-3 mb-3" outlined>
            <v-card-title style="font-size: 15px"
              >Don't have an account? <a>Sign up</a>
            </v-card-title>
          </v-card>

          <v-card class="grey lighten-5" flat style="text-align: center">
            <v-card-subtitle>Get the app.</v-card-subtitle>
            <v-card-actions class="ml-6">
              <v-img
                class="mr-1"
                src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png"
                max-width="150px"
              />
              <v-img
                src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png"
                max-width="150px"
              />
            </v-card-actions>
          </v-card>
        </v-form>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { Icon } from "@iconify/vue2";
import { login_view_model } from "../view-model/login-view-model";

@Component({
  components: {
    Icon,
  },
})
export default class LoginComponent extends Vue {
  show = false;
  login_name = "";
  password = "";
  check = false;

  login() {
    login_view_model.login(this.login_name, this.password);
    this.check = login_view_model.check;
  }
}
</script>

<style scoped>
.container {
  max-width: 400px;
}

.form-login {
  margin-top: 100px;
}

.login-box {
  text-align: center;
}

.title-font {
  font-family: billabong;
  font-size: 50px;
  margin: 40px;
}

.v-card__title {
  justify-content: center;
}

@font-face {
  font-family: billabong;
  src: url(../assets/FontsFree-Net-Billabong.ttf);
 /* src: url(C:\Users\hungnd\Documents\GitHub\Betagram\Betagram\src\assets\FontsFree-Net-Billabong.ttf); */
}
</style>