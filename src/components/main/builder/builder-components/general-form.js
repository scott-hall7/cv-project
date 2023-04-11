import React, { Component } from "react";

class GeneralForm extends Component  {
    render() {

        const { display, onChange, generalInfo } = this.props;

        return  (
            <div className={display}>
                <h3 className="form-header">General Information</h3>
                <form className="form">
                    <input type="text" id="fname" name="firstName" placeholder="First Name" onChange={onChange} value={generalInfo.firstName} />
                    <input type="text" id="lname" name="lastName" placeholder="Last Name" onChange={onChange} value={generalInfo.lastName} />
                    <input type="tel" id="phone" name="phoneNumber" placeholder="Phone Number" onChange={onChange} value={generalInfo.phoneNumber}  />
                    <input type="email" id="email" name="email" placeholder="Email" onChange={onChange} value={generalInfo.email} />
                    <input type="text" id="city" name="city" placeholder="City" onChange={onChange} value={generalInfo.city} />
                    <input type="text" id="state" name="state" placeholder="State" onChange={onChange} value={generalInfo.state} />
                </form>
            </div>
        )
    }

}

export default GeneralForm;