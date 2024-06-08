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

 // for in

 /*const employee ={
  name:"Payel",
  age:20,
  occupation:"engineer",
 };
 for(const key in employee){
  if(employee.hasOwnProprty(key)){
    console.log('${key}: ${employee[key]}')
  }
 }
 //also for concatenate

 console.log()*/
/*for filtering data

const products = [
(id: 1001, name: "Laptop", price: 1000, category: "Electronics"),
 ( id: 1002, name: "shirt", price: 50, category: "clothing"},
(id: 1003, name: "coffee maker", price: 88, category: "Home Appliance"),
 ( id: 1004, name: "Headphones", price: 200, category: "Electronics"),
(id: 1005, name: "pants", price: 60, category: "clothing"},
];


const filteredProducts = products.filter((item) => {
  return item.category ==="clothing";
));
console.log("filteredProducts", filtered Products);
// find method
const foundProducts = products.find((item) =>{
return item.id === 1002;
 });

console.log(foundProducts);
*/
/* map keyword for returning value

const employees = [
(name: "Niraj", age: 22, salary:50), "Niraj": Unknown word.
(name: "Rudra", age: 30, salary:80),  "Rudra": Unknown word.
(name: "roy" age: 30, salary:100},
];
const mappedEmployees= employees.map((item) =>{
console.log("item",item);
return {
...item,
salary: item.salary + 100,
 };

}, []);
console.log("employees", employees);
console.log("mapped Employees", mapped Employees);
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
