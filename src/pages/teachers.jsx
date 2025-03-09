import TeacherCard from "../components/teacherCard"
import "./teachers.css";


export default () => {
    const teachers = [
        {
            name: "shahid",
            title: "Bsc In EEE at IIUC",
            subject: "Physices",
            img: "https://e0.pxfuel.com/wallpapers/630/340/desktop-wallpaper-andrew-garfield-andrew-hollywood-star.jpg",
            fb: "https://www.facebook.com/profile.php?id=100095196410753",
            in: "https://www.instagram.com",
            tw: "https://www.twitter.com",
            mobile: "01779481759",
            gmail: "mdshahid7384@gmail.com"
        },
        {
            name: "shahid",
            title: "Bsc In EEE at IIUC",
            subject: "Physices",
            img: "https://e0.pxfuel.com/wallpapers/630/340/desktop-wallpaper-andrew-garfield-andrew-hollywood-star.jpg",
            fb: "https://www.facebook.com/profile.php?id=100095196410753",
            in: "https://www.instagram.com",
            tw: "https://www.twitter.com",
            mobile: "01779481759",
            gmail: "mdshahid7384@gmail.com"
        },
        {
            name: "shahid",
            title: "Bsc In EEE at IIUC",
            subject: "Physices",
            img: "https://e0.pxfuel.com/wallpapers/630/340/desktop-wallpaper-andrew-garfield-andrew-hollywood-star.jpg",
            fb: "https://www.facebook.com/profile.php?id=100095196410753",
            in: "https://www.instagram.com",
            tw: "https://www.twitter.com",
            mobile: "01779481759",
            gmail: "mdshahid7384@gmail.com"
        },
        {
            name: "shahid",
            title: "Bsc In EEE at IIUC",
            subject: "Physices",
            img: "https://e0.pxfuel.com/wallpapers/630/340/desktop-wallpaper-andrew-garfield-andrew-hollywood-star.jpg",
            fb: "https://www.facebook.com/profile.php?id=100095196410753",
            in: "https://www.instagram.com",
            tw: "https://www.twitter.com",
            mobile: "01779481759",
            gmail: "mdshahid7384@gmail.com"
        },
    ]
    return (
        <div id="teachers">
            <div className="teachersContainer container">
                {
                    teachers.map((e, i) => <TeacherCard data={e} key={i}/>)
                }

            </div>
        </div>
    )
}