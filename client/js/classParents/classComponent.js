class Component {
    constructor(props, parentNode, selfNode) {
        this.parentNode = parentNode;
        this.selfNode = selfNode;
        this.props = props;
    }

    renderSelf() {
        let parentNodeDOM = document.getElementById(this.parentNode);

        parentNodeDOM.innerHTML = '';

        let selfNodeDOM = document.createElement("div");
        selfNodeDOM.id = this.selfNode;
        selfNodeDOM.className = this.selfNode;
       
        parentNodeDOM.insertAdjacentElement("beforeend", selfNodeDOM);

        this.render()    
    }

    render() {
        console.log("render")
    }
    
}