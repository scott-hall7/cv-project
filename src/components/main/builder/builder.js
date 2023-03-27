import React, { Component } from "react";
import General from "./general-info";
import Experience from "./experience-info";
import Education from "./education-info";
import Skills from "./skills-info";

class Builder extends Component  {

    render() {
        return  (
            <div className="builder">
                <div className="main-builder">
                    <div className="main-builder-buttons">
                        <button type="submit">General</button>
                        <button type="submit">Experience</button>
                        <button type="submit">Education</button>
                        <button type="submit">Skills</button>
                    </div>
                    <div class="builder-display">
                        <General />
                    </div>
                </div>
                <div className="edit-buttons">
                    <button type="submit" id="form-example-button">Form Example</button>
                    <button type="submit" id="print-pdf-button">Print PDF</button>
                    <button type="submit" id="reset-forms-button">Reset Forms</button>
                </div>
            </div>
        )
    }

}

export default Builder;