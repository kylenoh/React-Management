import React, { Component } from 'react';
import Customer from './components/Customer';
import './App.css';

const customers = [
  {
  'id':1,
  'image':'https//placeimg.com/64/64/1',
  'name':'홍길동',
  'birthday':'891118',
  'gender':'남자',
  'job':'대학생'
  },
  {
    'id':2,
    'image':'https//placeimg.com/64/64/2',
    'name':'하하',
    'birthday':'981118',
    'gender':'남자',
    'job':'직장인'
  },
  {
    'id':3,
    'image':'https//placeimg.com/64/64/3',
    'name':'아무개',
    'birthday':'125835',
    'gender':'남자',
    'job':'대학생'
  }
]

class App extends Component {
  render() {
    return (
      <div>
        {
          customers.map(c => {
            return (
              <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              job={c.job}
              />
            );
          })
        }
      </div>
    );
  }
}

export default App;
