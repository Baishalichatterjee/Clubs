import './css/signin.css'
import close from '../assets/close.png'

function SignIn({signinClose}) {
    const closeFunc = () => {
        signinClose(false)
    }
    return (
        <div className="sign-blur">
            <div className="signin">
                <button id='sign-close' onClick={closeFunc}><img src={close} alt="close image" />  </button>
                <h3>Sign Up</h3>
                <div className="sign-line"></div>
                <form action="#">
                    <div className="sign-email">
                        <input type="email" id="email" name="email" placeholder="Email" required />
                    </div>
                    <div className="sign-user">
                        <input type="text" id="user" name="user" placeholder="Student Id" required />
                    </div>
                    <div className="sign-pass">
                        <input type="password" id="pass" name="pass" placeholder="Password" required />
                    </div>
                    <button id="signinbtn" >Sign up</button>
                </form>
            </div>
        </div>
    )
}

export default SignIn