import React from 'react';
import "./Form.css"
import {useDispatch} from 'react-redux';

//State Selectors
import {selectPrismaPlannedSpend} from "../../store/prisma_planned_spend/prisma_planned_spend.reducer"
import {selectInvoices} from "../../store/invoices/invoices.reducer"

const Form = () => {
    const dispatch = useDispatch()

    const changeSelectionClient = (e) => {
        e.preventDefault();
        dispatch({
            type: "app/changeClient",
            client: e.target.value,
        })
    }
    const changeSelectionCampaign = (e) => {
        e.preventDefault();
        dispatch({
            type: "app/changeCampaign",
            campaign: e.target.value,
        })
    }
    const changeSelectionPartner = (e) => {
        e.preventDefault();
        dispatch({
            type: "app/changePartner",
            partner: e.target.value,
        })
    }
   
    return (
        <div className="formDiv">
        <form>
            <section>
                <label htmlFor='client'>Client</label>
                <select name="client" id="client" onChange={changeSelectionClient}>
                    <option value="" disabled selected>Select your option</option>
                    <option value="client1">client1</option>
                </select>
            </section>
            {
            <section>
                <label htmlFor='campaign'>Campaign</label>
                <select name="campaign" id="campaign" onChange={changeSelectionCampaign}>
                <option value="" disabled selected>Select your option</option>
                    <option value="None">None</option>
                    <option value="campaign1">campaign1</option>
                    <option value="campaign2">campaign2</option>
                    <option value="campaign3">campaign3</option>
                    <option value="campaign4">campaign4</option>
                </select>
            </section>
            }
            <section>
                <label htmlFor='partner'>Partner</label>
                <select name="partner" id="partner" onChange={changeSelectionPartner}>
                    <option value="" disabled selected>Select your option</option>
                    <option value="None">None</option>
                    <option value="Meta">Meta</option>
                    <option value="Apex">Apex</option>
                    <option value="Bustle">Bustle</option>
                    <option value="Ebony">Ebony</option>
                    <option value="Hearst">Hearst</option>
                    <option value="Pinterest">Pinterest</option>
                    <option value="Snapchat">Snapchat</option>
                    <option value="TikTok">Tiktok</option>
                    <option value="Vox">Vox</option>
                </select>
            </section>
        </form>
        </div>
    );
}

export default Form;