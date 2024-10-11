import courses from "./../../../data/courses.json"
import category from "./../../../data/category.json"
import "./Learning.styles.scss"
import { useNavigate } from "react-router"
import { Link } from "react-router-dom"


export const Learning = () => {
    const navigate = useNavigate();
    const RedirecttoCourse = () => {
        navigate("course")
    }
    return (
        <div className="learning">
            <div className="header">
            <h2>Learning Hub</h2>
            <div className="quiz-container">
            <Link to="quiz">Quiz</Link>
            <a>My Learning</a>
            </div>
            </div>
            <div className="categories">
                {
                    category.map(
                        (cat,index) => (
                            <span key={index} className="category-box">{cat.category}</span>
                        )
                    )
                }
            </div>
            <div className="courses">
                {
                    courses.map((course, index) => (
                        <div className="course"  key={index} onClick={RedirecttoCourse}>
                            <p>{course.title}</p>
                            <img src={`/course/${course.image}.png`} alt="" />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}