import React from 'react';

// Functional Component that takes a name prop
const Greeting = ({ name }) => {
  return (
    <div>
      <h1>Hello, {name}</h1>
    </div>
  );
};

// Example usage of the Greeting component
const App = () => {
  return (
    <div>
      <Greeting name="Hello World" />
    </div>
  );
};

export default App;
