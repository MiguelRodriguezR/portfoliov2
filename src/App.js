import './App.css';
import Main from './components/main/Main';


var css = "background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,53,121,1) 35%, rgba(0,212,255,1) 100%); color: white; font-size: 20px; padding: 10px"
console.log("%cWhat're you lookin' at? 👀", css);

function App() {
  return (
    <div>
      <Main></Main>
    </div>
  );
}

export default App;
