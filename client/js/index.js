let authPageContainer = new AuthPageContainer(null, "app", "auth-page-container");
let registrationPageContainer = new RegistrationPageContainer(null, "app", "registration-page-container")
let mainPageContainer = new MainPageContainer(null, "app", "main-page-container");
let previewAppPageContainer = new PreviewAppPageContainer(null, "app", "preview-app-page");


//router
(function () {
    function init() {
        let router = new Router([
            new Route('auth', authPageContainer, true),
            new Route('registration', registrationPageContainer),            
            new Route('main', mainPageContainer),
            new Route('preview', previewAppPageContainer),
            
        ]);
    }
    init();
}());
