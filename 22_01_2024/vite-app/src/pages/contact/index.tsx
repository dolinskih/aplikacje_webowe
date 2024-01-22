import Heading from "../../components/heading"
import React, { useState } from "react"
import Error from "../../components/errormessage";
import { createRoot } from "react-dom/client";

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

    return (
        <div>
            <Heading
                title="Contact"
            />
            <div id="form">
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
                <button onClick={formValidation}>Send</button>
            </div>
        </div>
    )
}

export default Contact