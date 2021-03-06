class MainPageContainer extends Component {
    constructor(props, parentNode, selfNode){
        super(props, parentNode, selfNode);
    
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
              resolve(JSON.parse(xhr.response));
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
    this.getData().then((res) => {
      console.log("#main")
      console.log(res)
        
        if(res.profileСompleted === true) {
            console.log(131)
            new WindowUserInfo(res, "main-page-container", null).render();
        } 
        else if(res.profileСompleted === false) {
            location.hash = "#preview";

        }
        else {
            console.log(false + false)
            
        }
        

    }).catch ((err) => {
        console.log(err)
    })
    
    
    // console.log('Token', localStorage.getItem('token'))
    // console.log('Login', localStorage.getItem('login'))

  }
}