import React from 'react';
import {render} from 'react-dom'; 
import Home from '../../src/pages/containers/Home';
// import Playlist from '../../src/playlist/components/playlist'
import data from '../../src/api.json';
// console.log('hola mundo')

import {createStore} from 'redux';

const initialState={
    data:{
        ...data
    }
}

const store = createStore(
    (state)=>state,
    initialState,
    window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_()
);

console.log(store.getState())
const homeContainer=document.getElementById('home-container');

//ReactDOM.render(que voy a renderizar,donde lo haré)
render(<Home data={data}/>,homeContainer);