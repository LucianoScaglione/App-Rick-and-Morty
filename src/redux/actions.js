import axios from 'axios';

export const showCharacters = (url) => {
  return async (dispatch) => {
    try {
      const contenedor = await axios.get(url)
      dispatch({ type: "ALL_CHARACTERS", payload: contenedor.data })
    } catch (error) {
      console.log(error)
    }
  }
}

export const showDetailCharacter = (id) => {
  return async (dispatch) => {
    try {
      const contenedor = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
      dispatch({ type: "DETAILS_CHARACTER", payload: contenedor.data })
    } catch (error) {
      console.log(error)
    }
  }
}

export const emptyEstado = () => {
  return {
    type: "EMPTY_STATE"
  }
}

export const filterBy = (filter) => {
  console.log(filter)
  
  return (dispatch) => {
    return axios.get(`https://rickandmortyapi.com/api/character/?status=${filter.status}&gender=${filter.gender}&species=${filter.species}`)
      .then(res => dispatch({ type: "FILTER_BY", payload: res.data }), (error => alert("There is no character in your filter search.")))
  }
}

export const searchCharacter = (name) => {
  return (dispatch) => {
    return axios(`https://rickandmortyapi.com/api/character/?name=${name}`)
      .then(res => dispatch({ type: "SEARCH_CHARACTER", payload: res.data }), (error => alert("Character not found.")))
  }
} 










