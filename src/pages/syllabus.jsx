import { useEffect, useState } from "react";
import axios from "axios";
import "./syllabus.css";
export default () => {
    const [syllabus, setsyllabus] = useState(null);
    useEffect(() => {
        axios.get("https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf")
            .then((res) => setsyllabus(res.data));
    }, [])
    const pdfUrl = "https://res.cloudinary.com/dvoo0su7s/image/upload/v1700775455/proposal_for_Greenland_School_College_eard7i.pdf"
console.log(syllabus);
    return (
        <div id="syllabus" className="container">
             <iframe src="https://res.cloudinary.com/dvoo0su7s/image/upload/v1700775455/proposal_for_Greenland_School_College_eard7i.pdf" ></iframe>
            <iframe className="googledoc" src={`https://docs.google.com/viewer?url=${pdfUrl}&embedded=true`} ></iframe>
            <a href={pdfUrl} download={pdfUrl} >Download</a>
        </div>
    )
}