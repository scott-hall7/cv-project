import React, { Component } from "react";

class Experience extends Component  {
    render() {
        return  (
            <div className="experience-info">
                <form className="experience-info-form">
                    <label for="fname">First name:</label><br />
                    <input type="text" id="fname" name="fname"/><br />

                    <label for="lname">Last name:</label><br />
                    <input type="text" id="lname" name="lname" /><br />

                    <label for="phone">Phone number:</label><br />
                    <input type="tel" id="phone" name="phone" /><br />

                    <label for="email">Email:</label><br />
                    <input type="email" id="email" name="email" /><br />
                    
                    <label for="location">City & State:</label><br />
                    <input type="text" id="location" name="location" /><br />
                </form>
            </div>
        )
    }

}

export default Experience;