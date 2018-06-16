import slug from 'slug';
import { url } from './config';
import base64 from 'base-64';

export default function User (name, email, website){
  return {
    name,
    email,
    website
  }
}

export function createUrl (name){
  return `${url}/users/${slug(name)}`;
}

export function gravatar(email){
  const hash = base64(email);
  const photoURl = `http://www.gravatar.com/avatar/${hash}`;
}