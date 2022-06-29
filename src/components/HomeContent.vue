<template>
  <v-container>
    <v-row>
      <v-col cols="6">
        <v-container>
          <v-row>
            <v-col offset-md="6">
              <v-card width="500">
                <v-slide-group show-arrows>
                  <v-slide-item v-for="ava in user1" :key="ava.user_id">
                    <div class="story-items">
                      <v-img
                        id="card-img-circle"
                        :src="ava.user_ava"
                        width="60"
                        height="60"
                      />
                    </div>
                  </v-slide-item>
                </v-slide-group>
              </v-card>
            </v-col>
          </v-row>
        </v-container>

        <v-container v-for="user in user1" :key="user.user_id">
          <v-row>
            <v-col offset-md="6">
              <v-card width="500">
                <v-list-item>
                  <v-list-item-avatar>
                    <v-img :src="user.user_ava" alt="User" />
                  </v-list-item-avatar>
                  <v-list-item-title>{{ user.user_account_name }}</v-list-item-title>
                  <v-spacer />
                  <v-btn icon>
                    <v-icon>mdi-dots-horizontal</v-icon>
                  </v-btn>
                </v-list-item>
                <v-img src="https://picsum.photos/510/300?random" height="400" />
                <v-card-actions>
                  <v-btn icon v-for="i in icons" :key="i.icon">
                    <Icon
                      :icon="i.icon"
                      :horizontalFlip="i.flip"
                      width="30"
                      height="30"
                    />
                  </v-btn>
                  <v-spacer />
                  <v-btn icon>
                    <Icon
                      icon="fluent:bookmark-16-regular"
                      width="30"
                      height="30"
                    />
                  </v-btn>
                </v-card-actions>
                <v-card-text style="font-weight: bold">1,012 likes</v-card-text>
                <v-card-text>
                  <span style="font-weight: bold">{{user.user_account_name }}</span>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Pariatur tenetur veritatis placeat, molestiae impedit aut
                  provident eum quo natus molestias?
                </v-card-text>
                <v-card-text class="post-time">2 minutes ago</v-card-text>
                <v-divider />
                <v-card-actions>
                  <v-btn icon>
                    <Icon icon="octicon:smiley-24" width="30" height="30" />
                  </v-btn>
                  <v-text-field placeholder="Add a comment" hide-details solo flat/>
                  <v-btn text color="primary" style="text-transform: none">Post</v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-col>

      <!-- sider -->
      <v-col>
        <v-container id="side">
          <sider-bar />
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { Icon } from "@iconify/vue2";
import SiderBar from "../components/Sider.vue";
import User, {user_store} from "../models/user";
import {home_view_model} from "../view-model/home-content-view-model"

@Component({
  components: {
    SiderBar,
    Icon,
  },
})

export default class HomeContent extends Vue {
  user: User[] = user_store.UserList
  user1: User[] = []

  icons: any[] = [
    { icon: "ci:heart-outline", flip: false },
    { icon: "fe:comment-o", flip: true },
    { icon: "prime:send", flip: false },
  ];

  created() {
  this.getOtherUser()  
  }

  getOtherUser() {
    this.user1 = home_view_model.getOtherUser()
  }
}
</script>

<style scoped>
.story-items {
  background: linear-gradient(45deg, rgb(255, 230, 0), rgb(255, 0, 128) 80%);
  border-radius: 50%;
  padding: 3px;
  margin: 5px;
  width: 63px;
  height: 63px;
  box-sizing: unset;
}

.v-card__text {
  padding: 5px 16px 3px 16px;
}

.post-time {
  padding: 2px 16px 2px 16px;
  font-size: 12px;
}

#card-img-circle {
  border-radius: 50%;
  border: 2px solid #fff;
}

#side {
  margin-left: 55px;
}
</style>