<template>
    <login-component/>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'
import LoginComponent from '../components/Login.vue'

@Component({
    components:{
        LoginComponent
    }
})
export default class LoginView extends Vue{}
</script>