import { Link, Outlet } from 'react-router-dom'
import topics from './../../../data/topics.json'
import { FaBrain} from 'react-icons/fa'
import "./IdeaSuggestor.styles.scss"

export const IdeaSuggestor = () => {
    return (
        <div className="Idea-container">
            <div className="idea-header">
                <div className="logo">
                    <FaBrain/>
                    <h2>Brainwave</h2></div>
            <p>Helping ambassadors write well by suggesting impactful topics.
            </p>
            </div>
            <div className="topic-selector">
                {
                    topics.map((topic, index) => (
                        <div key={index} className='topic'>
                            <p><Link to={`${topic["id"]}`}>{topic["topics"]}</Link></p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}