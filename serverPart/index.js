const server = require("./server/server")
const router = require("./routing/router.js");

const testHandler = require("./requestHandlers/testHandler");
const registrationHandler = require("./requestHandlers/registrationHandler.js/registrationHandler") 
const loginHandler = require("./requestHandlers/loginHandler/loginHandler")
const basicUserInfoHandler = require("./requestHandlers/basicUserInfoHandler/basicUserInfoHandler")
const addBasicUserInfoHandler = require("./requestHandlers/addBasicUserInfoHandle/addBasicUserInfo")
handle = {}

handle['/test'] = testHandler.test;
handle['/login'] = loginHandler.login;
handle['/registration'] = registrationHandler.registration;
handle['/basicUserInfo'] = basicUserInfoHandler.basicUserInfo;
handle['/addBasicUserInfo'] = addBasicUserInfoHandler.addBasicUserInfo 

server.start(router.router, handle)