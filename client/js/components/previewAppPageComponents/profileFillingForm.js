class ProfileFillingForm extends Component {
    constructor(props, parentNode, params) {
        super(props, parentNode, params);
        this.html = 
        `<div class="profile-filling-form">
            <form>
                <div class="gender-select">
                    <span>Пол</span>
                    <p><input name="gender" type="radio" value="man">Мужской</p>
                    <p><input name="gender" type="radio" value="woman">Женский</p>
                </div>
                <div>
                    <span>Возраст</span>
                    <input id="input-age" type="text" name="age">
                <div>
                <div>

                    <span>Рост(см)</span>
                    <input id="input-height" type="text" name="height">
                <div>

                    <span>Вес(кг)</span>
                    <input id="input-weight" type="text" name="weight">
                <div>
            </form>

            <button id="button-back">Назад</button>
            <button id="button-next">Дальше</button>
        </div>`;
    }
    getDataFromForm() {
        let userAge = document.getElementById("input-age").value;
        let userHeight = document.getElementById("input-height").value;
        let userWeight = document.getElementById("input-weight").value;
        let userGender = document.getElementsByName('gender')[0].checked === true ?
        document.getElementsByName('gender')[0].value : document.getElementsByName('gender')[1].value; 

        return {gender: userGender,
                age: userAge,
                height: userHeight,
                weight: userWeight }
    }

    request(basicUserInfo) {
        return new Promise((resolve, reject) => {
            let url = "http://localhost:8888/addBasicUserInfo";
            let xhr = new XMLHttpRequest();
            let body = {
              login: localStorage.getItem('login'),
              token: localStorage.getItem('token'),
              basicUserInfo: basicUserInfo
            }
            console.log(body)
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
        
        parentNode.innerHTML = '';
        parentNode.insertAdjacentHTML('beforeend', this.html);
        
        let buttonNext = document.getElementById("button-next")
        buttonNext.onclick = () => {
            this.request( this.getDataFromForm() );
        };

        let buttonBack = document.getElementById("button-back")
        buttonBack.onclick = () => {
            this.props.render();
        };
        
        
    }
      
}