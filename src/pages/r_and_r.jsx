import "./r&r.css";


export default () => {
    const collegeRules = [
        "All students should reach the classroom on time and shall not leave the class without the permission of the teacher.",
        "All students should wear proper uniform with shoes.",
        "The behavior of the students, both within and outside the college premises should be decent and befitting to a professional institution.",
        "Students must park their vehicles only in the space allotted. They should not bring four-wheelers to the campus as they arrive for classes.",
        "Students found guilty of ragging will be dismissed from the college as per the Supreme Court ruling.",
        "Students are prohibited to bring or use mobile phones within the campus.",
        "This, being an eco–friendly campus, plastic or other trash should not be thrown inside the college or in the premises.",
        "Students shall communicate only in English language among themselves and with the faculty members. This is a conscious effort to improve the English communication skill of students.",
        "Students shall keep themselves informed of the instructions issued to them from time to time orally or through notices/ circulars and emails.",
        "Students are expected to contribute towards the academic/ social/environmental initiatives that the Institute may undertake.",
        "Peer teaching and knowledge sharing among students should be the priority in accordance with the Albertian culture.",
        "Participation in intercollegiate programmes, within the city or outside, is subject to permission of the Principal.",
        "For outstation programmes including study tour, the students are required to submit a permission letter from their parents.",
        "Students are required to keep safe custody of their valuables. They should maintain decency and decorum during cultural events, be it inside the campus or outside.",
        "Laptops/ Computers are to be used within the campus for academic purposes only.",
        "Any unhealthy relationship between students that might affect their academic performance, breach their personal space or affect the reputation of the institution will be strictly dealt with.",
        "The College campus is a no–smoking/ alcohol-free zone.",
        "Every student should carry his/ her identity card and produce it on demand by the authorities.",
        "Students are prohibited from organizing or attending meetings in the college, distributing notices, collecting money and exhibiting banners, flags, posters etc. without the permission of the Principal.",
        "Political/ organizational activities are banned in the campus, save those official activities which are specifically permitted or sponsored by the college authorities.",
        "All expressions or activities which are immoral, antisocial, communal and anti-national are strictly prohibited in the College campus.",
        "The Principal shall be the final authority in the interpretation of the College rules. Matters not covered by these rules are left to the discretion of the Principal and his decision shall be final."
    ];

    return (
        <div id="r_and_r">
            <div className="container">
                <h1 className="r_and_rHeader">RULES AND REGULATIONS</h1>
                <div className="r_and_ritem">
                    <h1>ATTENDANCE</h1>
                    <p>Students are expected to attend all classes without fail. If, for unavoidable reasons, leave of absence is required, permission from competent authority should be sought.</p>
                </div>
                <div className="r_and_ritem">
                    <h1>UNIFORMS</h1>
                    <p>It is compulsory that all students come to college only in the stipulated college uniform on all days unless specified otherwise.

                        It is mandatory for all students to wear their college ID card while on the college campus.

                        Boys : Slack Shirt – Pants with shirt tucked in and black belt. Black shoes and grey socks.
                        Girls : Slack Shirt- Jacket – Pants. Black shoes with grey socks.

                        There is a special uniform for solemn occasions for both boys and girls.</p>
                </div>
                <div className="r_and_ritem">
                    <h1>Discipline, Conduct and Behaviour</h1>
                    <ul>
                        {
                            collegeRules.map((e, i) => <li key={i}>{i+1 +". "}<p>{e}</p></li>)
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}