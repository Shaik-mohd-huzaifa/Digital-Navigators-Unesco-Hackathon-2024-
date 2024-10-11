import course from "../../../data/dummyCourse.json"
import "./Course.styles.scss"


export const Course = () => {
    return (
        <div className="course-container">
            <div className="course-header">
                <h2>Course: {course.title}</h2>
                <p>{course.description}</p>
                <p>Level: {course.level}</p>
                <p>Delivery: {course.delivery}</p>
                <p>Duration: {course.duration}</p>
                <p>Total hours: {course.total_hours}</p>
                <p></p>
            </div>
            <div className="courseDetails">
                {
                    course.topics.map((topic, index) => (
                        <div className="course-topic" key={index}>
                            <p className="topic-header">{topic.topic_title}</p>
                            <p className="topic-description">{topic.description}</p>
                            <p className="topic-duration">{topic.duration}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}