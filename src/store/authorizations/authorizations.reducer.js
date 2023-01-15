import {createSlice} from "@reduxjs/toolkit";


const authorizationsSlice = createSlice({
    name: "authorizations",
    initialState: {
        allClients: {
            "client1": {
                "authorization1": {
                    name: "authorization1",
                    "authorized-amount": 1350000,
                    campaigns: ["campaign1", "campaign2"]
                },
                "authorization2": {
                    name: "authorization2",
                    "authorized-amount": 1350000,
                    campaigns: ["campaign3"]
                },
                "authorization3": {
                    name: "authorization3",
                    "authorized-amount": 1350000,
                    campaigns: ["campaign4"]
                },
            }
        }
    },
    reducers: {
    }
})

export const selectAuthorizations = state => state.authorizations.allClients;
export const authorizationsReducer = authorizationsSlice.reducer;