import React, { Component } from "react";

class SkillsDisplay extends Component  {
    render() {
        const { skillsInfo } = this.props;
        return  (
            <div className="resume-section">
                <div className="resume-section-header">
                    <h5>SKILLS</h5>
                    <hr></hr>
                </div>
                <div className="resume-section-content">
                    <ul className="resume-section-content-list">
                        <li>{skillsInfo}</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default SkillsDisplay;