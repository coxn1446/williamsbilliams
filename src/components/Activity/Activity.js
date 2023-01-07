import React, {useState, useMemo} from 'react';
import "./Activity.css"

const Activity = (props) => {
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
    if(props.invoice === 0 && props.plannedSpend !== 0){
     setInvoiceStatus('missing')
    }
  },[invoiceStatus, props.campaign, props.partner])

  useMemo(() => {
    if(props.invoice === props.plannedSpend){
     setMatch('matched')
    }
  },[match, props.campaign, props.partner])

  useMemo(() => {
    if(Number(props.aging) === Number(0)){
     setClientPaid('paid')
    }
  },[clientPaid, props.campaign, props.partner])

  useMemo(() => {
    if(props.partnerInvoiceSum > props.partnerPlannedSum && props.plannedSpend !== 0){
     setPurchasedStatus('overpurchased')
    }
  },[purchasedStatus, props.campaign, props.partner])

  useMemo(() => {
    if(props.payHistory !== 0){
     setPartnerPaid(true)
    }
  },[partnerPaid, props.campaign, props.partner])

  useMemo(() => {
    if(invoiceStatus === 'missing'){
      setColor('blue')
    } else if(match==='unmatched'){
      setColor('red')
    } else if (clientPaid==='unpaid') {
      setColor('green')
    } else if (purchasedStatus==='overpurchased') {
      setColor('yellow')
    } else if (props.plannedSpend===0) {
      setSpendCheck(false)
      setColor('gray')
    } else if (match ==='matched' && clientPaid === "paid" && purchasedStatus==="underpurchased" && invoiceStatus==="received") {
      setComplete(true)
      setColor('white')
    }
    if(complete){
      if(partnerPaid){
        setColor('purple')
      }
    }
  }, [color, clientPaid, purchasedStatus, invoiceStatus, spendCheck, complete, partnerPaid, props.campaign, props.partner])
  
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

  return (
        <div className="activitySquare" style={{backgroundColor: color}} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {spendCheck ? props.plannedSpend : ""}
            <div className={toolTipClass}>
              <span className={toolTipTextClass}>{`This discrepancy is for ${props.campaign} with ${props.partner}`}</span>
            </div>
        </div>
      
  );
}

export default Activity;