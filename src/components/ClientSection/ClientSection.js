import React from 'react';
import "../Activity/Activity.css"
import "./ClientSection.css"
import {useSelector } from 'react-redux';

//Components
import CampaignSection from "../CampaignSection/CampaignSection"

//State Selectors
import {selectPrismaPlannedSpend} from "../../store/prisma_planned_spend/prisma_planned_spend.reducer"
import {selectClient, selectCampaign, selectPartner} from "../../store/app/app.reducer"

const ClientSection = () => {

    //initializes state within the components
    const prismaPlannedSpend = useSelector(selectPrismaPlannedSpend);
    const client = useSelector(selectClient);
    const campaign1 = useSelector(selectCampaign);
    const partner1 = useSelector(selectPartner);
    let clientPlannedSpendObject = prismaPlannedSpend[client]

    //gets the start date from state
    const startDate = new Date("1/1/2022")
    //start month number
    const startMonth = startDate.getMonth()+1;
    //gets the end date from state
    const endDate = new Date("12/1/2022")
    //end month number
    const endMonth = endDate.getMonth()+1;

    //used for month table headers
    const MOSArray = [];

    for (let i = startMonth; i < (endMonth+1); i++) {
        const MOS1 = new Date(`2022,${i}, 1`)
        const MOS2 = MOS1.toString().substring(4,15)
        MOSArray.push(
            <div className="activitySquare">{MOS2}</div>
        )
    }

    let clientSectionArray = []

    if(!campaign1 || campaign1 === "None"){
        for (const campaign in clientPlannedSpendObject) {
            if(!partner1 || partner1 === "None"){
                clientSectionArray.push(
                    <div className="clientSection">
                        <div className="campaignNameColumn" style={{gridTemplateRows: "repeat(10, 1fr)"}}>
                            <div className='campaignName' style={{gridRow: "5 / span 1"}}>{clientPlannedSpendObject[campaign].name}</div>
                        </div>
                        <CampaignSection client={client} campaign={campaign} key={`campaignSection${campaign}`}></CampaignSection>
                    </div>
                )
            } else {
                clientSectionArray.push(
                    <div className="clientSection">
                        <div className="campaignNameColumn" style={{gridTemplateRows: "repeat(3, 1fr)"}}>
                            <div className='campaignName' style={{gridRow: "2 / span 1"}}>{clientPlannedSpendObject[campaign].name}</div>
                        </div>
                        <CampaignSection client={client} campaign={campaign} key={`campaignSection${campaign}`}></CampaignSection>
                    </div>
                ) 
            }
        }
    } 
    if(campaign1 && campaign1 !== "None") {
        if(!partner1 || partner1 === "None"){
            clientSectionArray.push(
                <div className="clientSection">
                    <div className="campaignNameColumn" style={{gridTemplateRows: "repeat(10, 1fr)"}}>
                        <div className='campaignName' style={{gridRow: "5 / span 1"}}>{clientPlannedSpendObject[campaign1].name}</div>
                    </div>
                    <CampaignSection client={client} campaign={campaign1} key={`campaignSection${campaign1}`}></CampaignSection>
                </div>
            )
        }
        if(partner1 && partner1 !== "None") {
            clientSectionArray.push(
                <div className="clientSection">
                    <div className="campaignNameColumn" style={{gridTemplateRows: "repeat(3, 1fr)"}}>
                        <div className='campaignName' style={{gridRow: "2 / span 1"}}>{clientPlannedSpendObject[campaign1].name}</div>
                    </div>
                    <CampaignSection client={client} campaign={campaign1} key={`campaignSection${campaign1}`}></CampaignSection>
                </div>
            ) 
        }
    }
    if(client){
    return (
        <div className="clientSection">
            <div className='headersRow'>
                <div className="activitySquare">Campaign</div><div className="activitySquare">Partner</div>{MOSArray}<div className="activitySquare">Total</div>
            </div>
            {clientSectionArray}
        </div>
    )} else {
        return null
    }
}

export default ClientSection;