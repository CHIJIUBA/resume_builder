import { useState } from 'react';
import {personalDetails, educationDetails, resumeInputsDetails, experienceDetails} from "./data"
import { ResumeBody } from './ResumeBody';

function LabelInput({label, inputId, handlerFunction}) {
    return (
        <>
            <label htmlFor={inputId}>{label}</label>
            <input type="text"  id={inputId} onChange={handlerFunction}/>
        </>
    )
}

function LabelTextArea({label, inputId, handlerFunction}) {
    return (
        <>
            <label htmlFor={inputId}>{label}</label>
            <textarea id={inputId} onInput={handlerFunction}></textarea>
        </>
    )
}


export function SideNav() {
    
    const [fullName, setPersonalDetails] = useState(personalDetails);
    // console.log(experienceDetails["expDescription"][0]);

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
        else if(resumeInputsDetails[e.target.id] in experienceDetails) {
            experienceDetails[resumeInputsDetails[e.target.id]] = e.target.value;
            setPersonalDetails(experienceDetails[resumeInputsDetails[e.target.id]]);
        }

    }

    function getText(){
        let text = document.querySelector("#expDescriptionInput").value;
        console.log(text.split('\n'));
    }

    function handleLists(e){
        experienceDetails[resumeInputsDetails[e.target.id]] = e.target.value.split("\n");
        setPersonalDetails(experienceDetails[resumeInputsDetails[e.target.id]]);
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
                <h3>Profesional Experience</h3>
                <LabelInput  label={"Company"} inputId={"companyInput"} handlerFunction={handlePersonalDetails}/>
                <LabelInput  label={"Position Title"} inputId={"positionTitleInput"} handlerFunction={handlePersonalDetails}/>
                <LabelInput  label={"Start Date"} inputId={"exstartDateInput"} handlerFunction={handlePersonalDetails}/>
                <LabelInput  label={"End Date"} inputId={"exendExDateInput"} handlerFunction={handlePersonalDetails}/>
                <LabelInput  label={"Location"} inputId={"exlocationInput"} handlerFunction={handlePersonalDetails}/>
                <LabelTextArea label={"Duty Descriptions"} inputId={"expDescriptionInput"}  handlerFunction={handleLists}/>
            </div>

            <div className={"personaldetails"}>
                <h3>Additional Skills</h3>
                <LabelTextArea label={"Description"} inputId={"skillDescription"} />
            </div>
        </section>
        <ResumeBody details={personalDetails} education={educationDetails} experience={experienceDetails}/>
        </>
    )
}
