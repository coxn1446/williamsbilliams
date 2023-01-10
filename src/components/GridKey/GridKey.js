import React from 'react';
import "./GridKey.css"

const GridKey = () => {
   
    return (
        <div className="GridKeyDiv">
            <div className="activitySquareKey" style={{backgroundColor: "lightblue"}}>
                Missing Invoice
            </div>
            <div className="activitySquareKey" style={{backgroundColor: "lightcoral"}}>
                Invoice Mismatch
            </div>
            <div className="activitySquareKey" style={{backgroundColor: "darkseagreen"}}>
                Missing Client Payment
            </div>
            <div className="activitySquareKey" style={{backgroundColor: "peachpuff"}}>
                Overpurchased
            </div>
            <div className="activitySquareKey" style={{backgroundColor: "white"}}>
                In Treasury Queue
            </div>
            <div className="activitySquareKey" style={{backgroundColor: "plum"}}>
                Partner Paid
            </div>
            <div className="activitySquareKey" style={{backgroundColor: "gray"}}>
                No Planned Spend
            </div>
        </div>
    );
}

export default GridKey;