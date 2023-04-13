import React, { useState } from "react";
import BuilderForms from "./builder/builder-forms";
import EditFormsButtons from "./builder/edit-forms-buttons";

import GeneralDisplay from "./resume/general-display";
import ExperienceDisplay from "./resume/experience-display";
import EducationDisplay from "./resume/education-display";
import SkillsDisplay from "./resume/skills-display"

import blankForm from "../utilities/blank-form";
import exampleForm from "../utilities/example-form";
import uniqid from "uniqid";

const Main = () => {
    const [resumeInfo, setResumeInfo] = useState({
                                            general: {},
                                            experience: [
                                                {id: uniqid(), position: "Financial Analyst", company: "Big Corporation Inc.", city: "Example City", state: "TN", startDate: "Dec. 2018", endDate: "Present", jobTask1: "Task 1", jobTask2: "Task 2", jobTask3: "Task 3", jobTask4: "Task 4", jobTask5: "Task 5"},
                                            ],
                                            education: {},
                                            skills: '',
    });

    const updateGeneralInfo = (e) =>   {
        const name = e.target.name;
        setResumeInfo((prevState) => ({
            ...prevState,         
            general: {                     
            ...prevState.general,   
            [name]: e.target.value,          
            }
        }))
    }

    const updateExperienceInfo = (e, id) =>   {
        const name = e.target.name;
        const newExperience = resumeInfo.experience.map((job) =>  {
            if (job.id !== id)   {
                return job;
            } else {
                job[name] = e.target.value;
                return job;
            }
        })
        setResumeInfo((prevState) => ({
            ...prevState,         
            experience: newExperience,    
        }))
    }

    const addExperienceInfo = () =>   {
        if(resumeInfo.experience.length === 4) return alert("For a clean resume, please limit job experience to last 4 jobs.");
        setResumeInfo((prevState) => ({
            ...prevState,            
            experience: [
            ...prevState.experience,
                {   id: uniqid(),
                    position: '',
                    company: '',
                    city: '',
                    state: '',
                    startDate: '',
                    endDate: '',
                    task1: '',
                    task2: '',
                    task3: '',
                    task4: '',
                    task5: '',
                }
            ]      
        }))
    }

    const deleteExperienceInfo = () =>   {
        const newExperience = resumeInfo.experience.slice(0, -1)
        setResumeInfo((prevState) => ({
            ...prevState,         
            experience: newExperience,    
        }))
    }

    const updateEducationInfo = (e) =>  {
        const name = e.target.name;
        setResumeInfo((prevState) => ({
            ...prevState,          
            education: {                     
                ...prevState.education,   
                [name]: e.target.value,          
            }
        }))
    }

    const updateSkillsInfo = (e) =>  {
        setResumeInfo((prevState) => ({
            ...prevState,           
            skills: e.target.value,                            
        }))
    }

    const setExampleForm = () => {
        setResumeInfo(exampleForm);
    }

    const resetForms = () => {
        setResumeInfo(blankForm);
    }

    return ( 
        <div className="container">
            <div className="builder-display">
                <BuilderForms 
                    updateGeneralInfo={updateGeneralInfo}
                    updateExperienceInfo={updateExperienceInfo}
                    addExperienceInfo={addExperienceInfo}
                    deleteExperienceInfo={deleteExperienceInfo}
                    updateEducationInfo={updateEducationInfo}
                    updateSkillsInfo={updateSkillsInfo}  
                    resumeInfo={resumeInfo} 
                />
                <EditFormsButtons 
                    exampleForm={setExampleForm} 
                    resetForms={resetForms} 
                />
            </div>
            <div className="resume-display">
                <GeneralDisplay generalInfo={resumeInfo.general} />
                <ExperienceDisplay experienceInfo={resumeInfo.experience} />
                <EducationDisplay educationInfo={resumeInfo.education} />
                <SkillsDisplay skillsInfo={resumeInfo.skills} />
             </div>
        </div>
    )
}

export default Main;


