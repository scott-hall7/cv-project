import React, { Component } from "react";

class JobForm extends Component  {
    render() {

        const { myKey, onChange, jobInfo } = this.props;
        
        return  (
            <div className="job-container">
                <hr></hr>
                <form key={myKey} className="form">
                    <input 
                        type="text" 
                        name="position" 
                        placeholder="Job Title"
                        value={jobInfo.position} 
                        onChange={(e) => onChange(e, myKey)}
                    />
                    <input 
                        type="text" 
                        name="company" 
                        placeholder="Company" 
                        value={jobInfo.company} 
                        onChange={(e) => onChange(e, myKey)} 
                    />
                    <input 
                        type="text" 
                        name="startDate" 
                        placeholder="Start Date" 
                        value={jobInfo.startDate} 
                        onChange={(e) => onChange(e, myKey)} 
                    />
                    <input 
                        type="text" 
                        name="endDate" 
                        placeholder="To Date" 
                        value={jobInfo.endDate} 
                        onChange={(e) => onChange(e, myKey)} 
                    />
                    <input 
                        type="text" 
                        name="city" 
                        placeholder="Location of Job: City"
                        value={jobInfo.city}  
                        onChange={(e) => onChange(e, myKey)} 
                    />
                    <input 
                        type="text" 
                        name="state" 
                        placeholder="Location of Job: State"
                        value={jobInfo.state}  
                        onChange={(e) => onChange(e, myKey)} 
                    />
                    <input 
                        type="text" 
                        name="jobTask1" 
                        placeholder="Job Responsibility"
                        value={jobInfo.jobTask1}  
                        onChange={(e) => onChange(e, myKey)} 
                    />
                    <input 
                        type="text" 
                        name="jobTask2" 
                        placeholder="Job Responsibility"
                        value={jobInfo.jobTask2}  
                        onChange={(e) => onChange(e, myKey)} 
                    />
                    <input 
                        type="text" 
                        name="jobTask3" 
                        placeholder="Job Responsibility"
                        value={jobInfo.jobTask3}  
                        onChange={(e) => onChange(e, myKey)} 
                    />
                    <input 
                        type="text" 
                        name="jobTask4" 
                        placeholder="Job Responsibility"
                        value={jobInfo.jobTask4}  
                        onChange={(e) => onChange(e, myKey)} 
                    />
                    <input 
                        type="text" 
                        name="jobTask5" 
                        placeholder="Job Responsibility"
                        value={jobInfo.jobTask5}  
                        onChange={(e) => onChange(e, myKey)} 
                    />
                </form>
            </div>
        )
    }   
}

export default JobForm;


