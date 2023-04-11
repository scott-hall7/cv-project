import React, { Component } from "react";

class EditFormButtons extends Component  {
    render() {
        const { exampleForm, resetForms } = this.props;
        return  (
            <div className="page-buttons">
                <button type="submit" id="form-example-button" onClick={exampleForm}>Form Example</button>
                <button type="submit" id="reset-forms-button" onClick={resetForms}>Reset Forms</button>
            </div>
        )
    }
}

export default EditFormButtons;