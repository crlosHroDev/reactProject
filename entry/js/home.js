import React from 'react';
import {render} from 'react-dom'; 
import Home from '../../src/pages/containers/Home';
// import Playlist from '../../src/playlist/components/playlist'
import data from '../../src/api.json';
// console.log('hola mundo')
import {Provider} from 'react-redux';
import {createStore} from 'redux';

const initialState={
    data:{
        ...data
    }
}

const store = createStore(
    (state)=>state,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

console.log(store.getState())
const homeContainer=document.getElementById('home-container');

render(
<Provider store={store}>
    <Home/>
</Provider>,homeContainer)

//ReactDOM.render(que voy a renderizar,donde lo haré)
