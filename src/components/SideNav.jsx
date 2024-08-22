function LabelInput({label, inputId}) {
    return (
        <>
            <label htmlFor={inputId}>{label}</label>
            <input type="text"  id={inputId}/>
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
    return(
        <section className={"side-nav"}>
            <div className={"personaldetails"}>
                <h3>Personal Details</h3>
                <LabelInput  label={"First Name"} inputId={"firstNameInput"} />
                <LabelInput  label={"Email"} inputId={"emailInput"} />
                <LabelInput  label={"Phone Number"} inputId={"phoneNumber"} />
                <LabelInput  label={"Address"} inputId={"addressInput"} />
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
