<template>
  <v-container style="max-width: 900px; margin-top: 15px">
    <v-row no-gutters>
      <v-col cols="3">
        <v-card>
          <v-tabs vertical color="black">
            <v-tab v-for="i in tabs_title" :key="i.title">{{ i.title }}</v-tab>
          </v-tabs>
          <v-card-actions>
            <v-card-text style="text-align: center; margin-bottom: 50px">
              <a>Switch to Professional Account</a>
            </v-card-text>
          </v-card-actions>
          <v-divider />
          <v-card-title class="pt-6">
            <v-img
              src="../assets/Meta_Platforms_Inc._logo.svg.png"
              max-width="70px"
            />
          </v-card-title>
          <v-card-subtitle class="py-3" style="font-size: 15px">
            <a>Accounts Center</a>
          </v-card-subtitle>
          <v-card-text style="font-size: 12px">
            Control settings for connected experiences across Instagram, the
            Facebook app and Messenger, including story and post sharing and
            logging in.
          </v-card-text>
        </v-card>
      </v-col>
      <v-col>
        <v-form>
          <v-card>
            <v-card-text>
              <v-row>
                <v-col cols="4" class="text-field-title">
                  <v-img
                    src="https://th.bing.com/th/id/OIP.shveWJhhIurni9KOa-0tdAAAAA?pid=ImgDet&rs=1"
                    style="border-radius: 50%"
                    max-width="70px"
                  ></v-img>
                </v-col>
                <v-col>
                  <v-card-title>User name</v-card-title>
                  <v-card-subtitle><a>Change profile photo</a></v-card-subtitle>
                </v-col>
              </v-row>
            </v-card-text>
            <v-card-actions class="d-block mr-12">
              <v-row>
                <v-col cols="4" class="text-field-title">
                  <v-card-title>Name</v-card-title>
                </v-col>
                <v-col>
                  <v-text-field outlined hide-details></v-text-field>
                  <v-subheader
                    >Help people discover your account by using the name you're
                    known by: either your full name, nickname, or business
                    name.</v-subheader
                  >
                  <v-subheader
                    >You can only change your name twice within 14
                    days.</v-subheader
                  >
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="4" class="text-field-title">
                  <v-card-title>UserName</v-card-title>
                </v-col>
                <v-col>
                  <v-text-field outlined hide-details></v-text-field>
                  <v-subheader>
                    In most cases, you'll be able to change your username back
                    to 'user name' for another 14 days.</v-subheader
                  >
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="4" class="text-field-title">
                  <v-card-title>Websites</v-card-title>
                </v-col>
                <v-col>
                  <v-text-field outlined hide-details></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="4" class="text-field-title">
                  <v-card-title>Bio</v-card-title>
                </v-col>
                <v-col>
                  <v-textarea outlined></v-textarea>
                  <v-subheader>Personal Information</v-subheader>
                  <v-subheader
                    >Provide your personal information, even if the account is
                    used for a business, a pet or something else. This won't be
                    a part of your public profile.</v-subheader
                  >
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="4" class="text-field-title">
                  <v-card-title>Email</v-card-title>
                </v-col>
                <v-col>             
                  <v-text-field outlined hide-details></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="4" class="text-field-title">
                  <v-card-title>Phone Number</v-card-title>
                </v-col>
                <v-col>
                  <v-text-field outlined hide-details></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="4" class="text-field-title">
                  <v-card-title>Gender</v-card-title>
                </v-col>
                <v-col>
                  <v-text-field outlined hide-details></v-text-field>
                </v-col>
              </v-row>
            </v-card-actions>
          </v-card>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class EditAccount extends Vue {
  tabs_title: any[] = [
    { title: "Edit Profile" },
    { title: "Change Password" },
    { title: "Apps and Websites" },
    { title: "Email Notifications" },
    { title: "Push notifications" },
    { title: "Manage Contacts" },
    { title: "Privacy and Security" },
    { title: "Login Activity" },
    { title: "Emails from Instagram" },
    { title: "Help" },
  ];
}
</script>

<style scoped>
.v-tab {
  justify-content: start;
  text-transform: capitalize;
  padding: 20px;
}

.text-field-title {
  display: flex;
  justify-content: end;
  align-items: flex-start;
}

.text-field-title .v-card__title {
  font-size: 15px;
}

.v-input__slot {
  min-height: 0px;
}
</style>