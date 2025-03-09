import { useEffect, useState } from "react";
import "./studentDasbord.css"



export default () => {
    // const { isUser } = setContext();
    const user = {
        _id: "650e01aa602e4f34fbc00bfc",
        name: "mohammsd sabbir",
        fatherName: "sahab uddin",
        motherName: "sufia begum",
        id: "C213125",
        class: "6",
        contact: "01877573585",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnZP9KC83L_mTB8Lb3eHiCmvNSbLd_3_8Cyw&usqp=CAU",
        payments: [{
            date: "20-04-2023",
            amount: "2000",
            method:"Cash",
            _id: "650e01aa602e4f34fbc00bfd"
        }, {
            date: "13-05-2023",
            amount: "1800",
            method:"Beksh",
            _id: "650e01aa602e4f34fbc00bfe"
        }],
        results: [{
            date: "22-04-2023",
            Subjects: ["BGS", "Religion", "Physices"],
            Numbers: [64, 77, 89],
            _id: "650e01aa602e4f34fbc00c00"
        }, {
            date: "22-04-2023",
            Subjects: ["Heigher Math", "Physices", "Chemistry"],
            Numbers: [55, 82, 75],
            _id: "650e01aa602e4f34fbc00c01"
        }, {
            date: "22-04-2023",
            Subjects: ["BGS", "Religion", "Physices"],
            Numbers: [64, 77, 32],
            _id: "650e01aa602e4f34fbc00c02"
        }, {
            date: "বৃহস্পতিবার, ৫ অক্টোবর, ২০২৩",
            Subjects: ["বাংলা", "ইংরেজি", "গণিত"],
            Numbers: [56, 72, 85],
            _id: "651e4d0eeb4b0e143a55488c"
        }, {
            date: "৫ অক্টোবর, ২০২৩",
            Subjects: ["বিজ্ঞান", "ধর্ম", "সামাজিক বিজ্ঞান"],
            Numbers: [92, 88, 85],
            _id: "651e541feb76329510546ac6"
        }],
        createdAt: "2023-09-22T21:05:46.324Z",
        updatedAt: "2023-10-06T05:07:32.521Z",
        __v: 0,
        group: "",
        s_c: "south sandwip heigh school"
    }
    const [data, setData] = useState(user);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const getdata = async () => {
            try {
                // const res = await axios.get("http://localhost:2000/getSingelData", { withCredentials: true })
                // setData(res?.data);
            } catch (error) {
                alert("status faield");
            }
        }
        getdata();
    }, [])
    // const downlodeAdmit = () => {
    //     const getdata = () => {
    //         try {
    //             axios.get('http://localhost:2000/getAdmitCard', { responseType: 'blob' })
    //                 .then((res) => {
    //                     const pdfBlob = new Blob([res.data], { type: 'application/pdf' });
    //                     saveAs(pdfBlob, 'newPdf.pdf');
    //                 })
    //         } catch (error) {
    //             alert("pdf generated faild");
    //         }
    //     }
    //     getdata();
    // }
    // const data = isUser.user;

    const Table = () => {
        data && setLoading(false)
        return (
            <div id="dashbord">
                <div className="dashbordContainer">
                    {
                        loading && <div className="spinner">
                            <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                        </div>
                    }
                    <div className="studentHeader">
                        <div className="profile">
                            <img src={user.img} alt="" />
                        </div>
                        <div className="data">
                            <ul>
                                <li><span className="title">Name<b>:</b></span>{data.name}</li>
                                <li><span className="title">Id<b>:</b></span>{data.id}</li>
                                <li><span className="title">Class<b>:</b></span>{data.class}</li>
                                <li><span className="title">Phone No<b>:</b></span>{data.contact}</li>
                                <li><span className="title">Admited<b>:</b></span>{new Date(data.createdAt).toDateString()}</li>
                            </ul>
                        </div>
                    </div>
                    <div className="studentBody">
                        {/* <div className="studentActions">
                            <button className="actionButton" onClick={downlodeAdmit}>Downlode AdmitCard</button>
                            <button className="actionButton" onClick={downlodeAdmit}>Downlode Markshit</button>
                            <button className="actionButton" onClick={downlodeAdmit}>Downlode AdmitCard</button>
                            <button className="actionButton" onClick={downlodeAdmit}>Downlode AdmitCard</button>
                        </div> */}

                        <h1 style={{ color: "lightgray", textAlign: "center" }}>payments :-</h1>
                        {
                            data.payments.map(e => {
                                return (
                                    <div className="box-wrap">
                                        <div className="table-wrap">
                                            <table>
                                                <thead>
                                                    <tr>
                                                        <th className="rsub">Month</th>
                                                        <th>Amount</th>
                                                        <th>Method</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>{e.date}</td>
                                                        <td>{e.amount}</td>
                                                        <td>{e.method}</td>
                                                        {/* <td>{Number(e.amount) > 0 && "Paid"}</td> */}
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                )

                            })
                        }

                        <h1 style={{ color: "lightgray", textAlign: "center" }}>Results :-</h1>
                        {
                            data.results.map(e => {
                                const grade = (e) => {
                                    e = Number(e);
                                    if (e >= 80) return "A+";
                                    else if (e >= 70) return "A";
                                    else if (e >= 60) return "A-";
                                    else if (e >= 50) return "B";
                                    else if (e >= 40) return "c";
                                    else return "F"
                                }
                                return (
                                    <div className="box-wrap">
                                        <div className="table-wrap">
                                            <span>Date : {e.date}</span>
                                            <table>
                                                <thead>
                                                    <tr>
                                                        <th className="rsub">Subjects</th>
                                                        <th>Result</th>
                                                        <th>Grade</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        e.Subjects.map((k, j) => {
                                                            return (
                                                                <tr>
                                                                    <td>{k}</td>
                                                                    <td>{e.Numbers[j]}</td>
                                                                    <td>{grade(e.Numbers[j])}</td>
                                                                </tr>
                                                            )
                                                        })
                                                    }
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div>
            {
                data && <Table />
            }
        </div>
    )
}


