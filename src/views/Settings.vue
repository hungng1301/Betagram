<template>
  <edit-account />
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import EditAccount from "../components/Setting.vue";

@Component({
  components: {
    EditAccount,
  },
})
export default class EditAccountView extends Vue {}
</script>