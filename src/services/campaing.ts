/* eslint-disable no-dupe-keys */
import api from './api';

const list = () => {
  return api.get('/campaign');
};

export default {
  list,
};
