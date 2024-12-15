import './css/notice.css'
import arrowRight from '../assets/right-arrow (1).png'

const defaultDesc = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit voluptate temporibus officiis qui delectus quas voluptas voluptatibus minus rem quod."
function Notice({ desc = defaultDesc }) {
    const date = new Date().toLocaleDateString()
    const time = new Date().toLocaleTimeString()
    return (
        <>
            <div className="notice">
                <div className="notice-details">
                    <div className="notice-heading">
                        <h3>notice heading</h3>
                        <p>{date} {time} </p>
                    </div>
                    <div className="notice-body">
                        <p> {desc} </p>
                    </div>
                </div>
                <div className="notice-button">
                    <button id="more">
                        <img src={arrowRight} alt="right arrow" />
                    </button>
                </div>
            </div>
        </>
    )
}

export default Notice