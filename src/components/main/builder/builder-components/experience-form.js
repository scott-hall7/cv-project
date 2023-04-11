import React, { Component } from "react";
import JobForm from "./job-form"

class ExperienceForm extends Component  {
    render() {

        const { display, experienceInfo, updateExperienceInfo, addJob, deleteJob } = this.props;

        return  (
            <div className={display}>
                <h3 className="form-header">Experience Information</h3>
                <div className="experience-form-buttons">
                    <button type="submit" id="add-job-button" onClick={addJob}>Add Job</button>
                    <button type="submit" id="delete-job-button" onClick={deleteJob}>Delete Job</button>
                </div>
                {experienceInfo.map((job) => {
                    return <JobForm myKey={job.id} jobInfo={job} onChange={updateExperienceInfo} />
                })}
            </div>
        )
    }
}
export default ExperienceForm;