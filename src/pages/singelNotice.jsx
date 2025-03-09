import { useParams } from "react-router-dom";
import "./singelNotice.css";
import axios from "axios";


export default () => {
    const fileurl="https://res.cloudinary.com/dvoo0su7s/image/upload/v1700775455/proposal_for_Greenland_School_College_eard7i.pdf";
    const { id } = useParams()
    const notice = axios.get("https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf")
    return (
        <div id="singelnotice">
            <div className="singelnoticeContainer container">
                <iframe src={fileurl} loading="lazy" width="100%" height="500px" frameBorder="0"></iframe>
                <iframe
                    title="PDF Viewer"
                    src={`https://docs.google.com/viewer?url=${encodeURIComponent(fileurl)}&embedded=true`}
                    width="100%"
                    height="500px"
                    frameBorder="0"
                >
                    <p>If you cannot view this PDF, please download it <a href={fileurl} download={fileurl}>here</a>.</p>
                </iframe>
                {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3687.84597987364!2d91.48965327499786!3d22.43482217959017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acb7c8b6f3bf87%3A0x26c803dee8a190c2!2sSouth%20Sandwip%20College!5e0!3m2!1sbn!2sbd!4v1701714631226!5m2!1sbn!2sbd" width="600" height="450" style="border:0;" allowfullscreen="" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
            </div>
        </div>
    )
}