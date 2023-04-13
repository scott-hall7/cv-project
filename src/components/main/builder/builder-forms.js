import React, { useState } from "react";
import GeneralForm from "./builder-components/general-form"
import ExperienceForm from "./builder-components/experience-form"
import EducationForm from "./builder-components/education-form"
import SkillsForm from "./builder-components/skills-form"

const BuilderForms = (props) => {
    const [tab, setTab] = useState("general");

    const handleTabClick = (e) => {
        setTab(e.target.value)
    }

    return  (
        <div className="builder-forms">
            <div className="builder-forms-nav">
                <button type="submit" value="general" className={tab === "general" ? "builder-forms-nav-active" : null} onClick={handleTabClick}>General</button>
                <button type="submit" value="experience" className={tab === "experience" ? "builder-forms-nav-active" : null} onClick={handleTabClick}>Experience</button>
                <button type="submit" value="education" className={tab === "education" ? "builder-forms-nav-active" : null} onClick={handleTabClick}>Education</button>
                <button type="submit" value="skills" className={tab === "skills" ? "builder-forms-nav-active" : null} onClick={handleTabClick}>Skills</button>
            </div>
            <div className="builder-forms-display">
                <GeneralForm display={tab === "general" ? "active-form" : "hidden-form"} onChange={props.updateGeneralInfo} generalInfo={props.resumeInfo.general} />
                <ExperienceForm display={tab === "experience" ? "active-form" : "hidden-form"} updateExperienceInfo={props.updateExperienceInfo} addJob={props.addExperienceInfo} deleteJob={props.deleteExperienceInfo} experienceInfo={props.resumeInfo.experience} />
                <EducationForm display={tab === "education" ? "active-form" : "hidden-form"} onChange={props.updateEducationInfo} educationInfo={props.resumeInfo.education} />
                <SkillsForm display={tab === "skills" ? "active-form" : "hidden-form"} onChange={props.updateSkillsInfo} skillsInfo={props.resumeInfo.skills} />
            </div>
        </div>
    )
}

export default BuilderForms;