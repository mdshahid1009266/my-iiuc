
import "./counter.css"
export default () => {
    return (
        <div id="counter">
            <div className="counterContainer">
                <div className="counterchild">
                    <i className="fa-solid fa-user-graduate"></i>
                    <div className="counterBody">
                        <h1 >8000+</h1>
                        <h3>STUDENTS ENROLLED</h3>
                    </div>
                </div>
                <div className="counterchild">
                    <i class="fa-solid fa-chalkboard-user"></i>
                    <div className="counterBody">
                        <h1>20+</h1>
                        <h3>Teachers</h3>
                    </div>
                </div>
                <div className="counterchild">
                    <i class="fa-solid fa-book-open-reader"></i>
                    <div className="counterBody">
                        <h1>30+</h1>
                        <h3>Subjects</h3>
                    </div>
                </div>
                <div className="counterchild">
                    <i class="fa-solid fa-user"></i>
                    <div className="counterBody">
                        <h1>1500+</h1>
                        <h3>Active STUDENTS</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}