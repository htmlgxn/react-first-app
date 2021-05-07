import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    const buttonText = {text: 'Hello World'};
    const style = {backgroundColor: 'red', color: 'white'};

    return(
        <div>
            <label for="name" className="label">Enter e-mail: </label>
            <input id="name" type="text"/>
            <button style={style}>{buttonText.text}</button>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)