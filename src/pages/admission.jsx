import { useState } from "react";
import "./admission.css";
import FormInput from "../components/formetinput";

const App = () => {
    const [values, setValues] = useState({
        religion: "Islam",
        gender: "Male",
        class: "6",
        group:""
    });

    const inputs = [
        {
            id: 1,
            name: "name",
            type: "text",
            placeholder: "Enter Your Name",
            errorMessage:
                "name should be 3-8 characters and shouldn't include any number and special character!",
            label: "Name",
            pattern: "^[A-Za-z]{3,8}$",
            required: true,
        },
        {
            id: 2,
            name: "full name",
            type: "text",
            placeholder: "Enter Your Full Name",
            errorMessage:
                "full name should be 6-20 characters and shouldn't include any number and special character!",
            label: "Full Name",
            pattern: "^[A-Za-z0-9 ]{6,20}$",
            required: true,
        },
        {
            id: 3,
            name: "adress",
            type: "text",
            placeholder: "Enter Your Current Adress",
            errorMessage:
                "Adress should be 6-50 characters and shouldn't include any number and special character!",
            label: "Current Adress",
            pattern: "^[A-Za-z0-9 ]{6,50}$",
            required: true,
        },
        {
            id: 4,
            name: "fathername",
            type: "text",
            placeholder: "Enter Your Father Name",
            errorMessage:
                "Father Name should be 3-16 characters and shouldn't include any number and special character!",
            label: "Father's Name",
            pattern: "^[A-Za-z ]{3,16}$",
            required: true,
        },
        {
            id: 5,
            name: "fatheradress",
            type: "text",
            placeholder: "Enter Your Father Adress",
            errorMessage:
                "Father Adress should be 3-50 characters and shouldn't include any number and special character!",
            label: "Father's Adress",
            pattern: "^[A-Za-z0-9 ]{3,50}$",
            required: true,
        },
        {
            id: 6,
            name: "fatheroccupation",
            type: "text",
            placeholder: "Enter Your Father's Occupation",
            errorMessage:
                "Father's Occupation should be 3-50 characters and shouldn't include any number and special character!",
            label: "Father's Occupation",
            pattern: "^[A-Za-z ]{3,50}$",
            required: true,
        },
        {
            id: 7,
            name: "fathermobile",
            type: "text",
            placeholder: "Enter Your Father's Mobile Number",
            errorMessage: "It should be a valid Mobile Number!",
            label: "Father's Mobile",
            pattern: "^[0-9]{11,13}$",
            required: true,
        },
        {
            id: 8,
            name: "mothername",
            type: "text",
            placeholder: "Enter Your Mother Name",
            errorMessage: "Mother Name should be 3-16 characters and shouldn't include any number and special character!",
            label: "Mother's Name",
            pattern: "^[A-Za-z ]{3,16}$",
            required: true,
        },
        {
            id: 9,
            name: "motheroccupation",
            type: "text",
            placeholder: "Enter Your Mother Occupation",
            errorMessage:
                "Mother Occupation should be 3-16 characters and shouldn't include any number and special character!",
            label: "Mother's Occupation",
            pattern: "^[A-Za-z ]{3,16}$",
            required: true,
        },
        {
            id: 10,
            name: "mobile",
            type: "text",
            placeholder: "Enter Your Number",
            errorMessage: "It should be a valid Mobile Number!",
            label: "Number",
            pattern: "^[0-9]{11,13}$",
            required: true,
        },
        {
            id: 11,
            name: "previousscoolname",
            type: "text",
            placeholder: "Enter Previous School Name",
            errorMessage: "previous school name should be 6-30 characters and shouldn't include any number and special character!",
            label: "Previous School Name",
            pattern: "^[A-Za-z ]{6,30}$",
            required: true,
        },
        {
            id: 12,
            name: "division",
            type: "text",
            placeholder: "Enter Division Name",
            errorMessage: "Division Name should be 3-20 characters and shouldn't include any number and special character!",
            label: "Division / Bibhag Name",
            pattern: "^[A-Za-z ]{3,20}$",
            required: true,
        },
        {
            id: 13,
            name: "district",
            type: "text",
            placeholder: "Enter District Name",
            errorMessage: "District Name should be 3-20 characters and shouldn't include any number and special character!",
            label: "District / Jela Name",
            pattern: "^[A-Za-z ]{3,20}$",
            required: true,
        },
        {
            id: 14,
            name: "upazila",
            type: "text",
            placeholder: "Enter Upazila Name",
            errorMessage: "Upazila Name should be 3-20 characters and shouldn't include any number and special character!",
            label: "Upazila Name",
            pattern: "^[A-Za-z ]{3,20}$",
            required: true,
        },
        {
            id: 15,
            name: "union",
            type: "text",
            placeholder: "Enter Union Name",
            errorMessage: "Union Name should be 3-20 characters and shouldn't include any number and special character!",
            label: "Union Name",
            pattern: "^[A-Za-z ]{3,20}$",
            required: true,
        },
        {
            id: 16,
            name: "village",
            type: "text",
            placeholder: "Enter Village Name",
            errorMessage: "Village Name should be 3-20 characters and shouldn't include any number and special character!",
            label: "Village Name",
            pattern: "^[A-Za-z ]{3,20}$",
            required: true,
        }
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(Object.keys(values).length);
        console.log(values);
    };

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    return (
        <div id="application">
            <div className="applecationContainer">
                <form onSubmit={handleSubmit}>
                    <h1>Apply Online</h1>
                    <div className="inputItems">
                        {inputs.map((input) => (
                            <FormInput
                                key={input.id}
                                {...input}
                                value={values[input.name]}
                                onChange={onChange}
                            />
                        ))}
                    </div>
                    <div className="selectItems">
                        <div className="form-item">
                            <label htmlFor="occupation" className="form-label">Class to be enrolled</label>
                            <select className="form-select" name="class" onChange={onChange}>
                                <option value="6">Six</option>
                                <option value="7">Seven</option>
                                <option value="8">Eight</option>
                                <option value="9">Nine</option>
                                <option value="10">Ten</option>
                                <option value="11">Xi</option>
                                <option value="12">Xii</option>
                            </select>
                        </div>
                        {
                            Number(values.class) > 8 &&
                            <div className="form-item">
                                <label htmlFor="occupation" className="form-label">Group</label>
                                <select className="form-select" name="group" value={values.group} onChange={onChange}>
                                    <option value="Science">Science</option>
                                    <option value="Commerce">Commerce</option>
                                    <option value="Arts">Arts</option>
                                </select>
                            </div>
                        }

                        <div className="form-item">
                            <label htmlFor="occupation" className="form-label">Date Of Birth</label>
                            <input type="date" name="dab" onChange={onChange} />
                        </div>

                        <div className="form-item">
                            <label htmlFor="occupation" className="form-label">Gender</label>
                            <select className="form-select" name="gender" onChange={onChange}>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>

                        <div className="form-item">
                            <label htmlFor="occupation" className="form-label">Religion</label>
                            <select className="form-select" name="religion" onChange={onChange}>
                                <option value="Islam">Islam</option>
                                <option value="Hindu">Hindu</option>
                                <option value="Buddhism">Buddhism</option>
                                <option value="Christianity">Christianity</option>
                            </select>
                        </div>
                    </div>
                    <button>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default App;