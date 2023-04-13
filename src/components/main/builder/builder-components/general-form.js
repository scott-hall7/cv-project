import React from "react";

const GeneralForm = (props) => {
    return  (
        <div className={props.display}>
            <h3 className="form-header">General Information</h3>
            <form className="form">
                <input type="text" id="fname" name="firstName" placeholder="First Name" onChange={props.onChange} value={props.generalInfo.firstName} />
                <input type="text" id="lname" name="lastName" placeholder="Last Name" onChange={props.onChange} value={props.generalInfo.lastName} />
                <input type="tel" id="phone" name="phoneNumber" placeholder="Phone Number" onChange={props.onChange} value={props.generalInfo.phoneNumber}  />
                <input type="email" id="email" name="email" placeholder="Email" onChange={props.onChange} value={props.generalInfo.email} />
                <input type="text" id="city" name="city" placeholder="City" onChange={props.onChange} value={props.generalInfo.city} />
                <input type="text" id="state" name="state" placeholder="State" onChange={props.onChange} value={props.generalInfo.state} />
            </form>
        </div>
    )
}

export default GeneralForm;