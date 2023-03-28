import React, { Component } from "react";
import General from "./general-info";
import Experience from "./experience-info";
import Education from "./education-info";
import Skills from "./skills-info";

class Builder extends Component  {
    constructor(props)  {
        super(props);

        this.state = ({
            tab: 'general',
        })

        this.handleTabClick = this.handleTabClick.bind(this)
    }

    handleTabClick = (e) => {
        this.setState({
            display: e.target.value,
        });
    };

    render() {
        let tab;
        
        if(this.state.tab === "general") tab = <General />;
        if(this.state.tab === "experience") tab = <Experience />;
        if(this.state.tab === "education") tab = <Education />;
        if(this.state.tab === "skills") tab = <Skills />;

        return  (
            <div className="builder">
                <div className="main-builder">
                    <div className="main-builder-buttons">
                        <button type="submit" value="general" onClick={this.handleTabClick}>General</button>
                        <button type="submit" value="experience" onClick={this.handleTabClick}>Experience</button>
                        <button type="submit" value="education" onClick={this.handleTabClick}>Education</button>
                        <button type="submit" value="skills" onClick={this.handleTabClick}>Skills</button>
                    </div>
                    <div className="builder-display">
                        {tab}
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