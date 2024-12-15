import codeing_event from '../assets/coding_event.jpg'
import './css/event.css'

function Event({name = "Club Event", club = "Club", facName = "none"}){
    return(
        <div className="event">
            <img src={codeing_event} alt="" />
            <div className="eventdet">
                <h3>{name}</h3>
                <p>Organizing Club: {club}</p>
                <p>Faculty: {facName}</p>
                <button>View Details</button>
            </div>
        </div>
    )
}

export default Event

