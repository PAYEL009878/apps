import logo from './logo.svg';
import './App.css';

function App() {
  //object with for off loop
 /* const people =[
    { name:"Payel" ,age:"20"},
    {name:"Riya" ,age:"20"},
    {name:"Neha" ,age:"21"}
  ];
for (let item of people)
  {
    console.log(item.name) 
  }
    */
   /*
   [object with for each loop]
   const people =[
    { name:"Payel" ,age:"20"},
    {name:"Riya" ,age:"21"},
    {name:"Neha" ,age:"22"}
  ];
  people.forEach((person) =>{
    console.log(person.age)
  });
  */
    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
