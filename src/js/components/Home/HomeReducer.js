const defaultState = {
  pending: false,
  search: [],
  searchLength: [],
  input: '',
  currentPage: 0
};

export default function HomeReducer(state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {    
    case 'UPDATE_INPUT': {      
      return {
        ...state, input: payload.input
      }
    }
    case 'POKEMON_SEARCH_PENDING': {
      return {
        ...state, pending: true
      }
    }
    case 'POKEMON_SEARCH_FULFILLED': {      
      console.log(payload.searchLength);
      return { 
        ...state, pending: false, search: payload.search, searchLength : payload.searchLength, currentPage: 1
      }
    }v
    case 'POKEMON_SEARCH_REJECTED': {
      return {
        ...state, pending: false 
      }
    }
    default: {
      return state;
    }
  }
}