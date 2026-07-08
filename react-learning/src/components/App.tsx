// import Hello from './Hello'
import EmployeeCard from './EmployeeCard'
import type { StudentInfoInter } from '../types/StudentInfoInter';
import StudentInfo from './StudentInfo';
import { useState } from 'react';

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

  const studentInfo: StudentInfoInter = {
    id: 1,
    name: 'rambhir',
    address: 'patliputra'
  }

  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(prev => prev+1);
    setCount(prev => prev+1);
    };

  const decrementCount = () => {
    // setCount(count - 1); not recommended
    setCount(prev => prev -1);
    setCount(prev => prev -1);
  }

  let count2 =0;

  return (
    <div className="app-container">
      {/* <div className="top-left">
        <h1>Hello React</h1>
      </div>
      <div className="top-right">
        <Hello />
      </div> */}
      <div>
        {/* Props are simply the arguments of a React component. */}
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
      </div>
      <div>
        <button onClick={incrementCount}>+</button>
        <p>{count}</p>
        <button onClick={decrementCount}>-</button>
        {/* without use state */}
        <p>{count2}</p>
        <button onClick={()=>count2++}></button>
      </div>
    </div>
  )
}

export default App