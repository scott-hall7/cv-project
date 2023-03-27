import React, { Component } from "react";

class General extends Component  {
    render() {
        return  (
            <div className="general-info">
                <form className="general-info-form">
                    <label for="fname">First name:</label>
                    <input type="text" id="fname" name="fname" />

                    <label for="lname">Last name:</label>
                    <input type="text" id="lname" name="lname" />

                    <label for="phone">Phone number:</label>
                    <input type="tel" id="phone" name="phone" />

                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" />
                    
                    <label for="location">City & State:</label>
                    <input type="text" id="location" name="location" />
                </form>
            </div>
        )
    }

}

export default General;