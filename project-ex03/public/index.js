const App = function(){ //호출되면 
    const app = document.createElement('h1'); //순수 DOM API
    app.textContent = 'hello world';

    return app;
}

document
    .getElementById('root')
    .appendChild(App());