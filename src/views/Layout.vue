<template>
  <v-app>
    <v-card>
      <header-bar />
    </v-card>
    <v-main class="grey lighten-5">
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import HeaderBar from "../components/layout_component/Header.vue";

@Component({
  components: {
    HeaderBar,
  },
})
export default class Layout extends Vue {}
</script>
