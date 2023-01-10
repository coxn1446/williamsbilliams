import React from 'react';
import "../Activity/Activity.css"
import "./CampaignSection.css"
import {useSelector } from 'react-redux';

//Components
import PartnerRow from "../PartnerRow/PartnerRow"

//State Selectors
import {selectPrismaPlannedSpend} from "../../store/prisma_planned_spend/prisma_planned_spend.reducer"
import {selectInvoices} from "../../store/invoices/invoices.reducer"
import {selectClient, selectPartner} from "../../store/app/app.reducer"

const CampaignSection = (props) => {
    //initializes state within the components
    const prismaPlannedSpend = useSelector(selectPrismaPlannedSpend);
    const invoices = useSelector(selectInvoices);
    const client = useSelector(selectClient);
    const campaign = props.campaign;
    const partner1 = useSelector(selectPartner);

    //initalizes empty partner array to display all partners by campaign
    let CampaignSectionArray = []
    //gets campaign object from state

    const campaignPlannedSpendObject = prismaPlannedSpend[client][campaign].partners
    const invoiceObject = invoices[client][campaign].partners

    //used to display monthly totals
    const monthlyPlannedSpendDivs = []

    //Used to sum up all month costs
    const monthlyPlannedSpendNums = []

    if (!partner1 || partner1 === "None") {
        for (let i = 1; i < 13; i++) {
            let monthlySum = 0;
            const MOS1 = new Date(`2022,${i}, 1`)
            const MOS2 = MOS1.toString().substring(4,15)
            for (const partner in campaignPlannedSpendObject) {
                for (const x in campaignPlannedSpendObject[partner]['monthly-costs']){
                    if(x === MOS2){
                        monthlySum +=(campaignPlannedSpendObject[partner]['monthly-costs'][x])
                    }
                }
            }
            monthlyPlannedSpendDivs.push(<div style={{color: 'white', backgroundColor: 'black'}} className="activitySquare">{Math.round(monthlySum * 100) / 100}</div>)
            monthlyPlannedSpendNums.push(Number(Math.round(monthlySum * 100) / 100))
        }
        let key = 0

        //iterates through each partner object, displaying partner name, monthly amounts, and then summing total spend by partner
        for (const partner in campaignPlannedSpendObject) {
            let partnerPlannedSum = campaignPlannedSpendObject[partner]["planned-cost"]
            let invoiceSum = 0
            for (const x in invoiceObject[partner]){
                invoiceSum += invoiceObject[partner][x]
            }
            key += 1
            CampaignSectionArray.push(
                <div className="partnerRow" style={{gridColumn: `1 / span ${28}`}}>
                    <div key={`partnerName${key}`} className="activitySquare">{partner}</div>
                        <PartnerRow key={`partnerRow${campaign}${partner}`} rowIndex={key} partnerInvoiceSum={invoiceSum} partnerPlannedSum={partnerPlannedSum} client={client} campaign={campaign} partner={partner}></PartnerRow>
                    <div key={`partnerSum${key}`} style={{color: 'white', backgroundColor: 'black'}} className="activitySquare">{`$${partnerPlannedSum.toLocaleString()}`}</div>
                </div>
            )
        }
    } else {
        //iterates through each month, creating monthly amounts by partner, monthly totals and then finally campaign totals
        for (let i = 1; i < 13; i++) {
            let monthlySum = 0;
            const MOS1 = new Date(`2022,${i}, 1`)
            const MOS2 = MOS1.toString().substring(4,15)
            for (const x in campaignPlannedSpendObject[partner1]['monthly-costs']){
                if(x === MOS2){
                    monthlySum +=(campaignPlannedSpendObject[partner1]['monthly-costs'][x])
                }
            }
            monthlyPlannedSpendDivs.push(<div style={{color: 'white', backgroundColor: 'black'}} className="activitySquare">{Math.round(monthlySum * 100) / 100}</div>)
            monthlyPlannedSpendNums.push(Number(Math.round(monthlySum * 100) / 100))
        }
        let key = 0
        //iterates through each partner object, displaying partner name, monthly amounts, and then summing total spend by partner
        let partnerPlannedSum = campaignPlannedSpendObject[partner1]["planned-cost"]
        let invoiceSum = 0
        for (const x in invoiceObject[partner1]){
            invoiceSum += invoiceObject[partner1][x]
        }
        key += 1
        CampaignSectionArray.push(
            <div className="partnerRow" style={{gridColumn: `1 / span ${28}`}}>
                <div key={`partnerName${key}`}className="activitySquare">{partner1}</div>
                    <PartnerRow key={`partnerRow${campaign}${partner1}`} rowIndex={key} partnerInvoiceSum={invoiceSum} partnerPlannedSum={partnerPlannedSum} client={client} campaign={campaign} partner={partner1}></PartnerRow>
                <div key={`partnerSum${key}`} style={{color: 'white', backgroundColor: 'black'}} className="activitySquare">{`$${partnerPlannedSum.toLocaleString()}`}</div>
            </div>
        )
    }

    //calculates total campaign spend
    const initialValue = 0;
    const campaignTotal = monthlyPlannedSpendNums.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
  
    if(client){
        if(partner1){
            return (
                <div className="campaignSection" style={{gridTemplateRows: "repeat(2, 23.5px)"}}>
                    {CampaignSectionArray}
                    <div className="totalRow">
                        <div className="activitySquare">Total</div>
                        {monthlyPlannedSpendDivs}
                        <div style={{color: 'white', backgroundColor: 'black'}} className="activitySquare">{`$${(Math.round((campaignTotal * 100) / 1000).toLocaleString())}`}</div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="campaignSection" style={{gridTemplateRows: "auto"}}>
                    {CampaignSectionArray}
                    <div className="totalRow">
                        <div className="activitySquare">Total</div>
                        {monthlyPlannedSpendDivs}
                        <div style={{color: 'white', backgroundColor: 'black'}} className="activitySquare">{`$${(Math.round((campaignTotal * 100) / 1000).toLocaleString())}`}</div>
                    </div>
                </div>
            )
        }
    } else {
        return null
    }
}

export default CampaignSection;