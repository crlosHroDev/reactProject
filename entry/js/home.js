import React from 'react';
import {render} from 'react-dom'; 
import Home from '../../src/pages/containers/Home';
// import Playlist from '../../src/playlist/components/playlist'
//import data from '../../src/api.json';
// console.log('hola mundo')
import data from '../schemas/index'; //datos normalizados
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import reducer from '../reducers/index';
import {Map as map  } from 'inmutable';
import logger from 'redux-logger';
import {composewithDevTools} from 'redux-devtools-extension';

/*function logger({getState,dispatch}){
    return (next)=>{
        return (action)=>{
            console.log('Este es mi viejo estado',getState().toJS())
            console.log('vamos a enviar esta acción',action)
            const value=next(action)
            console.log('este es mi nuevo estado',getState().toJS())
            return value
        }
    }
}*/

/*const logger=({getState,dispatch})=>next=>action=>{
    console.log('Este es mi viejo estado',getState().toJS())
    console.log('vamos a enviar esta acción',action)
    const value=next(action)
    console.log('este es mi nuevo estado',getState().toJS())
} EMCA Script 6 */
/*const initialState={
    data:{
        //...data
        entities:data.entities,
        categories:data.result.categories,
        search:[],
    },
    modal:{
       visibility:false,
       mediaId:null
    }
}*/

const store = createStore(
    reducer,
    map({}),
    composeWithDevTools(
     applyMiddleware(logger)
    )    
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

console.log(store.getState())
const homeContainer=document.getElementById('home-container');

render(
<Provider store={store}>
    <Home/>
</Provider>,homeContainer)

//ReactDOM.render(que voy a renderizar,donde lo haré)
