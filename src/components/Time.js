import React from "react";

let curDate = new Date();
curDate =curDate.getHours();
let good ='';
const csstyle={
}

if(curDate >=1 && curDate<12){
    good ='Good Morning';
    csstyle.color="Green";
}else if(curDate>=12 && curDate<19){
    good ='Good Afternoon';
    csstyle.color="orange";
}else{
    good='Good Night';
    csstyle.color="yellow";
}

function Time() {
    return (
      <h1><b>
     Hi.Mr'Umair,</b> <span style={csstyle}> {good} </span>
      </h1>
    );
  }
  
  export default Time;
