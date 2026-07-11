// import Hello from './Hello'
// import EmployeeCard from './EmployeeCard'
// import type { StudentInfoInter } from '../types/StudentInfoInter';
// import StudentInfo from './StudentInfo';
// import { useState } from 'react';
import Child from './Child';

function App() {

  const students = [
    {
      id: 1,
      name: "Rajeev",
      class: "A"
    },
    {
      id: 2,
      name: "Priya",
      class: "B"
    },
    {
      id: 3,
      name: "Amit",
      class: "C"
    },
    {
      id: 4,
      name: "Sneha",
      class: "D"
    },
    {
      id: 5,
      name: "Vikram",
      class: "E"
    },
    {
      id: 6,
      name: "shreyansh",
      class: "F"
    }
  ];

  //too repetative code -> use interface here
  // const studentInfo: {
  //   id: number,
  //   name: string,
  //   address: string
  // } = {
  //   id: 1,
  //   name: 'rahul',
  //   address: 'jamshedpur'
  // }

  // const studentInfo: StudentInfoInter = {
  //   id: 1,
  //   name: 'rambhir',
  //   address: 'patliputra'
  // }

  // const [count, setCount] = useState(0);

  // const incrementCount = () => {
  //   setCount(prev => prev + 1);
  //   setCount(prev => prev + 1);
  // };

  // const decrementCount = () => {
  //   // setCount(count - 1); not recommended
  //   setCount(prev => prev - 1);
  //   setCount(prev => prev - 1);
  // }

  // let count2 = 0;

  // let isActive = true;

  // const deactivate= ()=>{
  //   isActive=false;
  // }

  // const [isActive, setIsActive] = useState(false);
  // const [name, setName] = useState("");



  // const changeActiveStatus = () => {

  //   setIsActive(false);
  // }

  // const [city, setCity] = useState("");
  // const [name, setName] = useState("");
  // console.log('hello world');

  const sayHello= ()=>{
    console.log("hello from parent");
  }

  return (
    <div className="app-container">
     
     
      {/* <div className="top-left">
        <h1>Hello React</h1>
      </div>
      <div className="top-right">
        <Hello />
      </div> */}
      {/* <div>
        Props are simply the arguments of a React component.
        <div className='student-1'>
          <EmployeeCard name={students[0].name} id={students[0].id} />
        </div>
        <div className='student-2'>
          <EmployeeCard name={students[1].name} id={students[1].id} />
        </div>
        <div className='student-3'>
          <EmployeeCard name={students[2].name} id={students[2].id} />
        </div>
        <div className='student-4'>
          <EmployeeCard name={students[3].name} id={students[3].id} />
        </div>
        <div>
          <StudentInfo props={studentInfo} />
        </div>
      </div> */}
      {/* <div>
        <button onClick={incrementCount}>+</button>
        <p>{count}</p>
        <button onClick={decrementCount}>-</button>
        without use state
        <p>{count2}</p>
        <button onClick={() => count2++}></button>
      </div> */}
      {/* <div>
        {
          students.map((student) => {
            return (<EmployeeCard
              key={student.id}
              id={student.id}
              name={student.name}
              class={student.class}
            />)
          })
        }
      </div> */}

      {/* <div>
        {isActive ? <h1>"Welcome"</h1> : <h6>"Bye bye"</h6>}
      </div> */}

      {/* <div>
        {isActive && <h1>welcome</h1>}
      </div>
      <div>
        <button onClick={changeActiveStatus}>deactivate</button>
      </div> */}

      {/* <div>
        <form action="#">
          <label htmlFor="name">Name: </label>
          <input
            id='name'
            type="text"
            value={name}
            onChange={(e) => { setName(e.target.value) }}
          />
        </form>
        <p>{name}</p>
      </div> */}

      {/* <div>
        <form action="#">
          <label htmlFor="name">Name: </label>
          <input
            id='name'
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="city">City: </label>
          <input
            id='city'
            type="text"
            value={city}
            onChange={(e)=>setCity(e.target.value)}
          />
          <p>name: {name}</p>
          <p>city: {city}</p>
        </form>
      </div> */}

      <Child tellingHello = {sayHello} />
    </div>
  )
}

export default App

// conditional rendering
//1 -> ternary operator
//2 ->