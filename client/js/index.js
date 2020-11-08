// const emailInput = document.getElementById("input-email");
// const passwordInput = document.getElementById("input-password");
// const buttonLogin = document.getElementById("button-login");


// buttonLogin.onclick = function(event) {
//     event.preventDefault();
    
//     console.log(window.location.hash)
// }

// console.log(buttonLogin);


(function () {
    function init() {
        var router = new Router([
            new Route('auth', authPage),            
            new Route('main', mainPage, true)
        ]);
    }
    init();
}());
