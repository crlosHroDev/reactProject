import schema from '../schemas/index.js';
import {fromJS} from 'inmutable';
import {SEARCH_ENTITIES} from '../action-types/index';

const initialState=fromJS({
  entities:schema.entities,
  categories:schema.result.categories,
  search:''
})



function data (state=initialState,action){
  switch(action.type){
    case SEARCH_ENTITIES:{
      //action.payload.query
      /*let results=[]
      if(action.payload.query){
        const list=state.data.categories[2].playlist;
        results = list.filter((item)=>{
          return item.author.includes(action.payload.query)
         })    */
      return state.set('search',action.payload.query)//Forma de un mapa setearle unos datos o modificar un dato
      }

      return {
        ...state,
        search:results
      }
    }
    default:
      return state
  }
}

export default data;
