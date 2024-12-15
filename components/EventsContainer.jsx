import Event from './Event'
import './css/event_container.css'

function EventsContainer() {
    return (
        <div className="event-con">
            <h2>Upcomming Events --</h2>
            <div className="events-outer">
                <div className="events-inner">
                    <Event name="cricket tournament" club="sports" facName="baishali" />
                    <Event name="coding compitiion" club="coding" facName="arpan" />

                    <Event facName='avijit' />
                    <Event name="cricket tournament" club="sports" facName="baishali" />
                    <Event name="coding compitiion" club="coding" facName="arpan" />

                    <Event facName='avijit' />
                    <Event name="cricket tournament" club="sports" facName="baishali" />
                    <Event name="coding compitiion" club="coding" facName="arpan" />

                    <Event facName='avijit' /><Event name="cricket tournament" club="sports" facName="baishali" />
                    <Event name="coding compitiion" club="coding" facName="arpan" />

                    <Event facName='avijit' />
                </div>


            </div>
        </div>
    )
}

export default EventsContainer