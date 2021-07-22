<template>
  <div>
    <NavBar />
    <Nuxt />
  </div>
</template>

<script>
export default {
  // dispatch fetchCharacters vuex action
  async created () {
    await this.$store.dispatch('fetchCharacters', { self: this })
    console.log('printing after created / dispatch?')
  }
}
</script>

<style lang="scss" scoped>

</style>
