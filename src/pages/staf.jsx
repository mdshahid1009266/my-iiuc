import "./staf.css";

export default () => {
    const stafs = [
        {
            name: "shahid",
            disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore minima illo asperiores beatae natus eaque, quos tempora ?",
            img: "https://img.freepik.com/free-photo/close-up-portrait-curly-handsome-european-male_176532-8133.jpg?size=626&ext=jpg&uid=R128411798&ga=GA1.1.508982251.1701074262&semt=ais",
            mobile: "01779481759",
        },
        {
            name: "sabbir",
            disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore minima illo asperiores beatae natus eaque, quos tempora ?",
            img: "https://img.freepik.com/free-photo/close-up-portrait-curly-handsome-european-male_176532-8133.jpg?size=626&ext=jpg&uid=R128411798&ga=GA1.1.508982251.1701074262&semt=ais",
            mobile: "01779481759",
        },
        {
            name: "korim",
            disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore minima illo asperiores beatae natus eaque, quos tempora ?",
            img: "https://img.freepik.com/free-photo/close-up-portrait-curly-handsome-european-male_176532-8133.jpg?size=626&ext=jpg&uid=R128411798&ga=GA1.1.508982251.1701074262&semt=ais",
            mobile: "01779481759",
        }
    ]
    return (
        <div id="staf">
            <div className="stafContainer container">
                {
                    stafs.map((e, i) => {
                        return (
                            <div class="profile-card">
                                <div class="image">
                                    <img src={e.img} alt="profile picture" />
                                </div>
                                <div class="text-data">
                                    <span class="name">{e.name}</span>
                                    <span class="bio">{e.disc}</span>
                                </div>
                                <div class="media-buttons">
                                    <a href="#" style={{ backgroundColor: "#4267b2" }}>
                                        <i class="fa-solid fa-phone"></i>
                                    </a>
                                    <a href="#" style={{ backgroundColor: "#1da1f2" }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                                    </a>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}