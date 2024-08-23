import { useState } from 'react';
import {personalDetails, educationDetails} from "./data"
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
    const [education, setEducationDetails] = useState(educationDetails);

    function handlePersonalDetails(e) {
        switch (e.target.id) {

            case "fullNameInput":
                personalDetails.fullName = e.target.value;
                setPersonalDetails(personalDetails.fullName);
                break;
            case "addressInput":
                personalDetails.address = e.target.value;
                setPersonalDetails(personalDetails.address);
                break;
            case "emailInput":
                personalDetails.email = e.target.value;
                setPersonalDetails(personalDetails.email);
                break;
            case "phoneNumber":
                personalDetails.phoneNumber = e.target.value;
                setPersonalDetails(personalDetails.phoneNumber);
                break;
            case "summaryInput":
                personalDetails.profileSummary = e.target.value;
                setPersonalDetails(personalDetails.profileSummary);
                break;
            case "linkedinput":
                personalDetails.linkedInProfile = e.target.value;
                setPersonalDetails(personalDetails.linkedInProfile);
                break;
        }
    }

    function handleEducationDetails(e){
        switch (e.target.id) {

            case "schoolInput":
                educationDetails.school = e.target.value;
                setPersonalDetails(educationDetails.school);
                break;
            case "addressInput":
                personalDetails.address = e.target.value;
                setPersonalDetails(personalDetails.address);
                break;
            case "emailInput":
                personalDetails.email = e.target.value;
                setPersonalDetails(personalDetails.email);
                break;
            case "phoneNumber":
                personalDetails.phoneNumber = e.target.value;
                setPersonalDetails(personalDetails.phoneNumber);
                break;
            case "summaryInput":
                personalDetails.profileSummary = e.target.value;
                setPersonalDetails(personalDetails.profileSummary);
                break;
            case "linkedinput":
                personalDetails.linkedInProfile = e.target.value;
                setPersonalDetails(personalDetails.linkedInProfile);
                break;
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
                <LabelInput  label={"School"} inputId={"schoolInput"}  handlerFunction={handleEducationDetails}/>
                <LabelInput  label={"Degree"} inputId={"degreeInput"} handlerFunction={handleEducationDetails}/>
                <LabelInput  label={"Start Date"} inputId={"startEdDateInput"} handlerFunction={handleEducationDetails}/>
                <LabelInput  label={"End Date"} inputId={"endEdDateInput"} handlerFunction={handleEducationDetails}/>
                <LabelInput  label={"Location"} inputId={"locationInput"} handlerFunction={handleEducationDetails}/>
                <LabelInput  label={"Relevant CourseWork"} inputId={"courseWorkInput"} handlerFunction={handleEducationDetails}/>
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
