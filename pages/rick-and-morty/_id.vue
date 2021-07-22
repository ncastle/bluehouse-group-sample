<template>
  <div>
    <NavBar />
    <DetailedCharacterCard
      v-if=character
      :character=character
    />
  </div>
</template>

<script>
export default {
  computed: {
    character () {
      return this.$store.getters.getCharacterById(this.$route.params.id)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
