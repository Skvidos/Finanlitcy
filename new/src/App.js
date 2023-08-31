import './App.scss';
import Header from "./components/Header/Header.jsx"
import Intro from "./components/Intro/Intro.jsx";


function App() {
  return (
      <div className="App">
        <Header />
        <Intro />
          <style>
              @import url('https://fonts.googleapis.com/css2?family=Bellota+Text:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap');
          </style>
      </div>
);
}
export default App;
