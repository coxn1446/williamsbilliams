import React from 'react';
import "./Activity.css"

const Activity = (props) => {
  
  return (
      <div className="activitySquare">
          {props.monthlyCost}
      </div>
      
  );
}

export default Activity;