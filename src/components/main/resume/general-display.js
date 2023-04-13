import React from "react";

const GeneralDisplay = (props) =>   {
    return  (
        <div className="resume-general-info">
            <h2>{props.generalInfo.firstName} {props.generalInfo.lastName}</h2>
            <div className="resume-general-info-contacts">
                <p>{props.generalInfo.phoneNumber}</p>
                <p>&#x2022;</p>
                <p>{props.generalInfo.email}</p>
                <p>&#x2022;</p>
                <p>{props.generalInfo.city}, {props.generalInfo.state}</p>
            </div>
        </div>
    )
}

export default GeneralDisplay;

