import React from 'react';
import "../Activity/Activity.css"
import PrismaPlannedSpend from "../../resources/prisma_planned_spend_report.json"
import PartnerRow from "../PartnerRow/PartnerRow"

const CampaignSection = () => {
    let CampaignSectionArray = []
    let campaign = PrismaPlannedSpend.client1.campaign1.partners
    const startDate = new Date(PrismaPlannedSpend.client1.campaign1['start-date'])
    const startMonth = startDate.getMonth()+1;
    const endDate = new Date(PrismaPlannedSpend.client1.campaign1['end-date'])
    const endMonth = endDate.getMonth()+1;

    const MOSArray = [];
    console.log('hey')

    const monthlyCostsDivs = []

    const monthlyCostsNums = []


    for (let i = startMonth; i < (endMonth+1); i++) {
        let monthlySum = 0;
        const MOS1 = new Date(`2022,${i}, 1`)
        const MOS2 = MOS1.toString().substring(4,15)
        MOSArray.push(
            <div className="activitySquare">{MOS2}</div>
        )
        for (const partner in campaign) {
            for (const x in campaign[partner]['monthly-costs']){
                if(x === MOS2){
                    monthlySum +=(campaign[partner]['monthly-costs'][x])
                }
            }
        }
        monthlyCostsDivs.push(<div className="activitySquare">{Math.round(monthlySum * 100) / 100}</div>)
        monthlyCostsNums.push(Number(Math.round(monthlySum * 100) / 100))
    }

    for (const partner in campaign) {
        let partnerSum = 0
        for (const x in campaign[partner]['monthly-costs']){
            partnerSum += campaign[partner]['monthly-costs'][x];
        }
        CampaignSectionArray.push(
            <div>
                <div className="activitySquare">{partner}</div>
                <PartnerRow partner={partner}></PartnerRow>
                <div className="activitySquare">{partnerSum}</div>
                <br></br>
            </div>
        )
      }

    const initialValue = 0;
    const campaignTotal = monthlyCostsNums.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
  
  return (
    <div>
        <div className="activitySquare">Partner</div>{MOSArray}<div className="activitySquare">Total</div>
        {CampaignSectionArray}
        <div className="activitySquare">Total</div>{monthlyCostsDivs}<div className="activitySquare">{Math.round(campaignTotal * 100) / 100}</div>
    </div>
  );
}

export default CampaignSection;