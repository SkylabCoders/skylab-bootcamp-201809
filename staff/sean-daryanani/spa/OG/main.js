var landing = new Landing('Choose an option', 'section',
    function () {
        landing.hide();
        register.show();
    },
    function () {
        landing.hide();
        login.show();
    });

document.querySelector(".container").appendChild(landing.element);

var login = new Login('Login', 'section', function (username, password) {
    logic.login(username, password, function () {
        login.hide();
        welcome.show();
    }, function () {
        wrongCredentials.show();
    })

}, function () {
    login.hide();
    register.show();

});

document.querySelector(".container").appendChild(login.element);

var wrongCredentials = new Credentials('Wrong password!', 'section');
document.querySelector(".login").appendChild(wrongCredentials.element);

var register = new Register('Register Now!', 'section', function (email, fullname, username, password) {
    logic.register(email, fullname, username, password, function () {
        register.hide();
        login.show();
    }, function () {
        wrongRegister.show();
    });
})

document.querySelector(".container").appendChild(register.element);


var wrongRegister = new Credentials("Can't have blank fields!", 'section');
document.querySelector(".register").appendChild(wrongRegister.element);


var welcome = new Welcome('Welcome to the app!', 'section');

document.querySelector(".container").appendChild(welcome.element);