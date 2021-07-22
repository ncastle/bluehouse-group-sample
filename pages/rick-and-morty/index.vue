<template>
  <div>
    <NavBar />
    <h1 class="center header">Rick and Morty page</h1>

    <div class="container">
      <CharacterCard
        v-for="char in characters"
        :key="char.id"
        :characterInfo=char
      />
    </div>
  </div>
</template>

<script>
export default {
  async created () {
    await this.$store.dispatch('fetchCharacters', { self: this })
    console.log('printing after created / dispatch?')
  },

  computed: {
    characters () {
      return this.$store.getters.getAllCharacters
    }
  }
}
</script>

<style lang="scss" scoped>
  .header {
    margin-top: 1rem;
    margin-bottom: 2rem;
  }
  .center {
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
  }
  .container {
    width: 960px;
    display: flex;
    flex-wrap: wrap;
    margin: auto;
    padding: 1rem;
    background-color: grey;
    align-items: center;
    justify-content: center;
  }
</style>
