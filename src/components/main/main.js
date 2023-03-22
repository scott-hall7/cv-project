import React, { Component } from "react";
import Builder from "./builder/builder";
import Resume from "./resume/resume";


class Main extends Component  {
    render() {
        return  (
            <div className="container">
                <Builder />
                <Resume />
            </div>
        )
    }

}

export default Main;