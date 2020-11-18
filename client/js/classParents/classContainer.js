class Container {
    constructor(parentNode, selfNode) {
        this.parentNode = parentNode;
        this.selfNode = selfNode
        this.components = []
    }

    insert(component) {
        this.components.push(component);
    }

    render() {
        let parentNodeDOM = document.getElementById(this.parentNode);

        parentNodeDOM.innerHTML = '';

        let selfNodeDOM = document.createElement("div");
        selfNodeDOM.id = this.selfNode;
        selfNodeDOM.className = this.selfNode;
        parentNodeDOM.insertAdjacentElement("beforeend", selfNodeDOM);

        this.components.forEach(component => {
            component.render();
        });
    }

    

    
}