<template>
  <v-container class="contain">
    <v-container class="pb-0">
      <v-card flat>
        <v-row>
          <v-col cols="3" class="px-10 py-8">
            <v-card flat>
              <v-avatar size="200px">
                <v-img :src="CurrentUser.user_ava" alt="User Avatar" />
              </v-avatar>
            </v-card>
          </v-col>
          <v-col>
            <v-card flat class="ml-7">
              <v-card-title
                >{{ CurrentUser.user_account_name }}
                <v-btn id="edit-btn" outlined class="mx-4">Edit profile</v-btn>
                <v-btn icon><Icon icon="tabler:settings" width="30px" /></v-btn>
              </v-card-title>
              <v-card-text>
                <v-row>
                  <v-col cols="2"> <strong>19</strong> post </v-col>
                  <v-col cols="2"> <strong>19</strong> followers </v-col>
                  <v-col cols="2"> <strong>19</strong> following </v-col>
                </v-row>
              </v-card-text>
              <v-card-title>{{ CurrentUser.user_name }}</v-card-title>
              <v-card-text
                >Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Pariatur tenetur veritatis placeat, molestiae impedit aut
                provident eum quo natus molestias?</v-card-text
              >
            </v-card>
          </v-col>
        </v-row>
      </v-card>
      <v-card flat>
        <v-slide-group show-arrows>
          <v-slide-item>
            <div class="story-card">
              <div class="story-items">
                <v-img
                  style="border-radius: 50%"
                  :src="CurrentUser.user_ava"
                  width="80"
                  height="80"
                />
              </div>
              <v-card-text>Story 1</v-card-text>
            </div>
          </v-slide-item>
        </v-slide-group>
      </v-card>
    </v-container>
    <v-divider class="mx-3" />
    <v-container class="pt-0">
      <template>
        <v-tabs centered color="black">
          <v-tab v-for="n in tabs" :key="n.name">
            <Icon :icon="n.icon" class="mr-1" />
            {{ n.name }}
          </v-tab>
          <!-- posts tab -->
          <v-tab-item>
            <v-container fluid>
              <v-row>
                <v-col v-for="n in 6" :key="n" cols="4" class="card-img">
                  <v-img
                    src="https://picsum.photos/510/300?random"
                    height="350"
                    width="300"
                  />
                </v-col>
              </v-row>
            </v-container>
          </v-tab-item>
          <!-- saved tab -->
          <v-tab-item>
            <v-container fluid>
              <v-card flat>
                <v-card-text class="top-text">
                  <p>Only you can see what you're saved</p>
                  <a style="display: flex"
                    ><Icon icon="mdi:plus" height="17px" />
                    <p>New Collection</p></a
                  >
                </v-card-text>
                <v-card-text>
                  <v-card class="bottom-text" width="400" flat>
                    <Icon icon="iconoir:bookmark-circled" height="100px" />
                    <v-card-subtitle style="font-size: 25px"
                      >Save</v-card-subtitle
                    >
                    <v-card-subtitle
                      >Save photos and videos that you want to see again. No one
                      is notified, and only you can see what you've
                      saved</v-card-subtitle
                    >
                  </v-card>
                </v-card-text>
              </v-card>
            </v-container>
          </v-tab-item>
          <!-- tagged tab -->
          <v-tab-item>
            <v-container fluid>
              <v-card flat>
                <v-card-text>
                  <v-card class="bottom-text" width="400" flat>
                    <Icon icon="ri:account-pin-box-line" height="90px" />
                    <v-card-subtitle style="font-size: 25px"
                      >Photos of you</v-card-subtitle
                    >
                    <v-card-subtitle
                      >When people tag you in photos, they'll appear
                      hear.</v-card-subtitle
                    >
                  </v-card>
                </v-card-text>
              </v-card>
            </v-container>
          </v-tab-item>
        </v-tabs>
      </template>
    </v-container>
  </v-container>
</template>


<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { Icon } from "@iconify/vue2";
import { profile_view_model } from "../view-model/profile-view-model";
import User from "@/models/user";

@Component({
  components: {
    Icon,
  },
})
export default class ProfilePage extends Vue {
  tabs: any[] = [
    { icon: "bi:grid-3x3", name: "posts" },
    { icon: "fluent:bookmark-16-regular", name: "saved" },
    { icon: "mdi:clipboard-account-outline", name: "tagged" },
  ];

  CurrentUser: User | undefined;
  created() {
    this.CurrentUser = profile_view_model.getCurUser();
  }
}
</script>

<style scoped>
.contain {
  width: 50%;
}

/* .card-img {
  display: flex;
  justify-content: space-between;
} */

.top-text {
  display: flex;
  justify-content: space-between;
}

.bottom-text {
  margin: 0px auto;
  text-align: center;
}

.story-card {
  padding: 40px;
  text-align: center;
}

.story-items {
  padding: 3px;
  border: 1px solid #BDBDBD;
  border-radius: 50%;
}

#edit-btn {
  text-transform: none;
  padding: 5px;
}
</style>