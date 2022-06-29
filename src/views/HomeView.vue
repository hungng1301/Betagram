<template>
  <home-content />
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import HomeContent from "../components/HomeContent.vue";

@Component({
  components: {
    HomeContent,
  },
})
export default class HomeView extends Vue {}
</script>

<style scoped>

</style>