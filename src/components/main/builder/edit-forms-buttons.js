import React from "react";

const EditFormButtons = (props) => {
    return  (
        <div className="page-buttons">
            <button type="submit" id="form-example-button" onClick={props.exampleForm}>Form Example</button>
            <button type="submit" id="reset-forms-button" onClick={props.resetForms}>Reset Forms</button>
        </div>
    )
}

export default EditFormButtons;