import { useState } from 'react';
import {personalDetails} from "./data"
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

        if(e.target.id == "fullNameInput"){
            personalDetails.fullName = e.target.value;
            setPersonalDetails(personalDetails.fullName);
        }
        else if(e.target.id == "addressInput"){
            personalDetails.address = e.target.value;
            setPersonalDetails(personalDetails.address);
        }
        else if(e.target.id == "emailInput"){
            personalDetails.email = e.target.value;
            setPersonalDetails(personalDetails.email);
        }
    }
        

    return(
        <>
        <section className={"side-nav"}>
            <div className={"personaldetails"}>
                <h3>Personal Details</h3>
                <LabelInput  label={"Full Name"} inputId={"fullNameInput"}  handlerFunction={handlePersonalDetails}/>
                <LabelInput  label={"Email"} inputId={"emailInput"} handlerFunction={handlePersonalDetails} />
                <LabelInput  label={"Phone Number"} inputId={"phoneNumber"} />
                <LabelInput  label={"Address"} inputId={"addressInput"} handlerFunction={handlePersonalDetails} />
                <LabelInput  label={"Summary"} inputId={"summaryInput"} />
                <LabelInput  label={"LinkedIn Profile"} inputId={"linkedinput"} />
            </div>

            <div className={"personaldetails"}>
                <h3>Education</h3>
                <LabelInput  label={"School"} inputId={"schoolInput"} />
                <LabelInput  label={"Degree"} inputId={"degreeInput"} />
                <LabelInput  label={"Start Date"} inputId={"startEdDateInput"} />
                <LabelInput  label={"End Date"} inputId={"endEdDateInput"} />
                <LabelInput  label={"Location"} inputId={"locationInput"} />
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
        <ResumeBody details={personalDetails} />
        </>
    )
}
