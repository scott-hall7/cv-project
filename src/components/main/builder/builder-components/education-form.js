import React, { Component } from "react";

class EducationForm extends Component  {
    render() {

        const { display, onChange, educationInfo } = this.props;

        return  (
            <div className={display}>
                <h3 id="tab-header">Education Information</h3>
                <form className="form">
                    <input 
                        type="text" 
                        placeholder="University" 
                        name="university" 
                        value={educationInfo.university} 
                        onChange={onChange}
                    />
                    <input 
                        type="text" 
                        placeholder="Degree" 
                        name="degree" 
                        value={educationInfo.degree} 
                        onChange={onChange} 
                    />
                    <input 
                        type="text" 
                        placeholder="Graduation Date" 
                        name="graduationDate" 
                        value={educationInfo.graduationDate} 
                        onChange={onChange} 
                    />
                    <input 
                        type="text" 
                        placeholder="Extra Curricular" 
                        name="extraCurricular1" 
                        value={educationInfo.extraCurricular1} 
                        onChange={onChange} 
                    />
                    <input 
                        type="text" 
                        placeholder="Extra Curricular" 
                        name="extraCurricular2" 
                        value={educationInfo.extraCurricular2} 
                        onChange={onChange} 
                    />
                </form>
            </div>
        )
    }
}

export default EducationForm;