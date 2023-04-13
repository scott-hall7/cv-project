import React from "react";
import JobForm from "./job-form";

const ExperienceForm = (props) => {
    return  (
        <div className={props.display}>
            <h3 className="form-header">Experience Information</h3>
            <div className="experience-form-buttons">
                <button type="submit" id="add-job-button" onClick={props.addJob}>Add Job</button>
                <button type="submit" id="delete-job-button" onClick={props.deleteJob}>Delete Job</button>
            </div>
            {props.experienceInfo.map((job) => {
                return <JobForm myKey={job.id} jobInfo={job} onChange={props.updateExperienceInfo} />
            })}
        </div>
    )
}
export default ExperienceForm;