<template>
  <div class="card">
    <div class="info">
      <h1>Name:
        <span>{{ character.name }}</span>
      </h1>
      <h1>Status:
        <span>{{ character.status }}</span>
      </h1>
      <h1>Species:
        <span>{{ character.species }}</span>
      </h1>
      <h1>Gender:
        <span>{{ character.gender }}</span>
      </h1>
      <h1>Origin:
        <span>{{ character.origin }}</span>
      </h1>
    </div>
    <img :src="character.image" alt="character" class="image">
  </div>
</template>

<script>
export default {
  // accept character as prop
  props: ['character']
}
</script>

<style lang="scss" scoped>
  .card {
    height: fit-content;
    width: 600px;
    margin: 5rem auto;
    display: flex;
    background-color: lavender;
  }
  .info {
    height: 300px;
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    h1 {
      span {
        font-size: 1.5rem;
      }
    }
  }

</style>
