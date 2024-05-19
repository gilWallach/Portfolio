<script>
import appHeader from './components/app-header.vue'

export default {
  components: {
    appHeader,
  }
}
</script>

<template>
  <app-header />
  <router-view />
</template>