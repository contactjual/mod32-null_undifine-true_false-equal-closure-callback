function greeting(greetingHandler, name) {
    greetingHandler(name);
    // greetingEvening(name);
}

function greetingHandler(name) {
    console.log('Good morning', name);
}


function greetingEvening(name) {
    console.log('Good evening', name);
}


greeting(greetingHandler, 'Soltan');
// greeting(greetingHandler, 'Soltainna');
// greeting(greetingHandler, 'Solto');

greeting(greetingEvening, 'Noto');
// greeting(greetingEvening, 'Nat');
// greeting(greetingEvening, 'Natom');

