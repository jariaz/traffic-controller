<template>
  <div class="about">
    <h1>This is an about page {{ site_name }}</h1>
  </div>
</template>
<script>
export default {
  name: 'About',
  data: function () {
    return {
      site_name: this.$store.state.site_name
    }
  },
  beforeMount() {
    console.log('this', this.$store.state.site_name)
  },
  components: {}
}
</script>