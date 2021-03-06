class PreviewApp extends Component {
    constructor(props, parentNode, params) {
        super(props, parentNode, params);
        this.html = 
        `<div class="preview-app">
            <div>
                <h1>Приветствуем вас в нашем проекте Eat-app!</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum finibus suscipit lacinia. Cras ultricies feugiat varius. Phasellus efficitur ultricies magna, a consequat sapien accumsan id.</p>
                <p>Для успешного использования нашего приложения нам потребуется информаия о вас.</p>
            
                <button id="button-next">Go next</button>
            </div>
        </div>`;
    }
      
    render() {        
        let parentNode = document.getElementById(this.parentNode);

        let profileFillingForm = new ProfileFillingForm(this, "preview-app-page", null);

        parentNode.innerHTML = '';
        parentNode.insertAdjacentHTML('beforeend', this.html);
        

        let buttonNext = document.getElementById("button-next")
        buttonNext.onclick = () => {
            profileFillingForm.render();
        };

      }
}