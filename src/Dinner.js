import './App.css';

function Dinner(props) {
  return (
    <div className="App">
      <header className="App-header">
        <div>
            <h1>We are serving BARYANI Today</h1>
            <h2>We are serving {props.dishName}</h2>
            </div>
      </header>
    </div>
  );
}

export default Dinner;
