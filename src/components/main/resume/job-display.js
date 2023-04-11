import React, { Component } from "react";

class JobDisplay extends Component  {
    render() {
        const { jobInfo } = this.props;
        return (
            <div className="resume-section-content">
                <div className="resume-section-content-info">
                    <div className="resume-section-content-info-position">
                        <p className="position-title">{jobInfo.position}</p>
                        <div className="resume-section-content-info-position-company">
                            <p id="company-name">{jobInfo.company}</p>
                            <p className="line-spacing">|</p>
                            <p>{jobInfo.city}, {jobInfo.state}</p>
                        </div>
                    </div>
                    <div className="resume-section-content-info-date">
                        <p>{jobInfo.startDate}</p>
                        <p className="line-spacing"> - </p>
                        <p>{jobInfo.endDate}</p>
                    </div>
                </div>
                <ul className="resume-section-content-list">
                    <li>{jobInfo.jobTask1}</li>
                    <li>{jobInfo.jobTask2}</li>
                    <li>{jobInfo.jobTask3}</li>
                    <li>{jobInfo.jobTask4}</li>
                    <li>{jobInfo.jobTask5}</li>
                </ul> 
            </div>
        )
    }
}

export default JobDisplay;