<template>
  <v-card class="grey lighten-5" flat width="375" style="position: fixed">
    <v-card-title>
      <v-list-item to="/profile">
        <v-list-item-avatar size="60px">
          <v-img :src="CurUser.user_ava" alt="User"/>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>{{ CurUser.user_account_name }}</v-list-item-title>
          <v-list-item-subtitle>{{ CurUser.user_name }}</v-list-item-subtitle>
        </v-list-item-content>
        <v-btn text class="action">Switch</v-btn>
      </v-list-item>
    </v-card-title>
    <!--  -->
    <v-card-subtitle>
      <v-list-item>
        <v-list-item-content>
          <v-card-text>Suggestions For You</v-card-text>
        </v-list-item-content>
        <v-btn text style="text-transform: none; font-size: 12px"
          >See All</v-btn
        >
      </v-list-item>
    </v-card-subtitle>
    <!--  -->
    <v-card-title>
      <v-list-item v-for="u in user" :key="u.user_id">
        <v-list-item-avatar>
          <v-img :src="u.user_ava" alt="User" />
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>{{ u.user_account_name }}</v-list-item-title>
          <v-list-item-subtitle>Followed by... </v-list-item-subtitle>
        </v-list-item-content>
        <v-btn text class="action">Follow</v-btn>
      </v-list-item>
    </v-card-title>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import User from "src/models/user";
import {home_view_model} from "../view-model/home-content-view-model"

@Component
export default class SiderBar extends Vue {
  user: User[] = []
  CurUser: User | undefined;
  created() {
    this.CurUser = home_view_model.getCurAcc()
    this.getAccout()
  }

  getAccout() {
    this.user = home_view_model.getOtherUser()
  }
}
</script>

<style scoped>
.v-card__text,
.v-card__title,
.v-card__subtitle {
  padding: 0px;
}

.action {
  text-transform: none;
  color: rgb(47, 154, 253);
  font-size: 12px;
}
</style>
