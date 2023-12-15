import React from 'react';

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((res) => res.json())
      .then((data) => setData(data.title));
  }, []);

  return (
    <div>
      <h1>Fetched data bellow</h1>
      <h2>{!data ? 'Loading...' : data}</h2>
    </div>
  );
}

export default App;
