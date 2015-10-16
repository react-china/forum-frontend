import 'isomorphic-fetch';
import {polyfill} from 'es6-promise';
import querystring from 'querystring';

polyfill();

function _get(url, parameters, callback) {
  const query = querystring.stringify(parameters);
  const getUrl = `${this.url}/${url}?api_key=${this.api_key}&api_username=${this.api_username}&${query}`;
  console.log(getUrl);
}

function _post(url, parameters, callback) {
  const postUrl = `${this.url}/${url}?api_key=${this.api_key}&api_username=${this.api_username}`;
  console.log(postUrl);
}

function _put(url, parameters, callback) {
  const putUrl = `${this.url}/${url}?api_key=${this.api_key}&api_username=${this.api_username}`;
  console.log(putUrl);
}
function _delete(url, parameters, callback) {
  const deleteUrl = `${this.url}/${url}?api_key=${this.api_key}&api_username=${this.api_username}`;
  console.log(deleteUrl);
}

export default {
  get: _get,
  post: _post,
  put: _put,
  delete: _delete,
};
