<template>
  <div>
    <h1 class="center header">Rick and Morty page</h1>

    <h3 class="center">Search characters by name:</h3>
    <div class="center">
      <input @change="search" type="text" v-model="input">
      <button @click="search">Search</button>
      <button @click="reset">Reset</button>
    </div>

    <div class="container">

      <template v-if="filteredCharacters">
        <CharacterCard
          v-for="char in filteredCharacters"
          :key="char.id"
          :characterInfo=char
        />
      </template>

      <template v-else>
        <CharacterCard
          v-for="char in characters"
          :key="char.id"
          :characterInfo=char
        />
      </template>

    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      input: '',
      filteredCharacters: null
    }
  },
  computed: {
    characters () {
      return this.$store.getters.getAllCharacters
    }
  },
  methods: {
    search () {
      this.filteredCharacters = this.characters.filter((char) => {
        const name = char.name.toLowerCase()
        const input = this.input.toLowerCase()
        return name.includes(input)
      })
    },
    reset () {
      this.filteredCharacters = null
      this.input = ''
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
    margin: 1rem auto;
    width: 960px;
    display: flex;
    flex-wrap: wrap;
    padding: 1rem;
    background-color: grey;
    align-items: center;
    justify-content: center;
  }
</style>
