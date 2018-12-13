import api from '../api.json';

import {normalize,schema} from 'normalizr';

const media=new schema.Entity() 

const category=new schema.Entity()

const categories= 

const normalizeData=normalize(api,categories);

export default normalizeData;
