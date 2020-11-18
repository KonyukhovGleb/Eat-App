
let authPageContainer = new AuthPageContainer("app", "auth-page") 
let mainPageContainer = new MainPageContainer("app", "main-page")


let params = {
    type: "formComponent",
}

let authForm = new AuthForm(null, "auth-page", params);
let infoDesk = new InfoDesk(null, "auth-page", params)
let windowUserInfo = new WindowUserInfo(null, "main-page", params);

authPageContainer.insert(authForm);
authPageContainer.insert(infoDesk);
mainPageContainer.insert(windowUserInfo);
// authPageContainer.render()



(function () {
    function init() {
        let router = new Router([
            new Route('auth', authPageContainer, true),            
            new Route('main', mainPageContainer),

        ]);
    }
    init();
}());
