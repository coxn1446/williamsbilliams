import {createSlice} from "@reduxjs/toolkit";


const prismaPlannedSpendSlice = createSlice({
    name: "prismaPlannedSpend",
    initialState: {
        allClients: {
            "client1": {
                "campaign1": {
                    "name": "campaign1",
                    "planned-cost": 1364674,
                    "start-date": "8/16/22",
                    "end-date": "12/31/22",
                    "partners": {
                        "Meta": {
                            "planned-cost": 145906, 
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
                                "Aug 01 2022": 18736,
                                "Sep 01 2022": 42558,
                                "Oct 01 2022": 84611,
                                "Nov 01 2022": 0,
                                "Dec 01 2022": 0
                            }
                        },
                        "Apex": {
                            "planned-cost": 124999, 
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
                                "Aug 01 2022": 831,
                                "Sep 01 2022": 70949,
                                "Oct 01 2022": 53219,
                                "Nov 01 2022": 0,
                                "Dec 01 2022": 0
                            }
                        },
                        "Bustle": {
                            "planned-cost": 100000, 
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
                                "Aug 01 2022": 919,
                                "Sep 01 2022": 34469,
                                "Oct 01 2022": 64611,
                                "Nov 01 2022": 0,
                                "Dec 01 2022": 0
                            }
                        },
                        "Ebony": {
                            "planned-cost": 267140, 
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
                                "Sep 01 2022": 144464,
                                "Oct 01 2022": 122675,
                                "Nov 01 2022": 0,
                                "Dec 01 2022": 0
                            }
                        },
                        "Hearst": {
                            "planned-cost": 249227, 
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
                                "Oct 01 2022": 249227,
                                "Nov 01 2022": 0,
                                "Dec 01 2022": 0
                            }
                        },
                        "Pinterest": {
                            "planned-cost": 99333, 
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
                                "Aug 01 2022": 10095,
                                "Sep 01 2022": 41020,
                                "Oct 01 2022": 48217,
                                "Nov 01 2022": 0,
                                "Dec 01 2022": 0
                            }
                        },
                        "Snapchat": {
                            "planned-cost": 74351, 
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
                                "Aug 01 2022": 17059,
                                "Sep 01 2022": 39179,
                                "Oct 01 2022": 18112,
                                "Nov 01 2022": 0,
                                "Dec 01 2022": 0
                            }
                        },
                        "TikTok": {
                            "planned-cost": 149258, 
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
                                "Aug 01 2022": 17265,
                                "Sep 01 2022": 58025,
                                "Oct 01 2022": 73967,
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
                                "Aug 01 2022": 15772,
                                "Sep 01 2022": 76566,
                                "Oct 01 2022": 57661,
                                "Nov 01 2022": 0,
                                "Dec 01 2022": 0
                            }
                        } 
                    }
                },
                "campaign2": {
                    "name": "campaign2",
                    "planned-cost": 1364674,
                    "start-date": "1/16/22",
                    "end-date": "3/31/22",
                    "partners": {
                        "Meta": {
                            "planned-cost": 145906, 
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
                            "planned-cost": 124999, 
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
                            "planned-cost": 100000, 
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
                            "planned-cost": 267140, 
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
                            "planned-cost": 249227, 
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
                            "planned-cost": 99333, 
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
                            "planned-cost": 74351, 
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
                            "planned-cost": 149258, 
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
                    "planned-cost": 1000,
                    "start-date": "1/16/22",
                    "end-date": "6/31/22",
                    "partners": {
                        "Meta": {
                            "planned-cost": 500, 
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
                            "planned-cost": 124999, 
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
                            "planned-cost": 100000, 
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
                            "planned-cost": 267140, 
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
                            "planned-cost": 249227, 
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
                            "planned-cost": 99333, 
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
                            "planned-cost": 74351, 
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
                            "planned-cost": 1000, 
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
                    "planned-cost": 1364674,
                    "start-date": "4/16/22",
                    "end-date": "8/31/22",
                    "partners": {
                        "Meta": {
                            "planned-cost": 145906, 
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
                            "planned-cost": 124999, 
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
                            "planned-cost": 100000, 
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
                            "planned-cost": 267140, 
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
                            "planned-cost": 249227, 
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
                            "planned-cost": 99333, 
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
                            "planned-cost": 74351, 
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
                            "planned-cost": 149258, 
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
        editPartnerPlannedSpend: (state, action) => {
            state.allClients.client1[action.campaign].partners[action.partner]["planned-cost"] = Number(action.amount)
        },
        editMonthlyPlannedSpend: (state, action) => {
            state.allClients.client1[action.campaign].partners[action.partner]["monthly-costs"][action.month] = Number(action.amount)
        }
    }
})

export const selectPrismaPlannedSpend = state => state.prismaPlannedSpend.allClients;
export const prismaPlannedSpendReducer = prismaPlannedSpendSlice.reducer;