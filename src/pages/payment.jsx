import { useState } from "react";
import "./payment.css";


export default () => {
    const [search, setSearch] = useState({
        class: "6",
        roll: ""
    });
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setSearch(values => ({ ...values, [name]: value }))
    }
    const handelSearch = (event) => {
        console.log(search);
    }
    return (
        <div id="payment">
            <h1>Payment</h1>
            <div className="paymentContainer container">
                <div className="form-item">
                    <label className="form-label">Class</label>
                    <select className="form-select" name="class" value={search.class} onChange={handleChange}>
                        <option value="6">Six</option>
                        <option value="7">Seven</option>
                        <option value="8">Eight</option>
                        <option value="9">Nine</option>
                        <option value="10">Ten</option>
                        <option value="11">Xi</option>
                        <option value="12">Xii</option>
                    </select>
                </div>
                <div className="inputItemss">
                    <label className="form-label">Roll</label>
                    <input type="text" placeholder="Enter Roll Number" name="roll" value={search.roll} inputmode="numeric" maxLength={3} onChange={handleChange}/>
                </div>
                <div className="inputItemss">
                    <button onClick={handelSearch}>Search</button>
                </div>

            </div>
        </div>
    )
}