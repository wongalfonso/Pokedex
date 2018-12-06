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
        ...state, pending: false, search: payload.search, searchLength : payload.searchLength
      }
    }
    case 'POKEMON_SEARCH_REJECTED': {
      return {
        ...state, pending: false 
      }
    }
    case 'UPDATE_PAGE': {
      return {
        ...state, currentPage: payload.page
      }
    }
    default: {
      return state;
    }
  }
}