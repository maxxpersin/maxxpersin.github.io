var view = 'index';

function init() {
    $('#index').click(function () { setView('index') });
    $('#projects').click(function () { setView('projects') });
}

function setView(option) {
    if (option === 'index') {
        view = 'index';
    } else if (option === 'projects') {
        view = 'projects';
    }

    console.log(view);
}