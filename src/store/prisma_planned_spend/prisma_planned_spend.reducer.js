import {createSlice} from "@reduxjs/toolkit";


const prismaPlannedSpendSlice = createSlice({
    name: "prismaPlannedSpend",
    initialState: {
        allClients: {
            "client1": {
                "campaign1": {
                    "name": "campaign1",
                    "planned-cost": 1364674.97,
                    "start-date": "8/16/22",
                    "end-date": "12/31/22",
                    "partners": {
                        "Meta": {
                            "planned-cost": 145906.70, 
                            "start-date": "8/16/22",
                            "end-date": "10/31/22",
                            "monthly-costs": {
                                "Jan 01 2022": 0,
                                "Feb 01 2022": 0,
                                "Mar 01 2022": 0,
                                "Apr 01 2022": 0,
                                "May 01 2022": 0,
                                "Jun 01 2022": 0,
                                "Jul 01 2022": 0,
                                "Aug 01 2022": 18736.85,
                                "Sep 01 2022": 42558.14,
                                "Oct 01 2022": 84611.71,
                                "Nov 01 2022": 0,
                                "Dec 01 2022": 0
                            }
                        },
                        "Apex": {
                            "planned-cost": 124999.98, 
                            "start-date": "8/16/22",
                            "end-date": "10/31/22",
                            "monthly-costs": {
                                "Jan 01 2022": 0,
                                "Feb 01 2022": 0,
                                "Mar 01 2022": 0,
                                "Apr 01 2022": 0,
                                "May 01 2022": 0,
                                "Jun 01 2022": 0,
                                "Jul 01 2022": 0,
                                "Aug 01 2022": 831.12,
                                "Sep 01 2022": 70949.53,
                                "Oct 01 2022": 53219.33,
                                "Nov 01 2022": 0,
                                "Dec 01 2022": 0
                            }
                        },
                        "Bustle": {
                            "planned-cost": 100000.00, 
                            "start-date": "8/16/22",
                            "end-date": "10/31/22",
                            "monthly-costs": {
                                "Jan 01 2022": 0,
                                "Feb 01 2022": 0,
                                "Mar 01 2022": 0,
                                "Apr 01 2022": 0,
                                "May 01 2022": 0,
                                "Jun 01 2022": 0,
                                "Jul 01 2022": 0,
                                "Aug 01 2022": 919.80,
                                "Sep 01 2022": 34469.20,
                                "Oct 01 2022": 64611.00,
                                "Nov 01 2022": 0,
                                "Dec 01 2022": 0
                            }
                        },
                        "Ebony": {
                            "planned-cost": 267140.40, 
                            "start-date": "9/5/22",
                            "end-date": "10/31/22",
                            "monthly-costs": {
                                "Jan 01 2022": 0,
                                "Feb 01 2022": 0,
                                "Mar 01 2022": 0,
                                "Apr 01 2022": 0,
                                "May 01 2022": 0,
                                "Jun 01 2022": 0,
                                "Jul 01 2022": 0,
                                "Aug 01 2022": 0,
                                "Sep 01 2022": 144464.75,
                                "Oct 01 2022": 122675.65,
                                "Nov 01 2022": 0,
                                "Dec 01 2022": 0
                            }
                        },
                        "Hearst": {
                            "planned-cost": 249227.81, 
                            "start-date": "10/1/22",
                            "end-date": "12/28/22",
                            "monthly-costs": {
                                "Jan 01 2022": 0,
                                "Feb 01 2022": 0,
                                "Mar 01 2022": 0,
                                "Apr 01 2022": 0,
                                "May 01 2022": 0,
                                "Jun 01 2022": 0,
                                "Jul 01 2022": 0,
                                "Aug 01 2022": 0,
                                "Sep 01 2022": 0,
                                "Oct 01 2022": 249227.81,
                                "Nov 01 2022": 0,
                                "Dec 01 2022": 0
                            }
                        },
                        "Pinterest": {
                            "planned-cost": 99333.88, 
                            "start-date": "8/16/22",
                            "end-date": "10/31/22",
                            "monthly-costs": {
                                "Jan 01 2022": 0,
                                "Feb 01 2022": 0,
                                "Mar 01 2022": 0,
                                "Apr 01 2022": 0,
                                "May 01 2022": 0,
                                "Jun 01 2022": 0,
                                "Jul 01 2022": 0,
                                "Aug 01 2022": 10095.92,
                                "Sep 01 2022": 41020.13,
                                "Oct 01 2022": 48217.83,
                                "Nov 01 2022": 0,
                                "Dec 01 2022": 0
                            }
                        },
                        "Snapchat": {
                            "planned-cost": 74351.83, 
                            "start-date": "8/16/22",
                            "end-date": "10/31/22",
                            "monthly-costs": {
                                "Jan 01 2022": 0,
                                "Feb 01 2022": 0,
                                "Mar 01 2022": 0,
                                "Apr 01 2022": 0,
                                "May 01 2022": 0,
                                "Jun 01 2022": 0,
                                "Jul 01 2022": 0,
                                "Aug 01 2022": 17059.71,
                                "Sep 01 2022": 39179.43,
                                "Oct 01 2022": 18112.69,
                                "Nov 01 2022": 0,
                                "Dec 01 2022": 0
                            }
                        },
                        "TikTok": {
                            "planned-cost": 149258.54, 
                            "start-date": "8/16/22",
                            "end-date": "10/31/22",
                            "monthly-costs": {
                                "Jan 01 2022": 0,
                                "Feb 01 2022": 0,
                                "Mar 01 2022": 0,
                                "Apr 01 2022": 0,
                                "May 01 2022": 0,
                                "Jun 01 2022": 0,
                                "Jul 01 2022": 0,
                                "Aug 01 2022": 17265.25,
                                "Sep 01 2022": 58025.58,
                                "Oct 01 2022": 73967.71,
                                "Nov 01 2022": 0,
                                "Dec 01 2022": 0
                            }
                        },
                        "Vox": {
                            "planned-cost": 150000, 
                            "start-date": "8/16/22",
                            "end-date": "10/31/22",
                            "monthly-costs": {
                                "Jan 01 2022": 0,
                                "Feb 01 2022": 0,
                                "Mar 01 2022": 0,
                                "Apr 01 2022": 0,
                                "May 01 2022": 0,
                                "Jun 01 2022": 0,
                                "Jul 01 2022": 0,
                                "Aug 01 2022": 15772.19,
                                "Sep 01 2022": 76566.49,
                                "Oct 01 2022": 57661.32,
                                "Nov 01 2022": 0,
                                "Dec 01 2022": 0
                            }
                        } 
                    }
                },
                "campaign2": {
                    "name": "campaign2",
                    "planned-cost": 1364674.97,
                    "start-date": "1/16/22",
                    "end-date": "3/31/22",
                    "partners": {
                        "Meta": {
                            "planned-cost": 145906.70, 
                            "start-date": "1/16/22",
                            "end-date": "3/31/22",
                            "monthly-costs": {
                                "Jan 01 2022": 10000,
                                "Feb 01 2022": 20000,
                                "Mar 01 2022": 30000,
                                "Apr 01 2022": 0,
                                "May 01 2022": 0,
                                "Jun 01 2022": 0,
                                "Jul 01 2022": 0,
                                "Aug 01 2022": 0,
                                "Sep 01 2022": 0,
                                "Oct 01 2022": 0,
                                "Nov 01 2022": 0,
                                "Dec 01 2022": 0
                            }
                        },
                        "Apex": {
                            "planned-cost": 124999.98, 
                            "start-date": "1/16/22",
                            "end-date": "3/31/22",
                            "monthly-costs": {
                                "Jan 01 2022": 10000,
                                "Feb 01 2022": 20000,
                                "Mar 01 2022": 30000,
                                "Apr 01 2022": 0,
                                "May 01 2022": 0,
                                "Jun 01 2022": 0,
                                "Jul 01 2022": 0,
                                "Aug 01 2022": 0,
                                "Sep 01 2022": 0,
                                "Oct 01 2022": 0,
                                "Nov 01 2022": 0,
                                "Dec 01 2022": 0
                            }
                        },
                        "Bustle": {
                            "planned-cost": 100000.00, 
                            "start-date": "1/16/22",
                            "end-date": "3/31/22",
                            "monthly-costs": {
                                "Jan 01 2022": 10000,
                                "Feb 01 2022": 20000,
                                "Mar 01 2022": 30000,
                                "Apr 01 2022": 0,
                                "May 01 2022": 0,
                                "Jun 01 2022": 0,
                                "Jul 01 2022": 0,
                                "Aug 01 2022": 0,
                                "Sep 01 2022": 0,
                                "Oct 01 2022": 0,
                                "Nov 01 2022": 0,
                                "Dec 01 2022": 0
                            }
                        },
                        "Ebony": {
                            "planned-cost": 267140.40, 
                            "start-date": "1/16/22",
                            "end-date": "3/31/22",
                            "monthly-costs": {
                                "Jan 01 2022": 10000,
                                "Feb 01 2022": 20000,
                                "Mar 01 2022": 30000,
                                "Apr 01 2022": 0,
                                "May 01 2022": 0,
                                "Jun 01 2022": 0,
                                "Jul 01 2022": 0,
                                "Aug 01 2022": 0,
                                "Sep 01 2022": 0,
                                "Oct 01 2022": 0,
                                "Nov 01 2022": 0,
                                "Dec 01 2022": 0
                            }
                        },
                        "Hearst": {
                            "planned-cost": 249227.81, 
                            "start-date": "1/16/22",
                            "end-date": "3/31/22",
                            "monthly-costs": {
                                "Jan 01 2022": 10000,
                                "Feb 01 2022": 20000,
                                "Mar 01 2022": 30000,
                                "Apr 01 2022": 0,
                                "May 01 2022": 0,
                                "Jun 01 2022": 0,
                                "Jul 01 2022": 0,
                                "Aug 01 2022": 0,
                                "Sep 01 2022": 0,
                                "Oct 01 2022": 0,
                                "Nov 01 2022": 0,
                                "Dec 01 2022": 0
                            }
                        },
                        "Pinterest": {
                            "planned-cost": 99333.88, 
                            "start-date": "1/16/22",
                            "end-date": "3/31/22",
                            "monthly-costs": {
                                "Jan 01 2022": 10000,
                                "Feb 01 2022": 20000,
                                "Mar 01 2022": 30000,
                                "Apr 01 2022": 0,
                                "May 01 2022": 0,
                                "Jun 01 2022": 0,
                                "Jul 01 2022": 0,
                                "Aug 01 2022": 0,
                                "Sep 01 2022": 0,
                                "Oct 01 2022": 0,
                                "Nov 01 2022": 0,
                                "Dec 01 2022": 0
                            }
                        },
                        "Snapchat": {
                            "planned-cost": 74351.83, 
                            "start-date": "1/16/22",
                            "end-date": "3/31/22",
                            "monthly-costs": {
                                "Jan 01 2022": 10000,
                                "Feb 01 2022": 20000,
                                "Mar 01 2022": 30000,
                                "Apr 01 2022": 0,
                                "May 01 2022": 0,
                                "Jun 01 2022": 0,
                                "Jul 01 2022": 0,
                                "Aug 01 2022": 0,
                                "Sep 01 2022": 0,
                                "Oct 01 2022": 0,
                                "Nov 01 2022": 0,
                                "Dec 01 2022": 0
                            }
                        },
                        "TikTok": {
                            "planned-cost": 149258.54, 
                            "start-date": "1/16/22",
                            "end-date": "3/31/22",
                            "monthly-costs": {
                                "Jan 01 2022": 10000,
                                "Feb 01 2022": 20000,
                                "Mar 01 2022": 30000,
                                "Apr 01 2022": 0,
                                "May 01 2022": 0,
                                "Jun 01 2022": 0,
                                "Jul 01 2022": 0,
                                "Aug 01 2022": 0,
                                "Sep 01 2022": 0,
                                "Oct 01 2022": 0,
                                "Nov 01 2022": 0,
                                "Dec 01 2022": 0
                            }
                        },
                        "Vox": {
                            "planned-cost": 150000, 
                            "start-date": "1/16/22",
                            "end-date": "3/31/22",
                            "monthly-costs": {
                                "Jan 01 2022": 10000,
                                "Feb 01 2022": 20000,
                                "Mar 01 2022": 30000,
                                "Apr 01 2022": 0,
                                "May 01 2022": 0,
                                "Jun 01 2022": 0,
                                "Jul 01 2022": 0,
                                "Aug 01 2022": 0,
                                "Sep 01 2022": 0,
                                "Oct 01 2022": 0,
                                "Nov 01 2022": 0,
                                "Dec 01 2022": 0
                            }
                        } 
                    }
                },
                "campaign3": {
                    "name": "campaign3",
                    "planned-cost": 1364674.97,
                    "start-date": "1/16/22",
                    "end-date": "6/31/22",
                    "partners": {
                        "Meta": {
                            "planned-cost": 145906.70, 
                            "start-date": "1/16/22",
                            "end-date": "6/31/22",
                            "monthly-costs": {
                                "Jan 01 2022": 50,
                                "Feb 01 2022": 100,
                                "Mar 01 2022": 200,
                                "Apr 01 2022": 600,
                                "May 01 2022": 100,
                                "Jun 01 2022": 1000,
                                "Jul 01 2022": 0,
                                "Aug 01 2022": 0,
                                "Sep 01 2022": 0,
                                "Oct 01 2022": 0,
                                "Nov 01 2022": 0,
                                "Dec 01 2022": 0
                            }
                        },
                        "Apex": {
                            "planned-cost": 124999.98, 
                            "start-date": "1/16/22",
                            "end-date": "6/31/22",
                            "monthly-costs": {
                                "Jan 01 2022": 50,
                                "Feb 01 2022": 100,
                                "Mar 01 2022": 200,
                                "Apr 01 2022": 600,
                                "May 01 2022": 100,
                                "Jun 01 2022": 1000,
                                "Jul 01 2022": 0,
                                "Aug 01 2022": 0,
                                "Sep 01 2022": 0,
                                "Oct 01 2022": 0,
                                "Nov 01 2022": 0,
                                "Dec 01 2022": 0
                            }
                        },
                        "Bustle": {
                            "planned-cost": 100000.00, 
                            "start-date": "1/16/22",
                            "end-date": "6/31/22",
                            "monthly-costs": {
                                "Jan 01 2022": 50,
                                "Feb 01 2022": 100,
                                "Mar 01 2022": 200,
                                "Apr 01 2022": 600,
                                "May 01 2022": 100,
                                "Jun 01 2022": 1000,
                                "Jul 01 2022": 0,
                                "Aug 01 2022": 0,
                                "Sep 01 2022": 0,
                                "Oct 01 2022": 0,
                                "Nov 01 2022": 0,
                                "Dec 01 2022": 0
                            }
                        },
                        "Ebony": {
                            "planned-cost": 267140.40, 
                            "start-date": "1/16/22",
                            "end-date": "6/31/22",
                            "monthly-costs": {
                                "Jan 01 2022": 50,
                                "Feb 01 2022": 100,
                                "Mar 01 2022": 200,
                                "Apr 01 2022": 600,
                                "May 01 2022": 100,
                                "Jun 01 2022": 1000,
                                "Jul 01 2022": 0,
                                "Aug 01 2022": 0,
                                "Sep 01 2022": 0,
                                "Oct 01 2022": 0,
                                "Nov 01 2022": 0,
                                "Dec 01 2022": 0
                            }
                        },
                        "Hearst": {
                            "planned-cost": 249227.81, 
                            "start-date": "1/16/22",
                            "end-date": "6/31/22",
                            "monthly-costs": {
                                "Jan 01 2022": 50,
                                "Feb 01 2022": 100,
                                "Mar 01 2022": 200,
                                "Apr 01 2022": 600,
                                "May 01 2022": 100,
                                "Jun 01 2022": 1000,
                                "Jul 01 2022": 0,
                                "Aug 01 2022": 0,
                                "Sep 01 2022": 0,
                                "Oct 01 2022": 0,
                                "Nov 01 2022": 0,
                                "Dec 01 2022": 0
                            }
                        },
                        "Pinterest": {
                            "planned-cost": 99333.88, 
                            "start-date": "1/16/22",
                            "end-date": "6/31/22",
                            "monthly-costs": {
                                "Jan 01 2022": 50,
                                "Feb 01 2022": 100,
                                "Mar 01 2022": 200,
                                "Apr 01 2022": 600,
                                "May 01 2022": 100,
                                "Jun 01 2022": 1000,
                                "Jul 01 2022": 0,
                                "Aug 01 2022": 0,
                                "Sep 01 2022": 0,
                                "Oct 01 2022": 0,
                                "Nov 01 2022": 0,
                                "Dec 01 2022": 0
                            }
                        },
                        "Snapchat": {
                            "planned-cost": 74351.83, 
                            "start-date": "1/16/22",
                            "end-date": "6/31/22",
                            "monthly-costs": {
                                "Jan 01 2022": 50,
                                "Feb 01 2022": 100,
                                "Mar 01 2022": 200,
                                "Apr 01 2022": 600,
                                "May 01 2022": 100,
                                "Jun 01 2022": 1000,
                                "Jul 01 2022": 0,
                                "Aug 01 2022": 0,
                                "Sep 01 2022": 0,
                                "Oct 01 2022": 0,
                                "Nov 01 2022": 0,
                                "Dec 01 2022": 0
                            }
                        },
                        "TikTok": {
                            "planned-cost": 149258.54, 
                            "start-date": "1/16/22",
                            "end-date": "6/31/22",
                            "monthly-costs": {
                                "Jan 01 2022": 50,
                                "Feb 01 2022": 100,
                                "Mar 01 2022": 200,
                                "Apr 01 2022": 600,
                                "May 01 2022": 100,
                                "Jun 01 2022": 1000,
                                "Jul 01 2022": 0,
                                "Aug 01 2022": 0,
                                "Sep 01 2022": 0,
                                "Oct 01 2022": 0,
                                "Nov 01 2022": 0,
                                "Dec 01 2022": 0
                            }
                        },
                        "Vox": {
                            "planned-cost": 150000, 
                            "start-date": "1/16/22",
                            "end-date": "6/31/22",
                            "monthly-costs": {
                                "Jan 01 2022": 50,
                                "Feb 01 2022": 100,
                                "Mar 01 2022": 200,
                                "Apr 01 2022": 600,
                                "May 01 2022": 100,
                                "Jun 01 2022": 1000,
                                "Jul 01 2022": 0,
                                "Aug 01 2022": 0,
                                "Sep 01 2022": 0,
                                "Oct 01 2022": 0,
                                "Nov 01 2022": 0,
                                "Dec 01 2022": 0
                            }
                        } 
                    }
                },
                "campaign4": {
                    "name": "campaign4",
                    "planned-cost": 1364674.97,
                    "start-date": "4/16/22",
                    "end-date": "8/31/22",
                    "partners": {
                        "Meta": {
                            "planned-cost": 145906.70, 
                            "start-date": "4/16/22",
                            "end-date": "8/31/22",
                            "monthly-costs": {
                                "Jan 01 2022": 0,
                                "Feb 01 2022": 0,
                                "Mar 01 2022": 0,
                                "Apr 01 2022": 4000,
                                "May 01 2022": 550,
                                "Jun 01 2022": 10000,
                                "Jul 01 2022": 2040,
                                "Aug 01 2022": 6090,
                                "Sep 01 2022": 0,
                                "Oct 01 2022": 0,
                                "Nov 01 2022": 0,
                                "Dec 01 2022": 0
                            }
                        },
                        "Apex": {
                            "planned-cost": 124999.98, 
                            "start-date": "4/16/22",
                            "end-date": "8/31/22",
                            "monthly-costs": {
                                "Jan 01 2022": 0,
                                "Feb 01 2022": 0,
                                "Mar 01 2022": 0,
                                "Apr 01 2022": 4000,
                                "May 01 2022": 550,
                                "Jun 01 2022": 10000,
                                "Jul 01 2022": 2040,
                                "Aug 01 2022": 6090,
                                "Sep 01 2022": 0,
                                "Oct 01 2022": 0,
                                "Nov 01 2022": 0,
                                "Dec 01 2022": 0
                            }
                        },
                        "Bustle": {
                            "planned-cost": 100000.00, 
                            "start-date": "4/16/22",
                            "end-date": "8/31/22",
                            "monthly-costs": {
                                "Jan 01 2022": 0,
                                "Feb 01 2022": 0,
                                "Mar 01 2022": 0,
                                "Apr 01 2022": 4000,
                                "May 01 2022": 550,
                                "Jun 01 2022": 10000,
                                "Jul 01 2022": 2040,
                                "Aug 01 2022": 6090,
                                "Sep 01 2022": 0,
                                "Oct 01 2022": 0,
                                "Nov 01 2022": 0,
                                "Dec 01 2022": 0
                            }
                        },
                        "Ebony": {
                            "planned-cost": 267140.40, 
                            "start-date": "4/16/22",
                            "end-date": "8/31/22",
                            "monthly-costs": {
                                "Jan 01 2022": 0,
                                "Feb 01 2022": 0,
                                "Mar 01 2022": 0,
                                "Apr 01 2022": 4000,
                                "May 01 2022": 550,
                                "Jun 01 2022": 10000,
                                "Jul 01 2022": 2040,
                                "Aug 01 2022": 6090,
                                "Sep 01 2022": 0,
                                "Oct 01 2022": 0,
                                "Nov 01 2022": 0,
                                "Dec 01 2022": 0
                            }
                        },
                        "Hearst": {
                            "planned-cost": 249227.81, 
                            "start-date": "4/16/22",
                            "end-date": "8/31/22",
                            "monthly-costs": {
                                "Jan 01 2022": 0,
                                "Feb 01 2022": 0,
                                "Mar 01 2022": 0,
                                "Apr 01 2022": 4000,
                                "May 01 2022": 550,
                                "Jun 01 2022": 10000,
                                "Jul 01 2022": 2040,
                                "Aug 01 2022": 6090,
                                "Sep 01 2022": 0,
                                "Oct 01 2022": 0,
                                "Nov 01 2022": 0,
                                "Dec 01 2022": 0
                            }
                        },
                        "Pinterest": {
                            "planned-cost": 99333.88, 
                            "start-date": "4/16/22",
                            "end-date": "8/31/22",
                            "monthly-costs": {
                                "Jan 01 2022": 0,
                                "Feb 01 2022": 0,
                                "Mar 01 2022": 0,
                                "Apr 01 2022": 4000,
                                "May 01 2022": 550,
                                "Jun 01 2022": 10000,
                                "Jul 01 2022": 2040,
                                "Aug 01 2022": 6090,
                                "Sep 01 2022": 0,
                                "Oct 01 2022": 0,
                                "Nov 01 2022": 0,
                                "Dec 01 2022": 0
                            }
                        },
                        "Snapchat": {
                            "planned-cost": 74351.83, 
                            "start-date": "4/16/22",
                            "end-date": "8/31/22",
                            "monthly-costs": {
                                "Jan 01 2022": 0,
                                "Feb 01 2022": 0,
                                "Mar 01 2022": 0,
                                "Apr 01 2022": 4000,
                                "May 01 2022": 550,
                                "Jun 01 2022": 10000,
                                "Jul 01 2022": 2040,
                                "Aug 01 2022": 6090,
                                "Sep 01 2022": 0,
                                "Oct 01 2022": 0,
                                "Nov 01 2022": 0,
                                "Dec 01 2022": 0
                            }
                        },
                        "TikTok": {
                            "planned-cost": 149258.54, 
                            "start-date": "4/16/22",
                            "end-date": "8/31/22",
                            "monthly-costs": {
                                "Jan 01 2022": 0,
                                "Feb 01 2022": 0,
                                "Mar 01 2022": 0,
                                "Apr 01 2022": 4000,
                                "May 01 2022": 550,
                                "Jun 01 2022": 10000,
                                "Jul 01 2022": 2040,
                                "Aug 01 2022": 6090,
                                "Sep 01 2022": 0,
                                "Oct 01 2022": 0,
                                "Nov 01 2022": 0,
                                "Dec 01 2022": 0
                            }
                        },
                        "Vox": {
                            "planned-cost": 150000, 
                            "start-date": "4/16/22",
                            "end-date": "8/31/22",
                            "monthly-costs": {
                                "Jan 01 2022": 0,
                                "Feb 01 2022": 0,
                                "Mar 01 2022": 0,
                                "Apr 01 2022": 4000,
                                "May 01 2022": 550,
                                "Jun 01 2022": 10000,
                                "Jul 01 2022": 2040,
                                "Aug 01 2022": 6090,
                                "Sep 01 2022": 0,
                                "Oct 01 2022": 0,
                                "Nov 01 2022": 0,
                                "Dec 01 2022": 0
                            }
                        } 
                    }
                }
            }
        }
    },
    reducers: {
    }
})

export const selectPrismaPlannedSpend = state => state.prismaPlannedSpend.allClients;
export const prismaPlannedSpendReducer = prismaPlannedSpendSlice.reducer;