import { useState } from 'react';
import {personalDetails, educationDetails, resumeInputsDetails} from "./data"
import { ResumeBody } from './ResumeBody';

function LabelInput({label, inputId, handlerFunction}) {
    return (
        <>
            <label htmlFor={inputId}>{label}</label>
            <input type="text"  id={inputId} onChange={handlerFunction}/>
        </>
    )
}

function LabelTextArea({label, inputId}) {
    return (
        <>
        <label htmlFor={inputId}>{label}</label>
        <textarea id={inputId}></textarea>
        </>
    )
}


export function SideNav() {

    const [fullName, setPersonalDetails] = useState(personalDetails);

    function handlePersonalDetails(e) {

        /**
         * this function changes the corresponding resume field in accordance
         * to the input field controlling it
         */
        personalDetails[resumeInputsDetails[e.target.id]] = e.target.value;
        setPersonalDetails(personalDetails[resumeInputsDetails[e.target.id]]);

    }

    
        

    return(
        <>
        <section className={"side-nav"}>
            <div className={"personaldetails"}>
                <h3>Personal Details</h3>
                <LabelInput  label={"Full Name"} inputId={"fullNameInput"}  handlerFunction={handlePersonalDetails} />
                <LabelInput  label={"Email"} inputId={"emailInput"} handlerFunction={handlePersonalDetails} />
                <LabelInput  label={"Phone Number"} inputId={"phoneNumber"} handlerFunction={handlePersonalDetails} />
                <LabelInput  label={"Address"} inputId={"addressInput"} handlerFunction={handlePersonalDetails} />
                <LabelInput  label={"Summary"} inputId={"summaryInput"} handlerFunction={handlePersonalDetails} />
                <LabelInput  label={"LinkedIn Profile"} inputId={"linkedinput"} handlerFunction={handlePersonalDetails} />
            </div>

            <div className={"personaldetails"}>
                <h3>Education</h3>
                <LabelInput  label={"School"} inputId={"schoolInput"}  handlerFunction={handlePersonalDetails}/>
                <LabelInput  label={"Degree"} inputId={"degreeInput"} />
                <LabelInput  label={"Start Date"} inputId={"startEdDateInput"} />
                <LabelInput  label={"End Date"} inputId={"endEdDateInput"} />
                <LabelInput  label={"Location"} inputId={"locationInput"} />
                <LabelInput  label={"Relevant CourseWork"} inputId={"courseWorkInput"} />
            </div>

            <div className={"personaldetails"}>
                <h3>Experience</h3>
                <LabelInput  label={"Company"} inputId={"company"} />
                <LabelInput  label={"Position Title"} inputId={"positionTitleInput"} />
                <LabelInput  label={"Start Date"} inputId={"startDateInput"} />
                <LabelInput  label={"End Date"} inputId={"endExDateInput"} />
                <LabelInput  label={"Location"} inputId={"LocationInput"} />
                <LabelTextArea label={"Description"} inputId={"expDescription"} />
            </div>
        </section>
        <ResumeBody details={personalDetails} education={educationDetails}/>
        </>
    )
}
