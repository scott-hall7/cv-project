import React, { Component } from "react";

class GeneralDisplay extends Component  {
    render() {
        const{ generalInfo } = this.props;
        return  (
            <div className="resume-general-info">
                <h2>{generalInfo.firstName} {generalInfo.lastName}</h2>
                <div className="resume-general-info-contacts">
                    <p>{generalInfo.phoneNumber}</p>
                    <p>&#x2022;</p>
                    <p>{generalInfo.email}</p>
                    <p>&#x2022;</p>
                    <p>{generalInfo.city}, {generalInfo.state}</p>
                </div>
            </div>
        )
    }

}

export default GeneralDisplay;