import React from 'react';
import "./Authorization.css"
import "../ClientSection/ClientSection.css"
import {useSelector } from 'react-redux';

//Components
import ClientCampaignSection from '../db_CampaignSection/ClientCampaignSection';

//State Selectors
import { selectAuthorizations } from '../../store/authorizations/authorizations.reducer';
import {selectClient, selectCampaign, selectPartner} from "../../store/app/app.reducer"
import { selectDraftBillables } from '../../store/draft_billing/draft_billing.reducer';


const Authorization = (props) => {
    const authorizations = useSelector(selectAuthorizations)
    const draftBillables = useSelector(selectDraftBillables)
    const client = useSelector(selectClient);
    const authorizationsObject = authorizations[client]
    const authorization = props.authorization
    let clientClientSectionArray = []
    const draftBillablesObject = draftBillables[client][authorization]
    let netOrderedArray = [];
    let netBilledArray = [];
    let netBillableArray = [];



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
                <ClientCampaignSection client={client} campaign={campaign} authorization={authorization} key={`DBcampaignSection${campaign}`}></ClientCampaignSection>
            </div>
        )
        for (const partner in draftBillablesObject[campaign]["partners"]){
            netOrderedArray.push(draftBillablesObject[campaign]["partners"][partner]["net-ordered"])
            netBilledArray.push(draftBillablesObject[campaign]["partners"][partner]["net-billed"])
            netBillableArray.push(draftBillablesObject[campaign]["partners"][partner]["net-billable"])

        }
    }

    const sumOfNetOrdered = netOrderedArray.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
      )
      const sumOfNetBilled = netBilledArray.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
      )
      const sumOfNetBillable = netBillableArray.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
      )

    return (
        <div className="clientAuthorizationSection">
            <div className="campaignNameColumn" style={{gridTemplateRows: "repeat(10, 1fr)", gridColumn: '1 / span 2'}}>
                <div className='authorizationName' style={{gridRow: "5 / span 1"}}>{authorizationsObject[authorization].name}</div>
            </div>
            <div className="campaignNameColumn" style={{gridTemplateRows: "repeat(10, 1fr)", gridColumn: '3 / span 2'}}>
                <div className='authorizationName' style={{gridRow: "5 / span 1"}}>{authorizationsObject[authorization]["authorized-amount"]}</div>
            </div>
            <div className="clientCampaignContainer">
                {clientClientSectionArray}
            </div>
            <div className="authorizationTotal" style={{backgroundColor: 'black', color: "white"}}>
                <div className="activitySquare" style={{gridColumn: '1'}}>Total</div>
                <div className="activitySquare" style={{gridColumn: '13'}}>{sumOfNetOrdered}</div>
                <div className="activitySquare" style={{gridColumn: '15'}}>{sumOfNetBilled}</div>
                <div className="activitySquare" style={{gridColumn: '17'}}>{sumOfNetBillable}</div>
            </div>
        </div>
    )
}

export default Authorization;