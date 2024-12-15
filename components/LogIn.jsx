import './css/login.css'
import close from '../assets/close.png'

function LogIn({loginClose}) {
    const closeFunc = () => {
        loginClose(false)
    }
    return (
        <div className="log-blur">
            <div className="login">
                <button id='log-close' onClick={closeFunc} ><img src={close} alt="close icon" /></button>
                <h3>LOG IN</h3>
                <div className="log-line"></div>
                <form action="#">
                    <div className="log-user">
                        <input type="text" id="user" name="user" placeholder="Student Id" required />
                    </div>
                    <div className="log-pass">
                        <input type="password" name="pass" id="pass" placeholder='Password' required />
                    </div>
                    <button id='loginbtn' >Log in </button>
                </form>
            </div>
        </div>
    )
}
export default LogIn