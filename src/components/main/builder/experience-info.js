import React, { Component } from "react";

class Experience extends Component  {
    render() {
        return  (
            <div className="experience-info">
                <form className="experience-info-form">
                    <label htmlFor="fname">Experience:</label><br />
                    <input type="text" id="fname" name="fname"/><br />

                    <label htmlFor="lname">Last name:</label><br />
                    <input type="text" id="lname" name="lname" /><br />

                    <label htmlFor="phone">Phone number:</label><br />
                    <input type="tel" id="phone" name="phone" /><br />

                    <label htmlFor="email">Email:</label><br />
                    <input type="email" id="email" name="email" /><br />
                    
                    <label htmlFor="location">City & State:</label><br />
                    <input type="text" id="location" name="location" /><br />
                </form>
            </div>
        )
    }

}

export default Experience;