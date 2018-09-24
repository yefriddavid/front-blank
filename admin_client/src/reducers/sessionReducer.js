import {
  loginCampaign,
  loginCampaignRequest,
  loginCampaignResponse,

  loadCampaignDetailsResponse,
  // logoutCampaign,
  logoutCampaignRequest,
  logoutCampaignResponse,
  loadCampaignResponse,

  pauseCampaign,
  // pauseCampaignResponse
} from '../actions/session'


import { createReducer } from 'redux-act'
import { combineReducers } from 'redux'

const initial = {
  campaign: {
    login: {
      isFetching: false
    },
    logout: {
      isFetching: false
    },
    campaigns: [],
    InfoCampaign: {},
    data: {},
    selectedCampaignId: null,
    isFetching: false,
    error: {}
  }
};



const campaign = createReducer({
  [loginCampaign]: (state, payload) => {
    return { ...state, data: payload }
  },
  [loginCampaignRequest]: (state, payload) => {
    return { ...state, login: { isFetching: true } }
  },
  [loginCampaignResponse]: (state, payload) => {
    return { ...state, login: { isFetching: false },  data: {  } }
  },



  [logoutCampaignRequest]: (state, payload) => {
    return { ...state, logout: { isFetching: true  } }
  },
  [logoutCampaignResponse]: (state, payload) => {
    return { ...state, logout: { isFetching: false }, selectedCampaignId: initial.campaign.selectedCampaignId }
  },
  [loadCampaignResponse]: (state, payload) => {
    return { ...state, logout: { isFetching: false }, campaigns: payload.data }
  },
  [loadCampaignDetailsResponse]: (state, payload) => {
    return { ...state, logout: { isFetching: false }, selectedCampaignId: payload.data.id, InfoCampaign: payload.data }
  },
  [pauseCampaign]: (state, payload) => {
    return { ...state, data: payload, pause: true }
  },
  [loadCampaignResponse]: (state, payload) => {
    return { ...state, pause: true }
  },
}, initial.campaign);


export default combineReducers(
  { campaign }
);
