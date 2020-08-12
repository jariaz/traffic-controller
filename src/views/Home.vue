<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <p>{{ site_name }}</p>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  data: function () {
    return {
      site_name: this.$store.state.site_name
    }
  },
  components: {
    HelloWorld
  }
}
</script>
