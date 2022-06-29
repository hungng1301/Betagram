<template>
    <profile-page />
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'
import ProfilePage from '../components/Profile.vue'

@Component({
    components: {
        ProfilePage
    }
})
export default class ProfileView extends Vue{}
</script>