import React from "react";

const SkillsDisplay = (props) => {
    return  (
        <div className="resume-section">
            <div className="resume-section-header">
                <h5>SKILLS</h5>
                <hr></hr>
            </div>
            <div className="resume-section-content">
                <ul className="resume-section-content-list">
                    <li>{props.skillsInfo}</li>
                </ul>
            </div>
        </div>
    )
}

export default SkillsDisplay;
