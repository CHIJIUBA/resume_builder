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
        if(resumeInputsDetails[e.target.id] in personalDetails) {
            personalDetails[resumeInputsDetails[e.target.id]] = e.target.value;
            setPersonalDetails(personalDetails[resumeInputsDetails[e.target.id]]);
        }
        else if(resumeInputsDetails[e.target.id] in educationDetails) {
            educationDetails[resumeInputsDetails[e.target.id]] = e.target.value;
            setPersonalDetails(educationDetails[resumeInputsDetails[e.target.id]]);
        }

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
                <LabelInput  label={"Degree"} inputId={"degreeInput"} handlerFunction={handlePersonalDetails}/>
                <LabelInput  label={"Start Date"} inputId={"startEdDateInput"} handlerFunction={handlePersonalDetails}/>
                <LabelInput  label={"End Date"} inputId={"endEdDateInput"} handlerFunction={handlePersonalDetails}/>
                <LabelInput  label={"Location"} inputId={"locationInput"} handlerFunction={handlePersonalDetails}/>
                <LabelInput  label={"Relevant CourseWork"} inputId={"courseWorkInput"} handlerFunction={handlePersonalDetails}/>
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
