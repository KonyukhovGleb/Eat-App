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
                    <input id="input-password" type="password" name="password">
                </div>
                <div class="button-box">
                    <button id="button-login" href="#main">Login</button>
                </div>
                <div class="registration-link">
                    <span>Don't have account? <a href="#registration">Sign Up</a>
                </div>
            </form>
        </div>`;
    }
    
    request() {

        let userLogin = document.getElementById("input-login").value;
        let userPassword = document.getElementById("input-password").value;

        let url = "http://localhost:8888/login";
        let xhr = new XMLHttpRequest();
        xhr.open('POST', url, false);
         
        let body = {
            login: userLogin,
            password: userPassword
        }

        xhr.send(JSON.stringify(body));
        console.log(xhr.response)
        
        let token = JSON.parse(xhr.response).token
        console.log(token)

        localStorage.setItem('login', userLogin);
        localStorage.setItem('token', token);


        location.hash = "#main"
    }

    render() {
        let parentNode = document.getElementById(this.parentNode);
        parentNode.insertAdjacentHTML('beforeend', this.html);
        
        let buttonLogin = document.getElementById("button-login")
        buttonLogin.onclick = () => {
            this.request();
        };
        
    }
}