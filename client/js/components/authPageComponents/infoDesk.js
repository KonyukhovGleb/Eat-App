class InfoDesk extends Component {
    constructor(props, parentNode, params){
        super(props, parentNode, params);
        this.html = 
        `<div class="info-desk">
            <h1>News</h1>
            <p>Нас уже: 1023040</p>                
            <p>Последний пользователь зарегистрировался: 03/11/2020 12:53:23</p>
        </div>`;
    }
    render() {
        let parentNode = document.getElementById(this.parentNode);
        parentNode.insertAdjacentHTML('beforeend', this.html);
        console.log(parentNode);
    }
}