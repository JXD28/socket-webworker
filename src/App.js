import logo from './logo.svg';
import './App.css';
// require('socketio-shared-webworker');
import 'socketio-shared-webworker';
function App() {
    var ws = window.wio('http://localhost:3000/');
    ws.setWorkerType(Worker);
    ws.start(); // use default SharedWorker script URL

    // same as socket.io-client
    ws.on('connect', () => {
        console.log('connected!');
        ws.emit('message', 'Hi There!');
    });

    ws.on('chat message', (data) => console.log('received message', data));
    ws.on('disconnect', () => console.log('disconnected!'));
    ws.on('error', (data) => console.log('error', data));
    return (
        <div className='App'>
            <header className='App-header'>
                <img src={logo} className='App-logo' alt='logo' />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className='App-link'
                    href='https://reactjs.org'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
