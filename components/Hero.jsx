import './css/hero.css'

function Hero() {
    return (
        <div className="hero">
            <p id="clubdet">
                Join Nit <span className="text-color" >Clubs</span> and participate in club <span className="text-color" >events</span> to gain experience and widen your horizon
            </p>
            <div className="joinclub">
                <p>Join your faburite club</p>
                <button id="join" >Join Club </button>
            </div>
        </div>
    )
}

export default Hero