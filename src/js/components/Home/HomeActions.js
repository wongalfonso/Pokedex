import axios from 'axios';

export function updateInput(input) {  
  return {
    type: 'UPDATE_INPUT',
    payload: {input}
  }
}

export function searchPokemon(name) {  
  const getPokemon = axios.get(`/pokemon/${name}`)
  return (dispatch) => {
    dispatch({
      type: 'POKEMON_SEARCH',
      payload: getPokemon
        .then((res) => console.log(res))
    })
  }
}

export function searchAllPokemon() {    
  const getAll = axios.get(`/pokemon`)
  return (dispatch) => {
    dispatch({
      type: 'POKEMON_SEARCH',
      payload: getAll
        .then((res) => {          
          const arr = [];
          const searchLength = [];
          const chunk = 25;
          const fullLength = Math.ceil(res.data.results.length/chunk);          
          for (var i= 0; i < fullLength; i ++) {
            let newArr = res.data.results;
            let arrChunk = newArr.splice(0, chunk);                        
            searchLength.push(i);
            arr.push(arrChunk);
          }          
          return {
            search: arr,
            searchLength: searchLength
          }       
        })
        .catch((err) => {
          { err }
        })
    })
  }
}