const { useState } = React;

const App = () => {

    const [name, setName] = useState('');
    const [catFact, setCatFact] = useState();

    const inputHandler = e => {
        setName(e.target.value);
    }

    const buttonHandler = () => {
        fetch('https://catfact.ninja/fact')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setCatFact(data);
            });
    }

    return (
        <React.Fragment>
            <h1>🦄</h1>
            <button onClick={buttonHandler} >Show me Cat random fact</button><br />
            <span>{catFact?.fact}</span>
            <span>{catFact?.length}</span>
        </React.Fragment>
    );
}

let domContainer = document.querySelector('#app');
ReactDOM.render(<App />, domContainer);
