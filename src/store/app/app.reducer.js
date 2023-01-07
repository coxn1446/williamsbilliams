import {createSlice} from "@reduxjs/toolkit";


const appSlice = createSlice({
    name: "app",
    initialState: {
        client: null,
        campaign: null,
        partner: null,
    },
    reducers: {
        changeClient: (state, action) => {
            state.client = action.client
        },
        changeCampaign: (state, action) => {
            state.campaign = action.campaign
        },
        changePartner: (state, action) => {
            state.partner = action.partner
        }
    }
})

export const selectClient = state => state.app.client
export const selectCampaign = state => state.app.campaign
export const selectPartner = state => state.app.partner
export const appReducer = appSlice.reducer;