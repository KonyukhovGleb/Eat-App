class AuthForm extends Component {
    constructor(props, parentNode, params) {
        super(props, parentNode, params);
        this.html = 
        `<div class="auth-window">
            <form class="input-box" onsubmit="return false">
                <h1 class="welcom">Welcome</h1>
                <div class="login-input">
                    <span>Login</span><br>
                    <input id="input-login" type="text" name="login">
                </div>
                <div class="Password-input">
                    <span>Password</span><br>
                    <input id="input-password" type="text" name="password">
                </div>
                <div class="button-box">
                    <button id="button-login">Login</button>
                </div>
                <div class="registration-link">
                    <span>Don't have account? <a href="#">Sign Up</a>
                </div>
            </form>
        </div>`;
    }
    
    getData() {
        let buttonLogin = document.getElementById("button-login");
        buttonLogin.onclick = () => console.log("Data");
    }

    render() {
        let parentNode = document.getElementById(this.parentNode);
        parentNode.insertAdjacentHTML('beforeend', this.html);
        console.log(parentNode);
        this.getData();
    }
}