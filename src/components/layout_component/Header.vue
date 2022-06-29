<template>
  <v-app-bar app color="white" flat>
    <v-row>
      <v-col md="6" offset-md="3">
        <div class="header-items">
          <router-link :to="{ name: 'home-content' }" class="link">
            <v-toolbar-title class="logo">Betagram</v-toolbar-title>
          </router-link>
          <v-spacer />
          <v-text-field
            class="mt-6 mr-10"
            placeholder="Search"
            prepend-inner-icon="mdi-magnify"
            filled
            dense
            rounded
          ></v-text-field>

          <router-link
            v-for="item in items"
            :key="item.name"
            :to="{ name: item.path }"
          >
            <v-btn icon>
              <Icon :icon="item.icons" width="30" height="30" />
            </v-btn>
          </router-link>

          <v-menu bottom left offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon v-bind="attrs" v-on="on">
                <v-avatar class="hidden-sm-and-down" size="32">
                  <v-img :src="CurAcc.user_ava" alt="avatar"></v-img>
                </v-avatar>
              </v-btn>
            </template>

            <v-list>
              <v-list-item
                v-for="items in user_menu"
                :key="items.name"
                :to="items.path"
                link
              >
                <v-list-item-action>
                  <v-list-item-subtitle class="menu-item">
                    <Icon :icon="items.icon" width="25px" class="mr-3" />
                    {{ items.name }}</v-list-item-subtitle
                  >
                </v-list-item-action>
              </v-list-item>
            </v-list>
            <v-divider></v-divider>
            <v-list>
              <v-list-item @click="logout()" link>
                <v-list-item-subtitle>Log Out</v-list-item-subtitle>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </v-col>
    </v-row>
  </v-app-bar>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { Icon } from "@iconify/vue2";
import { home_view_model } from "@/view-model/home-content-view-model";
import { login_view_model } from "@/view-model/login-view-model";

@Component({
  components: {
    Icon,
  },
})
export default class HeaderBar extends Vue {
  items: any[] = [
    { name: "Home", path: "home-content", icons: "fluent:home-16-regular" },
    { name: "Inbox", path: "inbox", icons: "ri:messenger-line" },
    { name: "Profile", path: "", icons: "jam:plus-rectangle" },
    { name: "Updates", path: "", icons: "typcn:compass" },
    { name: "Like", path: "", icons: "ci:heart-outline" },
  ];

  user_menu: any[] = [
    { icon: "ri:account-circle-line", path: "/profile", name: "Profile" },
    { icon: "fluent:bookmark-16-regular", path: "", name: "Saved" },
    { icon: "tabler:settings", path: "/edit-account", name: "Settings" },
    { icon: "gg:sync", path: "", name: "Switch Accounts" },
  ];

  CurAcc = home_view_model.getCurAcc();

  logout() {
    login_view_model.logout();
  }
}
</script>

<style scoped>
.header-items {
  display: flex;
  align-items: center;
}

.header-items .logo {
  font-family: billabong;
  font-size: 40px;
}

.mt-6 {
  border-radius: 10px;
  width: 20px;
}

.link {
  text-decoration: none;
  color: black;
}

.menu-item {
  display: flex;
  align-items: center;
}

@font-face {
  font-family: billabong;
  src: url(C:\Users\hungnd\Documents\GitHub\Betagram\beta-pro\src\assets\FontsFree-Net-Billabong.ttf);
}
</style>