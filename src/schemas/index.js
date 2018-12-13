import api from '../api.json';

import {normalize,schema} from 'normalizr';

//const media=new schema.Entity(key como quiero que se llame,definicion esquema, opciones para perzonalizar)
const media=new schema.Entity('media',{},{ 
  idAttribute:'id',
  processStrategy:(value,parent,key)=>({...value,category:parent.id})
})  

const category=new schema.Entity('categories',{
  playlist:new schema.Array(media)
})

const categories= {categories:new schema.Array(category)}

const normalizeData=normalize(api,categories);

export default normalizeData;
