import { useState } from "react"
import "./contact.css"

export default () => {

    const [data, setData] = useState({
        nam: "",
        subject: "",
        massage: ""
    });
    const handelchenge = (e) => {
        const { name, value } = e.target;
        setData((prevFormData) => ({ ...prevFormData, [name]: value }));
    }
    const handelclick = (e) => {
        e.preventDefault();
        window.location.href = "mailto:mdshahid7384@gmail.com?subject=" + data.subject + "&body=" + data.massage;
    }
    return (
        <>
            <section id="contact">
                <div class="contact">
                    <div class="container">
                        <div class="content">
                            <div class="left-side">
                                <div class="address details">
                                    <i class="fas fa-map-marker-alt"></i>
                                    <div class="topic">Address</div>
                                    <div class="text-one">Road No-01,Block-I</div>
                                    <div class="text-two">Halishahar, Chattogram</div>
                                </div>
                                <div class="phone details">
                                    <a a href="tel:01779481759">
                                        <i class="fas fa-phone-alt"></i>
                                    </a>
                                    <div class="topic">Phone</div>
                                    <div class="text-one">+8801891-614300</div>
                                </div>
                                <div class="email details">
                                    <a href="mailto:mdshahid7384@gmail.com">
                                        <i class="fas fa-envelope"></i>
                                    </a>
                                    <div class="topic">Email</div>
                                    <div class="text-one">mdshahid1009266@gmail.com</div>
                                </div>
                            </div>
                            <div class="right-side">
                                <div class="topic-text">Send Us A Message...</div>
                                <form id="submit-form">
                                    <div class="input-box">
                                        <input onChange={handelchenge} type="text" name="nam" id="entername" placeholder="Enter your name" required={true} />
                                    </div>
                                    <div class="input-box">
                                        <input onChange={handelchenge} type="text" name="subject" id="enteremail" placeholder="Enter your Subject" required={true} />
                                    </div>
                                    <div class="input-box message-box">
                                        <textarea onChange={handelchenge} name="massage" placeholder="Enter your massage" id="entermassage" required={true} rows="10"></textarea>
                                    </div>
                                    <div class="button">
                                        <input onClick={handelclick} type="submit" value="Send Now" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

        </>
    )
}

