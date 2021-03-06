class InfoDesk extends Component {
    constructor(props, parentNode, params){
        super(props, parentNode, params);
        this.html = 
        `<div id="inf-dsk" class="info-desk">
            <h1>News</h1>
                            
            <p>Последний пользователь зарегистрировался: 03/11/2020 12:53:23</p>
        </div>`;
    }
    getNewsData() {
        return new Promise((resolve, reject) => {
            let url = "http://localhost:8888/test";
            let xhr = new XMLHttpRequest();
            xhr.open('GET', url, true);
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
            xhr.send();
        })
    }
    render() {
        let parentNode = document.getElementById(this.parentNode);
        parentNode.insertAdjacentHTML('beforeend', this.html);

        this.getNewsData().then((res) => {
            let numberOfUsers = JSON.parse(res).numberOfUsers

            let infoDesk = document.getElementById("inf-dsk");
            infoDesk.insertAdjacentHTML("beforeend", `<p>Нас уже: ${numberOfUsers}</p>`)
        })
            
    }
}