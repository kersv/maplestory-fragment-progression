import './App.css';
import Tracker from './feature/Tracker';
import DesireSkill from './feature/DesireSkill';

function App() {
  return (
    <div className="App">
      <h3 >Maplestory 6th Job Tracker</h3>
      <div style={{display:'flex'}}>
        <Tracker/>
        <DesireSkill/>
      </div>
    </div>
  );
}

export default App;
