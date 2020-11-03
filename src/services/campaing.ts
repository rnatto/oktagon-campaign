/* eslint-disable no-dupe-keys */
import { Campaign } from '../utils/interfaces/campaign';
import api from './api';

const list = () => {
  return api.get('/campaign');
};
const create = (campaign: Campaign) => {
  return api.post('/campaign', campaign);
};
export default {
  list,
  create
};
