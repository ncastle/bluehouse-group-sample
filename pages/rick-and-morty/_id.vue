<template>
  <div>
    <NavBar />
    Hello I am route rick-and-morty/id
    {{ $route.params.id }}
    {{ character }}

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
