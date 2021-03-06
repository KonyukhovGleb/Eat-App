class RegistrationPageContainer extends Component {
    constructor(props, parentNode, selfNode){
        super(props, parentNode, selfNode);
    }
    render() {
        new RegistrationForm(null, "registration-page", null).render()
    }
}