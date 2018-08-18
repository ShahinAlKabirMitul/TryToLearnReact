import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
  state = {
    persons: [
      { id:'kkr', name: 'Max', age: 28 },
      { id:'kkr1', name: 'Mainu', age: 29 },
      { id:'krtt1', name: 'Stephanie', age: 26 },
    ],
    otherState: 'some other value',
    showPerson: false,
  };

  switchNameHandler = newName => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    this.setState({
      persons: [
        { name: 'Manu', age: 29 },
        { name: newName, age: 28 },
        { name: 'Stephanie', age: 27 },
      ],
    });
  };

  nameChangedHandler = (event,id) => {
    console.log(event);
    const personIndex = this.state.persons.findIndex(p=>{
      return p.id === id;
    });
    const person = {...this.state.persons[personIndex]};
    person.name=event.target.value;
    const persons= [...this.state.persons];
    persons[personIndex]=person;


    this.setState({ persons});
  };
  deletePersonHandler = (personindex) =>{
    const persons =[...this.state.persons];
    persons.splice(personindex,1);
    this.setState({persons});


  }
  togglePersonHandler = () => {
    const showPerson = this.state.showPerson;

    this.setState({ showPerson: !showPerson });
  };

  render() {
    const style = {
      backgroundColor: 'green',
      color:'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      
    };

    let person = null;
    if(this.state.showPerson){
      person=(  
        <div>
            {this.state.persons.map( (person,index) =>{
               return <Person 
                click={ ()=> this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={ (event)=> this.nameChangedHandler(event,person.id)}
                />
            })}
            
          </div>
          )
          style.backgroundColor='red';
         
    }
    let classes=[];
    if(this.state.persons.length <= 2){
      classes.push('red');
    }
    if(this.state.persons.length <=1 ){
      classes.push('bold');
    }

    return (
      <div className="App">
          <h1>Hi, I'm a React App</h1>
          <p className={classes.join(' ')}>This is really working!</p>
          <button style={style} onClick={() => this.togglePersonHandler()}>
            Toggle Button
          </button>
          {person}
        </div>
      
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
