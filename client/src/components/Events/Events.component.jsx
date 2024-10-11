import "./Events.compoent.scss"
import events from "../../../data/events.json"
import { FaCalendarAlt, FaClock, FaMapMarkerAlt,  FaUser} from "react-icons/fa"
export const Events = () => {
    return (
        <div className="event-container">
            <div className="header">
            <h2>Events</h2>
            <div className="quiz-container">
            <p>My Events</p>
            <p>Host a Event</p>
            </div>
            </div>
            <div className="events">
                {
                    events.map((eve, index) => (
                        <div className="event-card" key={index}>
                        <img src={eve.image} alt={eve.event_name} className="event-card-image" />
                        <div className="event-card-content">
                          <h2 className="event-card-title">{eve.event_name}</h2>
                          <p className="event-card-description">{eve.description}</p>
                          <div className="event-card-details">
                            <div className="event-card-detail">
                              <FaCalendarAlt className="event-card-icon" />
                              <span>{eve.date}</span>
                            </div>
                            <div className="event-card-detail">
                              <FaClock className="event-card-icon" />
                              <span>{eve.time}</span>
                            </div>
                            <div className="event-card-detail">
                              <FaMapMarkerAlt className="event-card-icon" />
                              <span>{eve.location}</span>
                            </div>
                            <div className="event-card-detail">
                              <FaUser className="event-card-icon" />
                              <span>Hosted by {eve.host_name}</span>
                            </div>
                          </div>
                          <button className="event-card-rsvp-button">RSVP</button>
                        </div> 
                        </div>
                    ))
                }
            </div>
        </div>
    )
}