import React, { useState } from 'react';
import axios from 'axios';
import "./temp.css"

const PDFViewer = ({ pdfUrl }) => {
    return (
        <div>
            <iframe
                title="PDF Viewer"
                src={`https://docs.google.com/viewer?url=${encodeURIComponent(pdfUrl)}&embedded=true`}
                width="100%"
                height="500px"
                frameBorder="0"
            />
        </div>
    );
};

const CloudinaryUpload = () => {
    const [file, setFile] = useState(null);
    const [imageUrl, setImageUrl] = useState('');

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleUpload = async () => {
        console.log(file);
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'brainTrust');
        formData.append("cloud_name", "dvoo0su7s");
        formData.append("api_key", "317364175576398");
        formData.append("api_secret", "C8lY5PQyDMHUNzdfxDvpSelOqeg");
        // formData.append('public_id', 'my_pdf'); //set file name
        try {
            const response = await axios.post(`https://api.cloudinary.com/v1_1/dvoo0su7s/upload`, formData);
            console.log(response.data.secure_url);
            // Set the URL of the uploaded image in the state
            setImageUrl(response.data.secure_url);
        } catch (error) {
            console.error('Error uploading file:', error);
        }
    };
    // console.log(imageUrl);
    return (
        <div>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload</button>
            {imageUrl && (
                <div>
                    {/* <iframe src={imageUrl} width="100vw" height="500px" frameBorder="0"></iframe> */}
                    <embed src={imageUrl} />
                    {/* <PDFViewer pdfUrl={imageUrl} /> */}
                </div>
            )}
        </div>
    );
};

export default CloudinaryUpload;
