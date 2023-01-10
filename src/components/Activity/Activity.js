import React, {useState, useMemo, useEffect} from 'react';
import "./Activity.css"

const Activity = (props) => {
  const invoice = props.invoice;
  const plannedSpend = props.plannedSpend;
  const aging = props.aging;
  const partnerPlannedSum = props.partnerPlannedSum;
  const partnerInvoiceSum = props.partnerInvoiceSum;
  const partner = props.partner
  const payHistory = props.payHistory

  const [invoiceStatus, setInvoiceStatus] = useState('received')
  const [match, setMatch] = useState('unmatched');
  const [clientPaid, setClientPaid] = useState('unpaid');
  const [purchasedStatus, setPurchasedStatus] = useState('underpurchased')
  const [color, setColor] = useState('white');
  const [spendCheck, setSpendCheck] = useState(true);
  const [partnerPaid, setPartnerPaid] = useState(false);
  const [complete, setComplete] = useState(false);
  const [toolTipClass, setToolTipClass] = useState('tooltip')
  const [toolTipTextClass, setToolTipTextClass] = useState('tooltiptext')

  useMemo(() => {
    if(Number(invoice) === 0 && Number(plannedSpend) !== 0){
     setInvoiceStatus('missing')
    }
    if(Number(invoice) !== 0 && Number(plannedSpend) !== 0){
      setInvoiceStatus('received')
     }
  },[invoice, plannedSpend])

  useMemo(() => {
    if(Number(invoice) === Number(plannedSpend)){
     setMatch('matched')
    }
    if(Number(invoice) !== Number(plannedSpend)){
      setMatch('unmatched')
     }
  },[invoice, plannedSpend])

  useMemo(() => {
    if(Number(aging) === Number(0)){
     setClientPaid('paid')
    }
    if(Number(aging) !== Number(0) && Number(plannedSpend) !== 0){
      setClientPaid('unpaid')
     }
  },[aging, plannedSpend])

  useMemo(() => {
    if(Number(partnerInvoiceSum) > Number(partnerPlannedSum) && Number(plannedSpend) !== 0){
     setPurchasedStatus('overpurchased')
    }
    if(Number(partnerInvoiceSum) < Number(partnerPlannedSum) && Number(plannedSpend) !== 0){
      setPurchasedStatus('underpurchased')
     }
  },[plannedSpend, partnerInvoiceSum, partnerPlannedSum])

  useMemo(() => {
    if(Number(payHistory) !== 0 && Number(payHistory) === Number(plannedSpend)){
     setPartnerPaid(true)
    }
    if(Number(payHistory) !== 0 && Number(payHistory) !== Number(plannedSpend)){
      setPartnerPaid(false)
     }
  },[payHistory, plannedSpend])

  useMemo(() => {
    if(invoiceStatus === 'missing'){
      setColor('lightblue')
    } else if(match==='unmatched'){
      setColor('lightcoral')
    } else if (purchasedStatus==='overpurchased') {
      setColor('peachpuff')
    } else if (clientPaid==='unpaid') {
      setColor('darkseagreen')
    } else if (plannedSpend===0) {
      setSpendCheck(false)
      setColor('gray')
    } else if (match ==='matched' && clientPaid === "paid" && purchasedStatus==="underpurchased" && invoiceStatus==="received") {
      setComplete(true)
      setColor('white')
    }
    if(complete){
      if(partnerPaid){
        setColor('plum')
      }
    }
  }, [match, plannedSpend, clientPaid, purchasedStatus, invoiceStatus, complete, partnerPaid])
  
  const handleMouseEnter = (e) => {
    e.preventDefault();
    setToolTipClass('tooltip2')
    setToolTipTextClass('tooltiptext2')
  }

  const handleMouseLeave = (e) => {
    e.preventDefault();
    setToolTipClass('tooltip')
    setToolTipTextClass('tooltiptext')
  }

  let toolTipText = ""

  switch (color) {
    case 'lightblue':
      toolTipText = "We have not received the invoice for this activity yet. Reach out to the partner."
      break;
    case 'lightcoral':
      toolTipText = `Invoice received for $${(invoice).toLocaleString()} does not match planned spend of $${(plannedSpend).toLocaleString()}`
      break;
    case 'darkseagreen':
      toolTipText = `Invoice for $${(invoice).toLocaleString()} has been reconciled but we have not received client payment yet.`
      break;
    case 'peachpuff':
      toolTipText = `Invoice for $${(invoice).toLocaleString()} cannot be reconciled because total invoiced spend of $${(partnerInvoiceSum).toLocaleString()} exceeds total planned spend of $${(partnerPlannedSum).toLocaleString()}`
      break;
    case 'white':
      toolTipText = `Invoice for $${(invoice).toLocaleString()} is in treasury's queue for payment`
      break;
    case 'plum':
      toolTipText = `Invoice for $${(invoice).toLocaleString()} has been paid to ${partner} with check # xxxxxx `
      break;
    default:
        toolTipText = "There has been an error, try again later.";
    }

    useEffect(() => {
      if(invoiceStatus === 'missing'){
        setColor('lightblue')
      } else if(match==='unmatched'){
        setColor('lightcoral')
      } else if (clientPaid==='unpaid') {
        setColor('darkseagreen')
      } else if (purchasedStatus==='overpurchased') {
        setColor('peachpuff')
      } else if (plannedSpend===0) {
        setSpendCheck(false)
        setColor('gray')
      } else if (match ==='matched' && clientPaid === "paid" && purchasedStatus==="underpurchased" && invoiceStatus==="received") {
        setComplete(true)
        setColor('white')
      }
      if(complete){
        if(partnerPaid){
          setColor('plum')
        }
      }
    },[complete, invoiceStatus, match, purchasedStatus, partnerPaid, invoice, plannedSpend, partnerPlannedSum, payHistory, aging, clientPaid]);

  return (
        <div className="activitySquare" style={{backgroundColor: color}} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {spendCheck ? `$${(plannedSpend).toLocaleString()}` : ""}
            {spendCheck ?
            <div className={toolTipClass}>
              <span className={toolTipTextClass}>{toolTipText}</span>
            </div>
            : null}
        </div>
      
  );
}

export default Activity;