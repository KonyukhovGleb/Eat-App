class RegistrationForm extends Component {
    constructor(props, parentNode, params) {
        super(props, parentNode, params);
        this.html = 
        `<div class="registration-window">
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
                    <div class="Password-input">
                    <span>Repeat password</span><br>
                    <input id="input-password-r" type="text" name="password">
                </div>
                <div class="button-box">
                    <button id="button-registration">Registration</button>
                </div>
                <div class="login-link">
                    <span>Are you have account? <a href="#auth">Log in</a>
                </div>
            </form>
        </div>`;
    }
    registration() {
        return new Promise((resolve, reject) => {
            let userLogin = document.getElementById("input-login").value;
            let userPassword = document.getElementById("input-password").value;
            let body = {
                login: userLogin,
                password: userPassword
            }

            let url = "http://localhost:8888/registration";
            let xhr = new XMLHttpRequest();
            xhr.open('POST', url, false);
        

            xhr.send(JSON.stringify(body));
            console.log(xhr.response)
        });
    }
    
    render() {
        let parentNode = document.getElementById(this.parentNode);
        parentNode.insertAdjacentHTML('beforeend', this.html);

        
        let buttonRegistration = document.getElementById("button-registration");
            
        buttonRegistration.onclick = () => {
            console.log("fre")
            this.registration().then(res => {
                console.log(res);
            })
        }
    }
}