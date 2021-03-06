class PreviewAppPageContainer extends Component {
    constructor(props, parentNode, selfNode){
        super(props, parentNode, selfNode);
    }
    render() {
        new PreviewApp(null, "preview-app-page", null).render()

    }
}

