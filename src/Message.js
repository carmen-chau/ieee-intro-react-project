import React, {useState} from "react";
import axios from "axios"
import {Link} from "react-router-dom";

const baseURL = "https://dry-shelf-88643.herokuapp.com/https://cloudsking.com/react_api.php"

export default function Message() {
    //Initializing variables in state
    const [formValue, setFormValue] = useState({
        name: "",
        phone_number: "",
        message: "",
        formSubmissionMessage: ""
    });

    //Function to handle changes to variables in state
    function handleChange(event) {
        const name = event.target.name
        const value = event.target.value
        setFormValue((priorState) => {
            return {
                ...priorState,
                [name]: value,
            };
        });
    };

    //Function to handle form submission
    function handleSubmit(event) {
        event.preventDefault()
        //Passing in form data (using FormData() object from JS)
        const formData = new FormData()
        formData.append("name", formValue.name)
        formData.append("phone_number", formValue.phone_number)
        formData.append("message", formValue.message)

        axios.post(baseURL, formData).then((res) => {
            //console.log(formData.get("message")) //Displaying (via the console) the message that the user inputs
            //console.log(JSON.stringify(res.data))
            let formMessage = "Form submission Message: " + JSON.stringify(res.data)
            setFormValue({...formValue, formSubmissionMessage: formMessage})
        })
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    <p>Name: </p>
                    <input type="text" name="name" placeholder="Tell me your name" onChange={handleChange} value={formValue.name}/>
                </label>
                <label>
                    <p>Phone Number: </p>
                    <input type="text" name="phone_number" placeholder="Tell me your phone number" onChange={handleChange} value={formValue.phone_number}/>
                </label>
                <label>
                    <p>Message:</p>
                    <input type="text" name="message" placeholder="Tell me your message" onChange={handleChange} value={formValue.message}/>
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
            <div>
                <p>{formValue.formSubmissionMessage}</p>
            </div>
            <Link to="/"><h3>back</h3></Link>
        </div>
    );
}


