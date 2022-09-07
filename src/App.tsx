import React from 'react';
import './App.css';


import { Button } from './components/Button';
// import { Greet } from './components/Greet';
// import { Person } from './components/Person';
// import { PersonList } from './components/PersonList';
// import { Status } from './components/Status';
// import { Heading } from './components/Heading';
// import { Oscar } from './components/Oscar';


function App() {
// const personName = {
//   first: 'James',
//   last:'Pritchard'
// }
// const personList = [
//   {
//     first: 'James',
//     last: 'Pritchard'
//   },
//   {
//     first: 'Maegan',
//     last: 'Mackenzie'
//   },
//   {
//     first: 'Brenda',
//     last: 'Ingram'
//   }
// ]
  return (
    <div className="App">
      <Button handleClick={(event, id)=>{
        console.log('ButtonClicked', event, id)
      }} />
      
      
      
      
      
      
      {/* <Oscar>
        <Heading>Placeholder Text</Heading>
      </Oscar>
      <Greet customer='James' messageCount={13} isLoggedIn={true} /> 
      <Person name={personName}/>
      <PersonList personList={personList}/>
      <Status status='success'/> */}
    </div>
  );
}

export default App;
