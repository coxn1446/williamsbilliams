import React, {useState} from 'react';
import "./Form.css"
import {useDispatch} from 'react-redux';

const Form = () => {
    const dispatch = useDispatch()
    const [formStyle, setFormStyle] = useState('none')

    const changeSelectionClient = (e) => {
        e.preventDefault();
        dispatch({
            type: "app/changeClient",
            client: e.target.value,
        })
        setFormStyle('flex')
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
        <p style={{gridColumn: "1 / span 10", textAlign:"center"}}>Use this form to filter the table below.</p>
        <form className="form">
            <section className="formSection">
                <label htmlFor='client' className="formLabel">Client</label>
                <select name="client" id="client" onChange={changeSelectionClient}>
                    <option value="" disabled selected>Select your option</option>
                    <option value="client1">client1</option>
                </select>
            </section>
            {
            <section style={{display: formStyle}} className="formSection">
                <label htmlFor='campaign' className="formLabel">Campaign</label>
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
            <section style={{display: formStyle}} className="formSection">
                <label htmlFor='partner' className="formLabel">Partner</label>
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