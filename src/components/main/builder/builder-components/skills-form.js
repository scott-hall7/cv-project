import React from "react";


const SkillsForm = (props) => {
    return  (
        <div className={props.display}>
            <h3 id="tab-header">Skills Information</h3>
            <form className="form">
                <textarea id="skills" name="skills-list" placeholder="Leadership, Communication, Excel..." onChange={props.onChange} value={props.skillsInfo} />
                <h6>Please separate skills by comma. Ex: Leadership, Communication, Excel...</h6>
            </form>
        </div>
    )
}

export default SkillsForm;

