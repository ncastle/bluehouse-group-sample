<template>
  <NuxtLink :to="`/rick-and-morty/${characterInfo.id}`" class="card link">
    <h3 class="name">{{ characterInfo.name }}</h3>
    <img :src="characterInfo.image" alt="character" class="image">
  </NuxtLink>
</template>

<script>
export default {
  props: ['characterInfo']
}
</script>

<style lang="scss" scoped>
  .card {
    width: 200px;
    height: 200px;
    border: 2px solid black;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background-color: #e0e0e0;
    margin: 1rem;
    padding: 1rem;
  }
  .link {
    color: black;
    text-decoration: none;
    :hover {
      color: inherit;
      text-decoration: inherit;
    }
  }
  .image {
    width: 100px;
    height: 100px;
    border-radius: 1rem;
  }
  .name {
    text-align: center;
  }
</style>
