import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import ConfirmModal from "./ConfimModal"

export default function SignUpForm(props) {

    const [formData, setFormData] = useState({
        fullName: "",
        address: "",
        birthday: "",
        email: "",
        phone: ""
    });

    const [formErrors, setFormErrors] = useState({
        fullName: "",
        address: "",
        birthday: "",
        email: "",
        phone: ""
    });

    function handleChange(event) {
        const { name, value } = event.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    }

    function handleSubmit(event) {

        // Perform validation here
        let isValid = true;
        const errors = {};

        // Validate Full Name
        if (!/^[A-Za-z ]+$/.test(formData.fullName)) {
            isValid = false;
            errors.fullName = "Name cannot include any numbers or symbols";
        }

        // Validate Address
        if (!/^\s*\S+(?:\s+\S+){2}/.test(formData.address)) {
            isValid = false;
            errors.address = "Street address example: 234 Main St";
        }

        // Validate Birthday
        const enteredDate = new Date(formData.birthday);
        const currentDate = new Date();
        if (!/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/.test(formData.birthday) || enteredDate >= currentDate) {
            isValid = false;
            errors.birthday = "Birthday format must follow YYYY-MM-DD and be before the current date";
        }

        // Validate Email
        if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(formData.email)) {
            isValid = false;
            errors.email = "Please provide a valid email address";
        }

        // Validate Phone Number
        if (!/^(1-)?\d{3}-\d{3}-\d{4}$/.test(formData.phone)) {
            isValid = false;
            errors.phone = "Phone number format must follow XXX-XXX-XXXX";
        }

        setFormErrors(errors);

        if (isValid) {
            // Form submission logic
            console.log(formData);
            props.handleClose();
            props.confirmationShow()
        }
    }

    return (
        <Form id="signup-form">
            <Form.Group className="signup-form--group">
                <Form.Label className="signup-form--label">Full Name</Form.Label>
                <Form.Control
                    className="signup-form--input"
                    type="text"
                    placeholder="Enter Full Name"
                    onChange={handleChange}
                    value={formData.fullName}
                    name="fullName"
                    required={true}
                />
                {formErrors.fullName && <span className="error-message">{formErrors.fullName}</span>}
            </Form.Group>

            <Form.Group className="signup-form--group">
                <Form.Label className="signup-form--label">Address</Form.Label>
                <Form.Control
                className="signup-form--input"
                type="text" 
                placeholder="Enter Address"
                onChange={handleChange}
                value={formData.text}
                name="address"
                pattern="^\s*\S+(?:\s+\S+){2}"
                required={true}
                />
                {formErrors.address && <span className="error-message">{formErrors.address}</span>}
            </Form.Group>

            <Form.Group className="signup-form--group">
                <Form.Label className="signup-form--label">Birthday</Form.Label>
                <Form.Control
                className="signup-form--input"
                type="date" 
                placeholder="Enter Birthday"
                onChange={handleChange}
                value={formData.birthday}
                name="birthday"
                pattern="^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$"
                required={true}
                />
                {formErrors.birthday && <span className="error-message">{formErrors.birthday}</span>}
            </Form.Group>

            <Form.Group className="signup-form--group">
                <Form.Label className="signup-form--label">Email</Form.Label>
                <Form.Control
                className="signup-form--input"
                type="email" 
                placeholder="Enter Email"
                onChange={handleChange}
                value={formData.email}
                name="email"
                pattern="^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
                required={true}
                />
                {formErrors.email && <span className="error-message">{formErrors.email}</span>}
            </Form.Group>
            
            <Form.Group className="signup-form--group">
                <Form.Label className="signup-form--label">Phone Number</Form.Label>
                <Form.Control
                className="signup-form--input"
                type="text"
                placeholder="Enter Phone Number"
                onChange={handleChange}
                value={formData.phone}
                name="phone"
                pattern= "^(1-)?\d{3}-\d{3}-\d{4}$"
                required={true}
                />
                {formErrors.phone && <span className="error-message">{formErrors.phone}</span>}
            </Form.Group>

            <Button variant="warning" className="sign-up-submit-button" onClick={handleSubmit}>
                Submit
            </Button>
        </Form>
    );
}