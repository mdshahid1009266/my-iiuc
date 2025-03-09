import "./facilities.css";

import { useState } from "react";
export default ({ link }) => {
    const paths= [{
        title: "Multimedia Classroom",
        path: "multimedia-classroom",
    },
    {
        title: "Computer Lab",
        path: "computer-lab",
    },
    {
        title: "Library",
        path: "library",
    },
    {
        title: "Auditorium",
        path: "auditorium",
    },
    {
        title: "Playground",
        path: "playground",
    },
    {
        title: "Canteen",
        path: "canteen",
    }
    ]
    const newpath = paths.find(e => e.path === link);
    const otherpath = paths.filter(e => e.path != link);
    console.log(otherpath);
    const facilities = [
        "https://res.cloudinary.com/dvoo0su7s/image/upload/v1701627370/achievement_ljz4qh.jpg",
        "https://res.cloudinary.com/dvoo0su7s/image/upload/v1701627370/achievement_ljz4qh.jpg",
        "https://res.cloudinary.com/dvoo0su7s/image/upload/v1701627370/achievement_ljz4qh.jpg",
        "https://res.cloudinary.com/dvoo0su7s/image/upload/v1701627370/achievement_ljz4qh.jpg",
    ]
    const [data, setData] = useState(facilities)
    const [active, setActive] = useState(null)
    return (
        <div id='facilities'>
            <h1>{newpath.title}</h1>
            <div className="facilitiesContainer container">
                {
                    data.map((e, i) => <div className={(i + 1 == active) && "active"} key={i} onClick={() => setActive(active ? null : i + 1)}>
                        <img src={e} alt="" />
                    </div>)
                }
            </div>
        </div>
    )
}