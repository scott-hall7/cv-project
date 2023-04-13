import React from "react";

const EducationDisplay = (props) => {
    return  (
        <div className="resume-section">
            <div className="resume-section-header">
                <h5>EDUCATION</h5>
                <hr></hr>
            </div>
            <div className="resume-section-content">
                <div className="resume-section-content-info">
                    <div className="resume-section-content-info-school">
                        <p id="school-name">{props.educationInfo.university}</p>
                        <p className="line-spacing"> | </p>
                        <p>{props.educationInfo.degree}</p>
                    </div>
                    <div className="resume-section-content-info-date">
                        <p>{props.educationInfo.graduationDate}</p>
                    </div>
                </div>
                <ul className="resume-section-content-list">
                    <li>{props.educationInfo.extraCurricular1}</li>
                    <li>{props.educationInfo.extraCurricular2}</li>
                </ul>
            </div>
        </div>
    )
}

export default EducationDisplay;

