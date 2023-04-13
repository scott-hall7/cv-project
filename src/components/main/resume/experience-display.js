import React from "react";
import JobDisplay from "./job-display"

const ExperienceDisplay = (props) => {
    return  (
        <div className="resume-section">
            <div className="resume-section-header">
                <h5>EXPERIENCE</h5>
                <hr></hr>
            </div>
            {props.experienceInfo.map((job) => {
                return <JobDisplay jobInfo={job} />;
            })}
        </div>
    )
}

export default ExperienceDisplay;
