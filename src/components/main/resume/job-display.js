import React from "react";

const JobDisplay = (props) => {
    return (
        <div className="resume-section-content">
            <div className="resume-section-content-info">
                <div className="resume-section-content-info-position">
                    <p className="position-title">{props.jobInfo.position}</p>
                    <div className="resume-section-content-info-position-company">
                        <p id="company-name">{props.jobInfo.company}</p>
                        <p className="line-spacing">|</p>
                        <p>{props.jobInfo.city}, {props.jobInfo.state}</p>
                    </div>
                </div>
                <div className="resume-section-content-info-date">
                    <p>{props.jobInfo.startDate}</p>
                    <p className="line-spacing"> - </p>
                    <p>{props.jobInfo.endDate}</p>
                </div>
            </div>
            <ul className="resume-section-content-list">
                <li>{props.jobInfo.jobTask1}</li>
                <li>{props.jobInfo.jobTask2}</li>
                <li>{props.jobInfo.jobTask3}</li>
                <li>{props.jobInfo.jobTask4}</li>
                <li>{props.jobInfo.jobTask5}</li>
            </ul> 
        </div>
    )
}

export default JobDisplay;

