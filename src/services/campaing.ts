/* eslint-disable no-dupe-keys */
import { Action } from '../utils/interfaces/action';
import { Campaign } from '../utils/interfaces/campaign';
import api from './api';

const getById = (campaignId: string) => {
  return api.get<Campaign>(`/campaign/${campaignId}`);
};

const list = () => {
  return api.get('/campaign');
};

const update = (campaign: Campaign) => {
  return api.put(`/campaign/${campaign._id}`, { actions: campaign.actions });
};

const create = (campaign: Campaign) => {
  return api.post('/campaign', campaign);
};

const remove = (campaignId: string) => {
  return api.delete(`/campaign/${campaignId}`);
};
export default {
  list,
  create,
  remove,
  getById,
  update
};
