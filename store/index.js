// create vuex store so pages can access rick and morty data
export const state = () => ({
  characters: []
})

// function to return the correct character information from the vuex state
export const getters = {
  // returns a character in state with the matching id
  getCharacterById: state => (id) => {
    return state.characters.find(character => character.id === parseInt(id))
  },
  // returns entire character array in state
  getAllCharacters: (state) => {
    return state.characters
  }
}

// mutations
export const mutations = {
  FETCH_CHARACTERS (state, characters) {
    state.characters = characters
  }
}

// actions
export const actions = {
  // gets the rick and morty character information from the api endpoint
  // and stores it in vuex state
  async fetchCharacters ({ commit }) {
    const characters = await fetch('https://api.sampleapis.com/rickandmorty/characters')
    const charJson = await characters.json()
    commit('FETCH_CHARACTERS', charJson)
  }
}
