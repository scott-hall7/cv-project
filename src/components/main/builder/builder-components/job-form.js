import React from "react";

const JobForm = (props) => {
    return  (
        <div className="job-container">
            <hr></hr>
            <form key={props.myKey} className="form">
                <input 
                    type="text" 
                    name="position" 
                    placeholder="Job Title"
                    value={props.jobInfo.position} 
                    onChange={(e) => props.onChange(e, props.myKey)}
                />
                <input 
                    type="text" 
                    name="company" 
                    placeholder="Company" 
                    value={props.jobInfo.company} 
                    onChange={(e) => props.onChange(e, props.myKey)} 
                />
                <input 
                    type="text" 
                    name="startDate" 
                    placeholder="Start Date" 
                    value={props.jobInfo.startDate} 
                    onChange={(e) => props.onChange(e, props.myKey)} 
                />
                <input 
                    type="text" 
                    name="endDate" 
                    placeholder="To Date" 
                    value={props.jobInfo.endDate} 
                    onChange={(e) => props.onChange(e, props.myKey)} 
                />
                <input 
                    type="text" 
                    name="city" 
                    placeholder="Location of Job: City"
                    value={props.jobInfo.city}  
                    onChange={(e) => props.onChange(e, props.myKey)} 
                />
                <input 
                    type="text" 
                    name="state" 
                    placeholder="Location of Job: State"
                    value={props.jobInfo.state}  
                    onChange={(e) => props.onChange(e, props.myKey)} 
                />
                <input 
                    type="text" 
                    name="jobTask1" 
                    placeholder="Job Responsibility"
                    value={props.jobInfo.jobTask1}  
                    onChange={(e) => props.onChange(e, props.myKey)} 
                />
                <input 
                    type="text" 
                    name="jobTask2" 
                    placeholder="Job Responsibility"
                    value={props.jobInfo.jobTask2}  
                    onChange={(e) => props.onChange(e, props.myKey)} 
                />
                <input 
                    type="text" 
                    name="jobTask3" 
                    placeholder="Job Responsibility"
                    value={props.jobInfo.jobTask3}  
                    onChange={(e) => props.onChange(e, props.myKey)} 
                />
                <input 
                    type="text" 
                    name="jobTask4" 
                    placeholder="Job Responsibility"
                    value={props.jobInfo.jobTask4}  
                    onChange={(e) => props.onChange(e, props.myKey)} 
                />
                <input 
                    type="text" 
                    name="jobTask5" 
                    placeholder="Job Responsibility"
                    value={props.jobInfo.jobTask5}  
                    onChange={(e) => props.onChange(e, props.myKey)} 
                />
            </form>
        </div>
    )
}

export default JobForm;
