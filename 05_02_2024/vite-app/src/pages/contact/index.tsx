import Heading from "../../components/heading"
import React, { useState } from "react"
import Error from "../../components/errormessage";
import { createRoot } from "react-dom/client";
import styled from "styled-components";

function Contact(){
    const FormSentMessage = ()=>{
        return React.createElement('h2',{}, 'Your message has been sent.')
    }

    function formValidation(){
        const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/i
        if(emailAddress.length == 0)
        {
            setEmailError("E-mail address cannot be null. ")
        }
        else{
            setEmailError('')
        }

        if(!emailRegex.test(emailAddress))
        {
            setEmailError(`The given e-mail address is wrong.`)
        }

        if(!agreement)
        {
            setAgreementError("You need to agree to process the data.")
        }
        else{
            setAgreementError('')
        }

        if(message.length < 20)
        {
            setMessageError("The message has to be at least 20 characters long.")
        }
        else{
            setMessageError('')
        }

        if(emailAddress.length > 0 && emailRegex.test(emailAddress) && agreement && message.length >= 20){
            const form = document.getElementById('form')
            const root = createRoot(form!)
            root.render(<FormSentMessage/>)
        }
    }   

    const [emailAddress, setEmailAddress] = useState('')
    const [emailError, setEmailError] = useState('')

    const [agreement, setAgreement] = useState(false)
    const [agreementError, setAgreementError] = useState('')

    const [message, setMessage] = useState('')
    const [messageError, setMessageError] = useState('')

    const Form = styled.div`
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        padding-left: 5%;
    
        * {
        margin-bottom: 1%;
        }
    
        input,
        textarea,
        select {
        padding: 1%;
        border-radius: 10px;
        border: 1px solid rgba(0, 0, 0, 0.3);
    
        &:focus {
            outline: none;
        }
    }
    `

    const Button = styled.button`
        color: white;
        margin: 0;
        padding: 2vh;
        background-color: dodgerblue;
        border-radius: 10px;
        border: 1px solid dodgerblue;
        white-space: nowrap;
        transition: color 0.25s ease-in-out, background-color 0.25s ease-in-out;

        &:hover {
            background-color: white;
            color: dodgerblue;
            cursor: pointer;
        }

        &:focus {
            outline: none;
            background-color: white;
            color: dodgerblue;
        }
    `

    return (
        <div>
            <Heading
                title="Contact"
            />
            <Form>
                <label htmlFor="Email">E-mail address:</label>
                <input type="email" name="Email" id="Email" placeholder="E-mail..." value={emailAddress} onChange={event=>{setEmailAddress(event.target.value)}}/>
                <Error message={emailError}></Error>
                <label htmlFor="Topic">Topic:</label>
                <select name="Topic" id="Topic">
                    <option value="business">Business inquiries</option>
                    <option value="payments">Payments</option>
                    <option value="jobapplications">Job applications</option>
                    <option value="helpdesk">Help Desk</option>
                    <option value="other">Other</option>
                </select>
                <label><input type="checkbox" name="Agreement" checked={agreement} onChange={event=>{setAgreement(event.target.checked)}}/> I agree to process my personal data.</label>
                <Error message={agreementError}></Error>
                <label htmlFor="Message">Message:</label>
                <textarea name="Message" id="Message" cols={30} rows={10} value={message} onChange={event=>{setMessage(event.target.value)}}></textarea>
                <Error message={messageError}></Error>
                <Button onClick={formValidation}>Send</Button>
            </Form>
        </div>
    )
}

export default Contact