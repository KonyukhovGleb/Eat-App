class AuthPageContainer extends Component {
    constructor(props, parentNode, selfNode){
        super(props, parentNode, selfNode);

    }

    render() {
        new AuthForm(null, "auth-page-container", null).render();
        new InfoDesk(null, "auth-page-container", null).render();
    }

}