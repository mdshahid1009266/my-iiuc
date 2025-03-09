import "./studentinfo.css";


export default () => {
    return (
        <div id="studentInfo">
            <div className="studentinfoContainer container">
                <h1>Student Info</h1>
                <div className="infoItem">
                    <h3>Total Student : </h3>
                    <p>1500</p>
                </div>
                <div className="infoItem">
                    <h3>Male : </h3>
                    <p>892</p>
                </div>
                <div className="infoItem">
                    <h3>Female</h3>
                    <p>608</p>
                </div>
                <div className="infoItem">
                    <h3>Science :</h3>
                    <p>68</p>
                </div>
                <div className="infoItem">
                    <h3>Commerce :</h3>
                    <p>355</p>
                </div>
                <div className="infoItem">
                    <h3>Arts :</h3>
                    <p>285</p>
                </div>
            </div>
        </div>
    )
}