import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function SignUpForm() {

    const [formData, setFormData] = React.useState(
        {
            fullName: "",
            address: "",
            birthday: "",
            email: "",
            phone: ""
        }
    );

    // const [focused, setFocused] = React.useState(false);

    function handleChange(event) {
        const {name, value} = event.target;
        setFormData(prevData => {
            return {
                ...prevData,
                [name]: value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault();

        
        console.log(formData);
    }

    // const handleFocus = (e) => {
    //     setFocused(true)
    // }


    return (
        <Form>
            <Form.Group className="signup-form--group">
                <Form.Label className="signup-form--label">Full Name</Form.Label>
                <Form.Control
                    className="signup-form--input"
                    type="text" 
                    placeholder="Enter Full Name" 
                    onChange={handleChange}
                    value={formData.name}
                    name="fullName"
                    pattern="^[A-Za-z]+$"
                    required={true}
                />
                <span className="error-message">Name cannot include any numbers or symbols</span>
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
                <span className="error-message">Street address example: 234 Main St</span>
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
                />
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
                pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
                required={true}
                />
                <span className="error-message">Please provide a valid email addres</span>
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
                <span className="error-message">Phone number format must follow XXX-XXX-XXXX</span>
            </Form.Group>

            <Button variant="warning" className="sign-up-submit-button" onClick={handleSubmit}>
                Submit
            </Button>
        </Form>
    );
}