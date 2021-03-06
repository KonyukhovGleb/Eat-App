class WindowUserInfo extends Component {
    constructor(props, parentNode, params) {
        super(props, parentNode, params);
        this.store = {};
        this.html = 
        `<div class="user-data">
            <span id="login">Логин:</span><br>
            <span id="gender">Пол:</span><br>
            <span id="weight">Вес:</span><br>
            <span id="height">Рост:</span><br>
            <span id="age">Возраст:</span><br>
        </div>`;
    }
    getData() {
        return new Promise((resolve, reject) => {
            let url = "http://localhost:8888/basicUserInfo";
            let xhr = new XMLHttpRequest();
            let body = {
              login: localStorage.getItem('login'),
              token: localStorage.getItem('token')
            }

            xhr.open('POST', url, true);
            xhr.onload = function () {
                if (this.status >= 200 && this.status < 300) {
                  resolve(xhr.response);
                } else {
                  reject({
                    status: this.status,
                    statusText: xhr.statusText
                  });
                }
              };
              xhr.onerror = function () {
                reject({
                  status: this.status,
                  statusText: xhr.statusText
                });
              };
            
            xhr.send(JSON.stringify(body));
          
        })
    }
    
    render() {        
        let parentNode = document.getElementById(this.parentNode);
        console.log("indow")
        parentNode.insertAdjacentHTML('beforeend', this.html);
        
      }
}