import React from 'react';
import "../Activity/Activity.css";
import "./ClientCampaignSection.css"
import {useSelector } from 'react-redux';

//State Selectors
import { selectDraftBillables } from '../../store/draft_billing/draft_billing.reducer';

const ClientCampaignSection = (props) => {
    const draftBillables = useSelector(selectDraftBillables)
    const campaign = props.campaign
    const authorization = props.authorization
    const draftBillablesObject = draftBillables["client1"][authorization][campaign]['partners']


    const clientPartnerDivArray = []

    for (const partner in draftBillablesObject){
        clientPartnerDivArray.push(
            <div className="clientPartnerSection">
                <div className="activitySquare" style={{gridColumn: `1 / span 2`}}>{partner}</div>
                <div className="activitySquare" style={{gridColumn: `3 / span 2`}}>{draftBillablesObject[partner]["net-ordered"]}</div>
                <div className="activitySquare" style={{gridColumn: `5 / span 2`}}>{draftBillablesObject[partner]["net-billed"]}</div>
                <div className="activitySquare" style={{gridColumn: `7 / span 2`}}>{draftBillablesObject[partner]["net-billable"]}</div>
            </div>
        )
    }


    return (
        <div>
            {clientPartnerDivArray}
        </div>
    )
}

export default ClientCampaignSection;