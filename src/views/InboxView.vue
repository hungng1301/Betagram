<template>
    <inbox-page/>
</template>
<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'
import InboxPage from '../components/Inbox.vue'

@Component({
    components: {
        InboxPage
    },
})
export default class InboxView extends Vue{}
</script>
