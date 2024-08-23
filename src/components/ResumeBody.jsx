function PersonalDetails({details}) {
    
    return (
        <div className={"personalDetilsSection"}>
            <h3 id={"fullName"}>{details.fullName}</h3>
            <p id={"addressDisplay"}>{details.address} | {details.phoneNumber} | {details.email} | {details.linkedInProfile}</p>
            <p id={"summaryDisplay"}>{details.profileSummary}</p>
        </div>
    )
}

function EducationDetails({details}) {

    return (
        <div className={"resumeSections"}>
            <h3>EDUCATION</h3>
            <div className={"innerSections"}>
                <section>
                    <h3 className="institution">{details.school}</h3>
                    <p>{details.degree}</p>
                </section>
                <section>
                    <h3>{details.location}</h3>
                    <p><i>{details.eduStartDate} - {details.eduEndDate}</i></p>
                </section>
            </div>
            <p id="courseWork"><b>Relevant Coursework: </b>{details.courseWork}</p>
        </div>

    )
}



export function ResumeBody({details, education}) {

    const personalDetails = details;

    return (
        <section className="resumebody">

            <PersonalDetails details={personalDetails} />
            <EducationDetails details={education} />

            <div className={"resumeSections"}>
                <h3>PROFESSIONAL EXPERIENCE</h3>
                <div className={"innerSections"}>
                    <section>
                        <h3 className="institution">Strabic Construction Company</h3>
                        <p>Information Technology Officer</p>
                    </section>
                    <section>
                        <h3>Nsukka, Enugu</h3>
                        <p><i>Nov 2017 - Nov 2022</i></p>
                    </section>
                </div>
                <ul className={"listOfDuties"}>
                    <li>Oversaw the installation, configuration, and maintenance of hardware and software.</li>
                    <li>Managed servers, networks, and other IT infrastructure to ensure smooth and secure operation.</li>
                    <li>Provided technical support to employees, troubleshooting hardware and software issues, and resolving
                    IT-related problems.</li>
                </ul>

                <div className={"innerSections"}>
                    <section>
                        <h3 className="institution">Strabic Construction Company</h3>
                        <p>Information Technology Officer</p>
                    </section>
                    <section>
                        <h3>Nsukka, Enugu</h3>
                        <p><i>Nov 2017 - Nov 2022</i></p>
                    </section>
                </div>
                <ul className={"listOfDuties"}>
                    <li>Oversaw the installation, configuration, and maintenance of hardware and software.</li>
                    <li>Managed servers, networks, and other IT infrastructure to ensure smooth and secure operation.</li>
                    <li>Provided technical support to employees, troubleshooting hardware and software issues, and resolving
                    IT-related problems.</li>
                </ul>
            </div>

            <div className={"resumeSections"}>
                <h3>ADDITIONAL SKILLS</h3>
                <ul className={"listOfDuties"}>
                    <li>Microsoft Excel, Microsoft Word, Visual Studio Code and Postman</li>
                    <li>Python, Java, C, HTML, CSS, JavaScript, Linux, API Development Fastapi</li>
                    <li>Communication, Problem-solving, Teamwork, Adaptability</li>
                </ul>
            </div>

            <div className={"resumeSections"}>
                <h3>PROJECTS</h3>
                <div className={"innerSections"}>
                    <section>
                        <h3 className="institution">ONLINE PAYMENT APPLICATION</h3>
                        <p><i>https://github.com/CHIJIUBA/Payment-Application-VioPay</i></p>
                    </section>
                </div>
                <p><b>Description:</b> Online payment application that enables users to make secure and seamless online transactions.</p>
                <ul className={"listOfDuties"}>
                    <li>Developed dynamic components for the app and created a new landing page that streamlined customer
                    experience</li>
                    <li>Learned to connect and use MySQL in PHP and integrate Flutterwave APIs for seamless payment processing</li>
                </ul>
            </div>
            
        </section>
    )
}