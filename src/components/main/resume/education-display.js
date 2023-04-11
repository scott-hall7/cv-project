import React, { Component } from "react";

class EducationDisplay extends Component  {
    render() {
        const { educationInfo } = this.props;
        return  (
            <div className="resume-section">
                <div className="resume-section-header">
                    <h5>EDUCATION</h5>
                    <hr></hr>
                </div>
                <div className="resume-section-content">
                    <div className="resume-section-content-info">
                        <div className="resume-section-content-info-school">
                            <p id="school-name">{educationInfo.university}</p>
                            <p className="line-spacing"> | </p>
                            <p>{educationInfo.degree}</p>
                        </div>
                        <div className="resume-section-content-info-date">
                            <p>{educationInfo.graduationDate}</p>
                        </div>
                    </div>
                    <ul className="resume-section-content-list">
                        <li>{educationInfo.extraCurricular1}</li>
                        <li>{educationInfo.extraCurricular2}</li>
                    </ul>
                </div>
            </div>
        )
    }

}

export default EducationDisplay;