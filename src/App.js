import './App.css';
import Profile from './Component/Profile';
const App = () => {
  const handleAlert =()=>{
    alert("Ghada Shieldmaiden")
  }
  const styling = {color: "white", backgroundImage: "linear-gradient(to right, #434343 0%, black 100%)"}
  return (
    <div style ={styling} className="App">
            <button onClick={handleAlert}>This is my profile</button>
      <Profile name="Ghada" place="Tunis" profession="developer" handleAlert={handleAlert}>
        <img style={{borderRadius: "50%"}} src="https://avatarfiles.alphacoders.com/224/224762.jpg"/>
      </Profile>
    </div>
  );
}

export default App;
