class WindowUserInfo extends Component {
    constructor(props, parentNode, params) {
        super(props, parentNode, params);
        this.html = 
        `<div class="user-data">
            <span>Login</span>
            <span>qwe</span>
            <span>ewq</span>
            <span>weq</span>
        </div>`;
    }
    
    render() {
        let parentNode = document.getElementById(this.parentNode);
        parentNode.insertAdjacentHTML('beforeend', this.html);
        console.log(parentNode);
    }
}