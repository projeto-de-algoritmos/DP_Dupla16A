import QuestCatalog from './components/QuestCatalog'
import logo from './WOW_logo.png'
import './App.css';

function App() {
  return (
    <div className="App">
			<img style={{marignBottom: '-10px'}} src={logo} className="App-logo" />
			<div className="level-app">
				<QuestCatalog />
			</div>
    </div>
  );
}

export default App;
