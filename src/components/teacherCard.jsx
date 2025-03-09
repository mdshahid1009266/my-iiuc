import "./teacherCard.css";


export default ({ data }) => {
    console.log(data);
    return (
        <section id="teacherCard">
            <div class="card">
                <a href={"mailto:" + data.gmail}>
                    <button class="mail">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                    </button>
                </a>
                <div class="profile-pic profile-pic1">
                    <img src={data.img} alt="pic" />
                </div>
                <div class="bottom">
                    <div class="content">
                        <span class="name">{data.name}</span>
                        <span class="about-me">
                            <p>{data.title}</p>
                            <p> Professor {data.subject}</p>
                        </span>
                    </div>
                    <div class="bottom-bottom">
                        <div class="social-links-container">
                            <a href={data.fb} target="_blank"><i class="fa-brands fa-facebook"></i></a>
                            <a href={data.in} target="_blank"><i class="fa-brands fa-instagram"></i></a>
                            <a href={data.tw} target="_blank"><i class="fa-brands fa-x-twitter"></i></a>
                        </div>
                        <a href={"tel:" + data.mobile}>
                            <button class="button">Contact Me</button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}