import { createAction } from 'redux-act'

export const loginCampaign = createAction('session login campaign')
export const loginCampaignRequest = createAction('session login campaign request')
export const loginCampaignResponse = createAction('session login campaign response')
export const loginCampaignErrorRequest = createAction('session logoin campaign error request')


export const logoutCampaign = createAction('session logout campaign')
export const logoutCampaignRequest = createAction('session logout campaign request')
export const logoutCampaignResponse = createAction('session logout campaign response')
export const logoutCampaignErrorRequest = createAction('session logout campaign error request')


export const loadCampaign = createAction('session load campaign')
export const loadCampaignErrorRequest = createAction('session load campaigns')
export const loadCampaignResponse = createAction('session load campaign response')
export const loadCampaignRequest = createAction('session load campaign request')


export const pauseCampaign = createAction('session pause campaign')
export const pauseCampaignResponse = createAction('session pause campaign response')



export const loadCampaignDetailsResponse = createAction('session load campaign details response')
//List campaings by current user
export const campaigns = createAction('session campaigns')





