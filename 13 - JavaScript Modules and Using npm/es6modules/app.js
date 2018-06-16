import { uniq } from 'lodash';
import insane from 'insane';
import {apiKey} from './source/config';
import user, {createUrl, gravatar} from './source/user';

const ages = [1,10,5,21,15,43,8];

console.log(ages);

console.log(apiKey);

const wes = new user('Wes Bos', 'wesbos@gmail.com', 'wesbox.com');
console.log(wes);

const profile = new createUrl(wes.name);
console.log(profile);