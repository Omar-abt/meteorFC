import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function ContactUsForm() {

    const [formData, setFormData] = React.useState({
        fullName: "",
        email: "",
        message: ""
    });

    const [formErrors, setFormErrors] = React.useState({
        fullName: "",
        email: "",
        message: ""
    });

    function handleChange(event) {
        const { name, value } = event.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    }

    function handleSubmit(event) {
        event.preventDefault();

        // Perform validation here
        let isValid = true;
        const errors = {};

        // Validate Full Name
        if (!/^[A-Za-z ]+$/.test(formData.fullName)) {
            isValid = false;
            errors.fullName = "Name cannot include any numbers or symbols";
        }

        // Validate Email
        if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(formData.email)) {
            isValid = false;
            errors.email = "Please provide a valid email address";
        }

        //Validate Message
        if (!/\S+/.test(formData.message)) {
            isValid = false;
            errors.message = "Please provide a message" 
        }

        setFormErrors(errors);

        if (isValid) {
            // Form submission logic
            console.log(formData);
            setFormData({
                fullName: "",
                email: "",
                message: ""
            });
        }
    }

    return (
        <Form id="contact-form">
            <Form.Group className="contact-form--group">
                <Form.Label className="contact-form--label">Full Name</Form.Label>
                <Form.Control
                    className="contact-form--input"
                    type="text"
                    placeholder="Enter Full Name"
                    onChange={handleChange}
                    value={formData.fullName}
                    name="fullName"
                    required
                />
                {formErrors.fullName && <span className="error-message">{formErrors.fullName}</span>}
            </Form.Group>

            <Form.Group className="contact-form--group">
                <Form.Label className="contact-form--label">Email</Form.Label>
                <Form.Control
                    className="contact-form--input"
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

            <Form.Group className="contact-form--group">
                <Form.Label className="contact-form--label">Message</Form.Label>
                <Form.Control 
                    as="textarea" 
                    rows={4} 
                    className="contact-form--input"
                    onChange={handleChange}
                    value={formData.message}
                    name="message"
                    pattern="/\S+/"
                    required={true}
                />
                {formErrors.message && <span className="error-message">{formErrors.message}</span>}
            </Form.Group>

            <Button variant="warning" className="contact-submit-button" onClick={handleSubmit}>
                Send
            </Button>
        </Form>        
    );
}