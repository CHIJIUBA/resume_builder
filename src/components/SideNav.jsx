import { useState } from 'react';

function LabelInput({label, inputId, value, setName}) {
    return (
        <>
            <label htmlFor={inputId}>{label}</label>
            <input type="text"  id={inputId} value={value}/>
        </>
    )
}

// onChange={e => setFullName(e.target.value)}

function LabelTextArea({label, inputId}) {
    return (
        <>
        <label htmlFor={inputId}>{label}</label>
        <textarea id={inputId}></textarea>
        </>
    )
}





export function SideNav() {

    const [fullName, setFullName] = useState("Chijiuba Micheal");

    function handleChange(e) {
        setFullName(e.target.value)
    }

    return(
        <section className={"side-nav"}>
            <div className={"personaldetails"}>
                <h3>{fullName}</h3>
                <label htmlFor={"fullNameInput"}>Full Name</label>
                <input type="text"  id={"fullNameInput"} value={fullName} onChange={e => setFullName(e.target.value)}/>
                {/* <LabelInput  label={"Full Name"} inputId={"fullNameInput"}  value={fullName} setName={handleChange}/> */}
                <LabelInput  label={"Email"} inputId={"emailInput"} />
                <LabelInput  label={"Phone Number"} inputId={"phoneNumber"} />
                <LabelInput  label={"Address"} inputId={"addressInput"} />
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
    )
}
