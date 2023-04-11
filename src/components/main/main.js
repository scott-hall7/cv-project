import React, { Component } from "react";
import BuilderForms from "./builder/builder-forms";
import EditFormsButtons from "./builder/edit-forms-buttons";

import GeneralDisplay from "./resume/general-display";
import ExperienceDisplay from "./resume/experience-display";
import EducationDisplay from "./resume/education-display";
import SkillsDisplay from "./resume/skills-display"

import blankForm from "../utilities/blank-form";
import exampleForm from "../utilities/example-form";
import uniqid from "uniqid";



class Main extends Component  {
    constructor()  {
        super();

        this.state = {
            resumeInfo: {
                general: {},
                experience: [
                    {id: uniqid(), position: "Financial Analyst", company: "Big Corporation Inc.", city: "Example City", state: "TN", startDate: "Dec. 2018", endDate: "Present", jobTask1: "Task 1", jobTask2: "Task 2", jobTask3: "Task 3", jobTask4: "Task 4", jobTask5: "Task 5"},
                ],
                education: {},
                skills: '',
            },
        };
        
        this.updateGeneralInfo = this.updateGeneralInfo.bind(this);
        this.updateExperienceInfo = this.updateExperienceInfo.bind(this);
        this.updateEducationInfo = this.updateEducationInfo.bind(this);
        this.updateSkillsInfo = this.updateSkillsInfo.bind(this);
    }

    updateGeneralInfo = (e) =>   {
        const name = e.target.name;
        this.setState(prevState => ({
            resumeInfo: {
              ...prevState.resumeInfo,           
              general: {                     
                ...prevState.resumeInfo.general,   
                [name]: e.target.value,          
              }
            }
        }))
    }

    updateExperienceInfo = (e, id) =>   {
        const name = e.target.name;
        const newExperience = this.state.resumeInfo.experience.map((job) =>  {
            if (job.id !== id)   {
                return job;
            } else {
                job[name] = e.target.value;
                return job;
            }
        })
        this.setState(prevState => ({
            resumeInfo: {
                ...prevState.resumeInfo,          
                    experience: newExperience,    
            } 
        }))
    }

    addExperienceInfo = () =>   {
        if(this.state.resumeInfo.experience.length === 4) return alert("For a clean resume, please limit job experience to last 4 jobs.");
        this.setState(prevState => ({
            resumeInfo: {
                ...prevState.resumeInfo,           
                    experience: [
                    ...prevState.resumeInfo.experience,
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
            } 
        }))
    }

    deleteExperienceInfo = () =>   {
        const newExperience = this.state.resumeInfo.experience.slice(0, -1)
        this.setState(prevState => ({
            resumeInfo: {
                ...prevState.resumeInfo,          
                    experience: newExperience,    
            } 
        }))
    }

    updateEducationInfo = (e) =>  {
        console.log('hello')
        const name = e.target.name;
        this.setState(prevState => ({
            resumeInfo: {
              ...prevState.resumeInfo,           
              education: {                     
                ...prevState.resumeInfo.education,   
                [name]: e.target.value,          
              }
            }
        }))
    }

    updateSkillsInfo = (e) =>  {
        this.setState(prevState => ({
            resumeInfo: {
              ...prevState.resumeInfo,           
              skills: e.target.value,                            
            }
        }))
    }

    exampleForm = () => {
        this.setState({resumeInfo: exampleForm});
    }

    resetForms = () => {
        this.setState({resumeInfo: blankForm});
    }

    render() {
        const { resumeInfo } = this.state;
            return ( 
                <div className="container">
                    <div className="builder-display">
                        <BuilderForms 
                            updateGeneralInfo={this.updateGeneralInfo}
                            updateExperienceInfo={this.updateExperienceInfo}
                            addExperienceInfo={this.addExperienceInfo}
                            deleteExperienceInfo={this.deleteExperienceInfo}
                            updateEducationInfo={this.updateEducationInfo}
                            updateSkillsInfo={this.updateSkillsInfo}  
                            resumeInfo={resumeInfo} 
                        />
                        <EditFormsButtons 
                            exampleForm={this.exampleForm} 
                            resetForms={this.resetForms} 
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

}

export default Main;