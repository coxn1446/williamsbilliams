import React from 'react';
import "../Activity/Activity.css";
import "../ClientSection/ClientSection.css";
import {useSelector } from 'react-redux';

//Components
import ClientCampaignSection from "../db_CampaignSection/ClientCampaignSection.js"
import Authorization from '../db_Authorization/Authorization';

//State Selectors
import { selectDraftBillables } from '../../store/draft_billing/draft_billing.reducer';
import { selectAuthorizations } from '../../store/authorizations/authorizations.reducer';
import {selectClient, selectCampaign, selectPartner} from "../../store/app/app.reducer"

const ClientClientSection = () => {

    //initializes state within the components
    const draftBillables = useSelector(selectDraftBillables)
    const authorizations = useSelector(selectAuthorizations)
    const client = useSelector(selectClient);
    //const campaign1 = useSelector(selectCampaign);
    //const partner1 = useSelector(selectPartner);
    const draftBillablesObject = draftBillables[client]
    const authorizationsObject = authorizations[client]

    let clientClientSectionArray = []
    let clientAuthorizationSectionArray = []
    let heightArray = []

    for (const authorization in authorizationsObject) {
        let height = authorizationsObject[authorization]["campaigns"].length
        heightArray.push(height)
        clientAuthorizationSectionArray.push(
        <Authorization authorization={authorization}></Authorization>
        )


    }

    for (const campaign in draftBillablesObject) {
        clientClientSectionArray.push(
            <div className="clientCampaignSection">
                <div className="campaignNameColumn" style={{gridTemplateRows: "repeat(10, 1fr)", gridColumn: '1 / span 2'}}>
                    <div className='campaignName' style={{gridRow: "5 / span 1"}}>{draftBillablesObject[campaign].name}</div>
                </div>
                <div className="campaignNameColumn" style={{gridTemplateRows: "repeat(10, 1fr)", gridColumn: '3 / span 2'}}>
                    <div className='campaignName' style={{gridRow: "5 / span 1"}}>{draftBillablesObject[campaign]['start-date']}</div>
                </div>
                <div className="campaignNameColumn" style={{gridTemplateRows: "repeat(10, 1fr)", gridColumn: '5 / span 2'}}>
                    <div className='campaignName' style={{gridRow: "5 / span 1"}}>{draftBillablesObject[campaign]['end-date']}</div>
                </div>
                <ClientCampaignSection client={client} campaign={campaign} key={`DBcampaignSection${campaign}`}></ClientCampaignSection>
            </div>
        )
    }

    const sumOfHeights = heightArray.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
      )
    return (
        <div className="clientSection">
            <div className='clientHeadersRow'>
                <div className="activitySquare">Authorization</div>
                <div className="activitySquare">Authorized Amount</div>
                <div className="activitySquare">Campaign</div>
                <div className="activitySquare">Start Date</div>
                <div className="activitySquare">End Date</div>
                <div className="activitySquare">Partner</div>
                <div className="activitySquare">Net Ordered</div>
                <div className="activitySquare">Net Billed</div>
                <div className="activitySquare">Net Billable</div>
            </div>
            <div className="clientAuthorizationContainer">
                {clientAuthorizationSectionArray}
            </div>
        </div>
    )
}

export default ClientClientSection;