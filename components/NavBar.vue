<template>
  <div id='nav-bar'>
    <ul>
      <li>
        <NuxtLink to='/'>Home</NuxtLink>
      </li>
      <li>
        <NuxtLink to='/rick-and-morty'>Rick and Morty</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>

  #nav-bar {
    max-width: 100vw;
    height: 5vh;
    background-color: grey;

    ul {
      width: inherit;
      height: inherit;
      list-style-type: none;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }

    li {
      display: inline-block;
      margin: 1rem;
    }

    a {
      font-size: 1.5rem;
      color: white;
      text-decoration: none;
      :visited {
        text-decoration: inherit;
        color: inherit;
      }
      :hover {
        text-decoration: inherit;
        color: inherit;
      }
    }
  }
</style>
