import React, { Component } from "react";

class SkillsForm extends Component  {
    render() {

        const { display, onChange, skillsInfo } = this.props;

        return  (
            <div className={display}>
                <h3 id="tab-header">Skills Information</h3>
                <form className="form">
                    <textarea id="skills" name="skills-list" placeholder="Leadership, Communication, Excel..." onChange={onChange} value={skillsInfo} />
                    <h6>Please separate skills by comma. Ex: Leadership, Communication, Excel...</h6>
                </form>
            </div>
        )
    }
}

export default SkillsForm;