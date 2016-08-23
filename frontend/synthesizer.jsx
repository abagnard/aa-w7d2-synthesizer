import React from 'react';
import ReactDOM from 'react-dom';
import Note from './util/note';
import store from './store/store';
import Root from './component/root';

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<Root store={store}/>, document.getElementById('root'));
});
