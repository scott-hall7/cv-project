import React, { Component } from "react";
import JobDisplay from "./job-display"

class ExperienceDisplay extends Component  {
    render() {
        const { experienceInfo } = this.props;
        return  (
            <div className="resume-section">
                <div className="resume-section-header">
                    <h5>EXPERIENCE</h5>
                    <hr></hr>
                </div>
                {experienceInfo.map((job) => {
                    return <JobDisplay jobInfo={job} />;
                })}
            </div>
        )
    }

}

export default ExperienceDisplay;