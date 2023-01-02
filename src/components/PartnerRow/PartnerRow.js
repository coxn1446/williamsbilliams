import React from 'react';
import "./PartnerRow.css"
import PrismaPlannedSpend from "../../resources/prisma_planned_spend_report.json"
import Activity from "../Activity/Activity"

const PartnerRow = (props) => {
    let partnerRow = []
    let PartnerSpend = PrismaPlannedSpend.client1.campaign1.partners[props.partner]['monthly-costs']

    for (const month in PartnerSpend) {
        partnerRow.push(
            <div style={{display: "inline-block"}}>
                <Activity month={month} monthlyCost={PartnerSpend[month]}></Activity>
            </div>
        )
      }
  
  return (
      partnerRow
  );
}

export default PartnerRow;