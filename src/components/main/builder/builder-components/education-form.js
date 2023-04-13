import React from "react";

const EducationForm = (props) =>    {
    return  (
        <div className={props.display}>
            <h3 id="tab-header">Education Information</h3>
            <form className="form">
                <input 
                    type="text" 
                    placeholder="University" 
                    name="university" 
                    value={props.educationInfo.university} 
                    onChange={props.onChange}
                />
                <input 
                    type="text" 
                    placeholder="Degree" 
                    name="degree" 
                    value={props.educationInfo.degree} 
                    onChange={props.onChange} 
                />
                <input 
                    type="text" 
                    placeholder="Graduation Date" 
                    name="graduationDate" 
                    value={props.educationInfo.graduationDate} 
                    onChange={props.onChange} 
                />
                <input 
                    type="text" 
                    placeholder="Extra Curricular" 
                    name="extraCurricular1" 
                    value={props.educationInfo.extraCurricular1} 
                    onChange={props.onChange} 
                />
                <input 
                    type="text" 
                    placeholder="Extra Curricular" 
                    name="extraCurricular2" 
                    value={props.educationInfo.extraCurricular2} 
                    onChange={props.onChange} 
                />
            </form>
        </div>
    )
}

export default EducationForm;

