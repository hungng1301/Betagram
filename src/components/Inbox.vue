<template>
  <v-container>
    <v-row no-gutters>
      <v-col cols="5">
        <v-card outlined tile height="90vh">
          <v-list-item>
            <v-list-item-title class="text-h6">
              {{getCurAcc().user_account_name}}
              <v-btn icon>
                <Icon icon="bi:chevron-down" width="30" height="30" />
              </v-btn>
            </v-list-item-title>
            <v-list-item-action>
              <v-btn icon>
                <Icon icon="entypo:new-message" width="30" height="30" />
              </v-btn>
            </v-list-item-action>
          </v-list-item>
          <v-divider />
          <v-list>
            <v-list-item-group color="primary">
              <v-list-item class="list-item">
                <v-list-item-avatar>
                  <v-avatar color="indigo"></v-avatar>
                </v-list-item-avatar>
                <v-list-item-title> cristiano</v-list-item-title>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card>
      </v-col>

      <v-col>
        <router-view/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { Icon } from "@iconify/vue2";
import {profile_view_model} from "../view-model/profile-view-model"
import User from "@/models/user";

@Component({
  components: {
    Icon,
  },
})
export default class InboxPage extends Vue {
  CurAcc: User|undefined
  getCurAcc() {
    return this.CurAcc = profile_view_model.getCurUser()
  }
}
</script>

<style scoped>
.container {
  max-width: 900px;
}

.text-h6 {
  padding-left: 100px;
}

.list-item {
  padding-left: 25px;
}
</style>