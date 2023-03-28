import React, { Component } from "react";

class General extends Component  {
    render() {
        return  (
            <div className="general-info">
                <form className="general-info-form">
                    <label htmlFor="fname">First name:</label>
                    <input type="text" id="fname" name="fname" />

                    <label htmlFor="lname">Last name:</label>
                    <input type="text" id="lname" name="lname" />

                    <label htmlFor="phone">Phone number:</label>
                    <input type="tel" id="phone" name="phone" />

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" />
                    
                    <label htmlFor="location">City & State:</label>
                    <input type="text" id="location" name="location" />
                </form>
            </div>
        )
    }

}

export default General;