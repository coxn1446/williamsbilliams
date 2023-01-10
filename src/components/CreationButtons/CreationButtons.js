import React, {useState} from 'react';
import "./CreationButtons.css"
import {useDispatch, useSelector} from 'react-redux';

import {selectPrismaPlannedSpend} from "../../store/prisma_planned_spend/prisma_planned_spend.reducer"

const CreationButtons = () => {
    const dispatch = useDispatch()
    const [popUpClass, setPopUpClass] = useState('popUpForm')
    const [popUpClass1, setPopUpClass1] = useState('popUpForm')
    const [popUpClass2, setPopUpClass2] = useState('popUpForm')
    const [popUpClass3, setPopUpClass3] = useState('popUpForm')
    const [popUpClass4, setPopUpClass4] = useState('popUpForm')
    const prismaPlannedSpend = useSelector(selectPrismaPlannedSpend);

    const handleClick = (e) => {
        e.preventDefault();
        if (popUpClass === 'popUpForm') {
            setPopUpClass('popUpForm2')
        }
        if (popUpClass === 'popUpForm2') {
            setPopUpClass('popUpForm')
        }
    }

    const handleClick1 = (e) => {
        e.preventDefault();
        setPopUpClass('popUpForm')
        dispatch({
            type: "invoices/createInvoice",
            campaign: e.target.campaign.value,
            partner: e.target.partner.value,
            month: e.target.month.value,
            amount: e.target.invoiceAmount.value
        })
    }

    const handleClick2 = (e) => {
        e.preventDefault();
        if (popUpClass1 === 'popUpForm') {
            setPopUpClass1('popUpForm2')
        }
        if (popUpClass1 === 'popUpForm2') {
            setPopUpClass1('popUpForm')
        }
    }

    const handleClick3 = (e) => {
        e.preventDefault();
        setPopUpClass1('popUpForm')
        dispatch({
            type: "prismaPlannedSpend/editMonthlyPlannedSpend",
            campaign: e.target.campaign.value,
            partner: e.target.partner.value,
            month: e.target.month.value,
            amount: e.target.monthlyPlannedSpendAmount.value
        })
    }

    const handleClick4 = (e) => {
        e.preventDefault();
        if (popUpClass2 === 'popUpForm') {
            setPopUpClass2('popUpForm2')
        }
        if (popUpClass2 === 'popUpForm2') {
            setPopUpClass2('popUpForm')
        }
    }

    const handleClick5 = (e) => {
        e.preventDefault();
        setPopUpClass2('popUpForm')
        dispatch({
            type: "prismaPlannedSpend/editPartnerPlannedSpend",
            campaign: e.target.campaign.value,
            partner: e.target.partner.value,
            amount: e.target.PartnerPlannedSpendAmount.value
        })
    }

    const handleClick6 = (e) => {
        e.preventDefault();
        if (popUpClass3 === 'popUpForm') {
            setPopUpClass3('popUpForm2')
        }
        if (popUpClass3 === 'popUpForm2') {
            setPopUpClass3('popUpForm')
        }
    }

    const handleClick7 = (e) => {
        e.preventDefault();
        setPopUpClass3('popUpForm')
        dispatch({
            type: "aging/receiveClientPayment",
            campaign: e.target.campaign.value,
            partner: e.target.partner.value,
            month: e.target.month.value
        })
    }

    const handleClick8 = (e) => {
        e.preventDefault();
        if (popUpClass4 === 'popUpForm') {
            setPopUpClass4('popUpForm2')
        }
        if (popUpClass4 === 'popUpForm2') {
            setPopUpClass4('popUpForm')
        }
    }

    const handleClick9 = (e) => {
        e.preventDefault();
        setPopUpClass4('popUpForm')
        dispatch({
            type: "payHistory/sendPartnerInvoice",
            campaign: e.target.campaign.value,
            partner: e.target.partner.value,
            month: e.target.month.value,
            amount: prismaPlannedSpend.client1[e.target.campaign.value].partners[e.target.partner.value]["monthly-costs"][e.target.month.value]
        })
    }

    return (
        <div className="creationButtonsDiv">
            <p style={{textAlign: "center"}}>Use these buttons to simulate invoice lifecycle events</p>
            <button className="creationButton" onClick={handleClick}>Create Invoice
            </button>
            <form className={popUpClass} action="#" onSubmit={handleClick1}>
                <select name="campaign" id="campaign">
                    <option value="campaign1">campaign1</option>
                    <option value="campaign2">campaign2</option>
                    <option value="campaign3">campaign3</option>
                    <option value="campaign4">campaign4</option>
                </select>
                <select name="partner" id="partner">
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
                <select name="month" id="month">
                    <option value="Jan 01 2022">Jan</option>
                    <option value="Feb 01 2022">Feb</option>
                    <option value="Mar 01 2022">Mar</option>
                    <option value="Apr 01 2022">Apr</option>
                    <option value="May 01 2022">May</option>
                    <option value="Jun 01 2022">Jun</option>
                    <option value="Jul 01 2022">Jul</option>
                    <option value="Aug 01 2022">Aug</option>
                    <option value="Sep 01 2022">Sep</option>
                    <option value="Oct 01 2022">Oct</option>
                    <option value="Nov 01 2022">Nov</option>
                    <option value="Dec 01 2022">Dec</option>
                </select>
                <input id="invoiceAmount" name="invoiceAmount" type="number" placeholder="invoice amount"/>
                <input id="submitInvoice" type="Submit"/>
            </form>
            <button className="creationButton" onClick={handleClick2}>Edit Monthly Planned Spend</button>
            <form className={popUpClass1} action="#" onSubmit={handleClick3}>
                <select name="campaign" id="campaign">
                    <option value="campaign1">campaign1</option>
                    <option value="campaign2">campaign2</option>
                    <option value="campaign3">campaign3</option>
                    <option value="campaign4">campaign4</option>
                </select>
                <select name="partner" id="partner">
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
                <select name="month" id="month">
                    <option value="Jan 01 2022">Jan</option>
                    <option value="Feb 01 2022">Feb</option>
                    <option value="Mar 01 2022">Mar</option>
                    <option value="Apr 01 2022">Apr</option>
                    <option value="May 01 2022">May</option>
                    <option value="Jun 01 2022">Jun</option>
                    <option value="Jul 01 2022">Jul</option>
                    <option value="Aug 01 2022">Aug</option>
                    <option value="Sep 01 2022">Sep</option>
                    <option value="Oct 01 2022">Oct</option>
                    <option value="Nov 01 2022">Nov</option>
                    <option value="Dec 01 2022">Dec</option>
                </select>
                <input id="monthlyPlannedSpendAmount" name="monthlyPlannedSpendAmount" type="number" placeholder="Monthly Planned Spend Amount"/>
                <input id="submitMonthlyPlannedSpendAmount" type="Submit"/>
            </form>
            <button className="creationButton" onClick={handleClick4}>Edit Partner Planned Spend</button>
            <form className={popUpClass2} action="#" onSubmit={handleClick5}>
                <select name="campaign" id="campaign">
                    <option value="campaign1">campaign1</option>
                    <option value="campaign2">campaign2</option>
                    <option value="campaign3">campaign3</option>
                    <option value="campaign4">campaign4</option>
                </select>
                <select name="partner" id="partner">
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
                <input id="PartnerPlannedSpendAmount" name="PartnerPlannedSpendAmount" type="number" placeholder="Partner Planned Spend Amount"/>
                <input id="submitPartnerPlannedSpendAmount" type="Submit"/>
            </form>
            <button className="creationButton" onClick={handleClick6}>Receive Client Payment</button>
            <form className={popUpClass3} action="#" onSubmit={handleClick7}>
                <select name="campaign" id="campaign">
                    <option value="campaign1">campaign1</option>
                    <option value="campaign2">campaign2</option>
                    <option value="campaign3">campaign3</option>
                    <option value="campaign4">campaign4</option>
                </select>
                <select name="partner" id="partner">
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
                <select name="month" id="month">
                    <option value="Jan 01 2022">Jan</option>
                    <option value="Feb 01 2022">Feb</option>
                    <option value="Mar 01 2022">Mar</option>
                    <option value="Apr 01 2022">Apr</option>
                    <option value="May 01 2022">May</option>
                    <option value="Jun 01 2022">Jun</option>
                    <option value="Jul 01 2022">Jul</option>
                    <option value="Aug 01 2022">Aug</option>
                    <option value="Sep 01 2022">Sep</option>
                    <option value="Oct 01 2022">Oct</option>
                    <option value="Nov 01 2022">Nov</option>
                    <option value="Dec 01 2022">Dec</option>
                </select>
                <input id="receiveClientPaymentSubmission" type="Submit"/>
            </form>
            <button className="creationButton" onClick={handleClick8}>Pay the Partner</button>
            <form className={popUpClass4} action="#" onSubmit={handleClick9}>
                <select name="campaign" id="campaign">
                    <option value="campaign1">campaign1</option>
                    <option value="campaign2">campaign2</option>
                    <option value="campaign3">campaign3</option>
                    <option value="campaign4">campaign4</option>
                </select>
                <select name="partner" id="partner">
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
                <select name="month" id="month">
                    <option value="Jan 01 2022">Jan</option>
                    <option value="Feb 01 2022">Feb</option>
                    <option value="Mar 01 2022">Mar</option>
                    <option value="Apr 01 2022">Apr</option>
                    <option value="May 01 2022">May</option>
                    <option value="Jun 01 2022">Jun</option>
                    <option value="Jul 01 2022">Jul</option>
                    <option value="Aug 01 2022">Aug</option>
                    <option value="Sep 01 2022">Sep</option>
                    <option value="Oct 01 2022">Oct</option>
                    <option value="Nov 01 2022">Nov</option>
                    <option value="Dec 01 2022">Dec</option>
                </select>
                <input id="submitPartnerPayment" type="Submit"/>
            </form>
        </div>
    );
}

export default CreationButtons;