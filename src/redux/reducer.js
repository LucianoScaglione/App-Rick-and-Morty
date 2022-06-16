const initialState = {
  characters: [],
  moreCharacters: [],
  detailCharacter: [],
}

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "ALL_CHARACTERS": {
      return {
        ...state,
        characters: payload.results,
        moreCharacters: payload.info,
        charactersCopy: payload.results,
        moreCharactersCopy: payload.info
      }
    }
    case "DETAILS_CHARACTER": {
      return {
        ...state,
        detailCharacter: payload
      }
    }
    case "EMPTY_STATE": {
      return {
        ...state,
        detailCharacter: []
      }
    }
    case "FILTER_BY": {
      return {
        ...state,
        characters: payload.results,
        moreCharacters: payload.info
      }
    }
    case "SEARCH_CHARACTER": {
      return {
        ...state,
        characters: payload.results,
        moreCharacters: payload.info
      }
    }

    default: return state
  }
}

export default reducer;



































// case "FILTER_STATUS": {
//   //   return {
//   //     ...state,
//   //     characters: payload.results,
//   //     moreCharacters: payload.info
//   //   }
//   // }