import React, { Component } from 'react';
import R from 'ramda';

const persons = [
  { id: 1, name: 'Rui' },
  { id: 2, name: 'Maria' },
  { id: 3, name: 'Antonia' }
];

const Container = children =>
  <div className="panel panel-default">
    <div className="panel-body">
      {children}
    </div>
  </div>;

const List = items => <ul>{ items }</ul>;

const Item = ({ id, name }) => <li key={id}>{ name }</li>;

const App = () => {
  const PersonsList1 = Container(List(Item(persons[0])));
  /**
   * Persons list is a function that expects a state and returns a new component
   * according to that state.
   */
  const PersonsList = R.compose(Container, List, R.map(Item));

  return (
    <div className="container">
      <div className="row">
        <strong>Rendering a list of people using composition:</strong>
        {PersonsList1}
      </div>
      <div className="row">
        <strong>Rendering a list of people in a more functional way:</strong>
        {PersonsList(persons)}
      </div>
    </div>
  );
}

export default App;
