import "./multimedia.css";
import { useState } from "react";
export default () => {
    const achievements = [
        "https://res.cloudinary.com/dvoo0su7s/image/upload/v1701627370/achievement_ljz4qh.jpg",
        "https://res.cloudinary.com/dvoo0su7s/image/upload/v1701627370/achievement_ljz4qh.jpg",
        "https://res.cloudinary.com/dvoo0su7s/image/upload/v1701627370/achievement_ljz4qh.jpg",
        "https://res.cloudinary.com/dvoo0su7s/image/upload/v1701627370/achievement_ljz4qh.jpg",
    ]
    const [active, setActive] = useState(null)
    return (
        <div id='multimedia'>
            <h1>Multimedia Classroom</h1>
            <div className="multimediaContainer container">
                {
                    achievements.map((e, i) => <div className={(i + 1 == active) && "active"} key={i} onClick={() => setActive(active ? null : i + 1)}>
                        <img src={e} alt="" />
                    </div>)
                }

            </div>
        </div>
    )
}