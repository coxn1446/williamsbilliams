import React from 'react';
import "./PartnerRow.css"
import {useSelector } from 'react-redux';

//Components
import Activity from "../Activity/Activity"
//State selectors
import {selectPrismaPlannedSpend} from "../../store/prisma_planned_spend/prisma_planned_spend.reducer"
import {selectInvoices} from "../../store/invoices/invoices.reducer"
import {selectAging} from "../../store/aging/aging.reducer"
import {selectPayHistory} from "../../store/pay_history/pay_history.reducer"

const PartnerRow = (props) => {
    //State variables
    const plannedSpendObject = useSelector(selectPrismaPlannedSpend);
    const invoicesObject = useSelector(selectInvoices);
    const agingObject = useSelector(selectAging);
    const payHistoryObject = useSelector(selectPayHistory);
    const campaign = props.campaign;
    const partner = props.partner;


    const invoices = invoicesObject.client1[campaign].partners[partner]
    const agingReport = agingObject.client1[campaign].partners[partner]
    const payHistory = payHistoryObject.client1[campaign].partners[partner]

    //initalizes empty row of partner's monthly costs
    let partnerRow = []
    //uses the parter prop passed down from <CampaignSection> to find a monthly cost for a specific partner
    let plannedSpend = plannedSpendObject.client1[campaign].partners[partner]['monthly-costs']

    //iterates through each month for a specific partner and pushes an <Activity> component into an array
    for (const month in plannedSpend) {
        partnerRow.push(
             <Activity key={`activity${campaign}${partner}${month}`} partnerInvoiceSum={props.partnerInvoiceSum} partnerPlannedSum={props.partnerPlannedSum} plannedSpend={plannedSpend[month]} invoice={invoices[month]} aging={agingReport[month]} payHistory={payHistory[month]} campaign={campaign} partner={partner}></Activity>
        )
      }
  
  return (
      partnerRow
  );
}

export default PartnerRow;