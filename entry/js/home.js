import React from 'react';
import {render} from 'react-dom'; 
import Home from '../../src/pages/containers/Home';
// import Playlist from '../../src/playlist/components/playlist'
import data from '../../src/api.json';
// console.log('hola mundo')

const homeContainer=document.getElementById('home-container');

//ReactDOM.render(que voy a renderizar,donde lo haré)
render(<Home data={data}/>,homeContainer);