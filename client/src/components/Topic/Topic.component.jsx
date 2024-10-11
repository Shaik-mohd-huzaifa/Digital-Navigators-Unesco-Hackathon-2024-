import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import topics from "../../../data/topics.json"
import { IdeaSuggestion } from "../../utils/IdeaBank";
import { Oval } from "react-loader-spinner"
import { IdeasSelector } from "../../store/IdeaBank/IdeaBank.selector";
import { UpdateIdea } from "../../store/IdeaBank/IdeaBank.actions";
import { useDispatch, useSelector } from "react-redux";
import "./Topic.styles.scss";

export const Topic = () => {
    const { topicId } = useParams();
    const Ideas = useSelector(IdeasSelector)
    const [suggestion, setSuggestions] = useState(null)
    const topic = topics.find(topic => topic.id == topicId)
    const dispatch = useDispatch()
    useEffect(() => {

        async function fetchdata() {
            try {
                const data = await IdeaSuggestion(topic);
                dispatch(UpdateIdea(data))
                setSuggestions(Ideas)
            } catch (error) {
                console.log(error)
            }
        }
        fetchdata()
    }, []) // Add dependencies here



    return (
        <div className="">
            {
                suggestion ? 
                (<div className="topic-container">
                    <div className="logo">
                        <h2>{suggestion["suggested_topic"]}</h2>
                        <p>{suggestion.description}</p>
                    </div>
                    <div className="suggested-ideas">
                        {
                            suggestion["sub_topics"].map((idea, index) => (
                                <div key={index} className="idea">
                                    <p>{idea["title"]}</p>
                                    <p>{idea["description"]}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>)
                : <div className="loading"><Oval color="blue" width="30" height="30"/></div>
            }
            <button><Link to="../" relative="path">Return</Link></button>
        </div>
    )
}