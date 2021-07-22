<template>
  <div class="container">
    <h1 class="center">Hello Bluehouse Group</h1>
    <p>
      Welcome to the assessment. Here you'll find a basic NuxtJS app which
      queries a simple api endpoint to get Rick and Morty character data.
      You will find a 'list' (or more like grid) view which can be searched /
      filtered through by name or partial-name. Then by clicking on one of the
      character cards, you will be brought to an individual page for that
      character giving you more information about that particular character.
    </p>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
  .container {
    width: 80vw;
    margin: auto;
    * {
      margin: 1rem 0;
    }
  }
  .center {
    text-align: center;
  }
  p {
    font-size: 1.4rem;
  }
</style>
