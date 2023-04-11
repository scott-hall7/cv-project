import React, { Component } from "react";
import GeneralForm from "./builder-components/general-form"
import ExperienceForm from "./builder-components/experience-form"
import EducationForm from "./builder-components/education-form"
import SkillsForm from "./builder-components/skills-form"

class BuilderForms extends Component  {
    constructor()  {
        super();

        this.state = {
            tab: 'general',
        }

        this.handleTabClick = this.handleTabClick.bind(this)
    }

    handleTabClick = (e) => {
        e.preventDefault();
        this.setState({
            tab: e.target.value,
        })
    }

    render() {

        const { tab } = this.state;
        const { updateGeneralInfo, updateExperienceInfo, updateEducationInfo,  updateSkillsInfo, resumeInfo, addExperienceInfo, deleteExperienceInfo } = this.props;

        return  (
            <div className="builder-forms">
                <div className="builder-forms-nav">
                    <button type="submit" value="general" className={tab === "general" ? "builder-forms-nav-active" : null} onClick={this.handleTabClick}>General</button>
                    <button type="submit" value="experience" className={tab === "experience" ? "builder-forms-nav-active" : null} onClick={this.handleTabClick}>Experience</button>
                    <button type="submit" value="education" className={tab === "education" ? "builder-forms-nav-active" : null} onClick={this.handleTabClick}>Education</button>
                    <button type="submit" value="skills" className={tab === "skills" ? "builder-forms-nav-active" : null} onClick={this.handleTabClick}>Skills</button>
                </div>
                <div className="builder-forms-display">
                    <GeneralForm display={tab === "general" ? "active-form" : "hidden-form"} onChange={updateGeneralInfo} generalInfo={resumeInfo.general} />
                    <ExperienceForm display={tab === "experience" ? "active-form" : "hidden-form"} updateExperienceInfo={updateExperienceInfo} addJob={addExperienceInfo} deleteJob={deleteExperienceInfo} experienceInfo={resumeInfo.experience} />
                    <EducationForm display={tab === "education" ? "active-form" : "hidden-form"} onChange={updateEducationInfo} educationInfo={resumeInfo.education} />
                    <SkillsForm display={tab === "skills" ? "active-form" : "hidden-form"} onChange={updateSkillsInfo} skillsInfo={resumeInfo.skills} />
                </div>
            </div>
        )
    }

}

export default BuilderForms;