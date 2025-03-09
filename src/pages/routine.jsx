import "./routine.css";
export default () => {
    const pdfUrl = "https://res.cloudinary.com/dvoo0su7s/image/upload/v1700775455/proposal_for_Greenland_School_College_eard7i.pdf"
    return (
        <div id="exam-routine" className="container">
            {/* <embed src="https://res.cloudinary.com/dvoo0su7s/image/upload/v1700775455/proposal_for_Greenland_School_College_eard7i.pdf" /> */}
            <iframe src="https://res.cloudinary.com/dvoo0su7s/image/upload/v1700775455/proposal_for_Greenland_School_College_eard7i.pdf" ></iframe>
            <iframe className="googledoc" src={`https://docs.google.com/viewer?url=${pdfUrl}&embedded=true`} ></iframe>
            <a href={pdfUrl} download={pdfUrl} >Download</a>
        </div>
    )
}