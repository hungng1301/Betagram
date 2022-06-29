<template>
  <v-card
    outlined
    tile
    height="90vh"
    class="d-flex justify-center align-center"
  >
    <v-card class="right-content" flat>
      <v-img
        class="img"
        :src="require('/src/assets/send.png')"
        width="96"
        height="96"
      />
      <v-card-title>Your Messages</v-card-title>
      <v-card-subtitle
        >Send private photos and messages to a friend or group.</v-card-subtitle
      >
      <v-btn color="#3399ff" style="text-transform: none" class="white--text"
        >Send Messages</v-btn
      >
    </v-card>
  </v-card>
</template>

<script lang="ts">
import {Vue, Component} from "vue-property-decorator"

@Component
export default class StartInbox extends Vue{}
</script>

<style scoped>
.right-content  {
  text-align: center;
}

.right-content .img{
  margin: 0 140px;
}

.right-content .v-card__title{
  display: inline-block;
  text-align: center;
}
</style>