const server = require("./server/server")
const router = require("./routing/router.js");

const testHandler = require("./requestHandlers/testHandler");
const registrationHandler = require("./requestHandlers/registrationHandler.js/registrationHandler") 
const loginHandler = require("./requestHandlers/loginHandler/loginHandler.js")

handle = {}

handle['/test'] = testHandler.test;
handle['/login'] = loginHandler.login;
handle['/registration'] = registrationHandler.registration;


server.start(router.router, handle)