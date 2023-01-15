import {createSlice} from "@reduxjs/toolkit";


const draftBillablesSlice = createSlice({
    name: "draftBillables",
    initialState: {
        allClients: {
            "client1": {
                "authorization1": {
                    "campaign1": {
                        "name": "campaign1",
                        "start-date": "8/16/22",
                        "end-date": "12/31/22",
                        "partners": {
                            "Meta": {
                                "net-ordered": 150000, 
                                "net-billed": 135000,
                                "net-billable": 15000
                            },
                            "Apex": {
                                "net-ordered": 150000, 
                                "net-billed": 135000,
                                "net-billable": 15000
                            },
                            "Bustle": {
                                "net-ordered": 150000, 
                                "net-billed": 135000,
                                "net-billable": 15000
                            },
                            "Ebony": {
                                "net-ordered": 150000, 
                                "net-billed": 135000,
                                "net-billable": 15000
                            },
                            "Hearst": {
                                "net-ordered": 150000, 
                                "net-billed": 135000,
                                "net-billable": 15000
                            },
                            "Pinterest": {
                                "net-ordered": 150000, 
                                "net-billed": 135000,
                                "net-billable": 15000
                            },
                            "Snapchat": {
                                "net-ordered": 150000, 
                                "net-billed": 135000,
                                "net-billable": 15000
                            },
                            "TikTok": {
                                "net-ordered": 150000, 
                                "net-billed": 135000,
                                "net-billable": 15000
                            },
                            "Vox": {
                                "net-ordered": 150000, 
                                "net-billed": 135000,
                                "net-billable": 15000
                            },
                        }
                    },
                    "campaign2": {
                        "name": "campaign2",
                        "authorization": "authorization1",
                        "start-date": "8/16/22",
                        "end-date": "12/31/22",
                        "partners": {
                            "Meta": {
                                "net-ordered": 150000, 
                                "net-billed": 135000,
                                "net-billable": 15000
                            },
                            "Apex": {
                                "net-ordered": 150000, 
                                "net-billed": 135000,
                                "net-billable": 15000
                            },
                            "Bustle": {
                                "net-ordered": 150000, 
                                "net-billed": 135000,
                                "net-billable": 15000
                            },
                            "Ebony": {
                                "net-ordered": 150000, 
                                "net-billed": 135000,
                                "net-billable": 15000
                            },
                            "Hearst": {
                                "net-ordered": 150000, 
                                "net-billed": 135000,
                                "net-billable": 15000
                            },
                            "Pinterest": {
                                "net-ordered": 150000, 
                                "net-billed": 135000,
                                "net-billable": 15000
                            },
                            "Snapchat": {
                                "net-ordered": 150000, 
                                "net-billed": 135000,
                                "net-billable": 15000
                            },
                            "TikTok": {
                                "net-ordered": 150000, 
                                "net-billed": 135000,
                                "net-billable": 15000
                            },
                            "Vox": {
                                "net-ordered": 150000, 
                                "net-billed": 135000,
                                "net-billable": 15000
                            },
                        }
                    }
                },
                "authorization2":{
                    "campaign3": {
                        "name": "campaign3",
                        "authorization": "authorization2",
                        "start-date": "8/16/22",
                        "end-date": "12/31/22",
                        "partners": {
                            "Meta": {
                                "net-ordered": 150000, 
                                "net-billed": 135000,
                                "net-billable": 15000
                            },
                            "Apex": {
                                "net-ordered": 150000, 
                                "net-billed": 135000,
                                "net-billable": 15000
                            },
                            "Bustle": {
                                "net-ordered": 150000, 
                                "net-billed": 135000,
                                "net-billable": 15000
                            },
                            "Ebony": {
                                "net-ordered": 150000, 
                                "net-billed": 135000,
                                "net-billable": 15000
                            },
                            "Hearst": {
                                "net-ordered": 150000, 
                                "net-billed": 135000,
                                "net-billable": 15000
                            },
                            "Pinterest": {
                                "net-ordered": 150000, 
                                "net-billed": 135000,
                                "net-billable": 15000
                            },
                            "Snapchat": {
                                "net-ordered": 150000, 
                                "net-billed": 135000,
                                "net-billable": 15000
                            },
                            "TikTok": {
                                "net-ordered": 150000, 
                                "net-billed": 135000,
                                "net-billable": 15000
                            },
                            "Vox": {
                                "net-ordered": 150000, 
                                "net-billed": 135000,
                                "net-billable": 15000
                            },
                        }
                    }

                },
                "authorization3":{
                    "campaign4": {
                        "name": "campaign4",
                        "authorization": "authorization3",
                        "start-date": "8/16/22",
                        "end-date": "12/31/22",
                        "partners": {
                            "Meta": {
                                "net-ordered": 150000, 
                                "net-billed": 135000,
                                "net-billable": 15000
                            },
                            "Apex": {
                                "net-ordered": 150000, 
                                "net-billed": 135000,
                                "net-billable": 15000
                            },
                            "Bustle": {
                                "net-ordered": 150000, 
                                "net-billed": 135000,
                                "net-billable": 15000
                            },
                            "Ebony": {
                                "net-ordered": 150000, 
                                "net-billed": 135000,
                                "net-billable": 15000
                            },
                            "Hearst": {
                                "net-ordered": 150000, 
                                "net-billed": 135000,
                                "net-billable": 15000
                            },
                            "Pinterest": {
                                "net-ordered": 150000, 
                                "net-billed": 135000,
                                "net-billable": 15000
                            },
                            "Snapchat": {
                                "net-ordered": 150000, 
                                "net-billed": 135000,
                                "net-billable": 15000
                            },
                            "TikTok": {
                                "net-ordered": 150000, 
                                "net-billed": 135000,
                                "net-billable": 15000
                            },
                            "Vox": {
                                "net-ordered": 150000, 
                                "net-billed": 135000,
                                "net-billable": 15000
                            },
                        }
                    }

                }
            }
        }
    },
    reducers: {
    }
})

export const selectDraftBillables = state => state.draftBillables.allClients;
export const draftBillablesReducer = draftBillablesSlice.reducer;