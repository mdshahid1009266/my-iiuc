import "./achievement.css";
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
        <div id='achievement'>
            <h1>Achievements</h1>
            <div className="achievementContainer container">
                {
                    achievements.map((e, i) => <div className={(i + 1 == active) && "active"} key={i} onClick={() => setActive(active ? null : i + 1)}>
                        <img src={e} alt="" />
                    </div>)
                }

            </div>
        </div>
    )
}