import   { useState } from 'react';

function ParentComponent() {
  const [data, setData] = useState('');

  const handleData = (childData) => {
    setData(childData);
  };

  return<> <ChildComponent onData={handleData} />  To pass data from a child component up to a parent, you can pass a callback function from the parent to the child as a prop. The child then calls this function with the data as an argument.</>;
}
export default ParentComponent
function ChildComponent({ onData }) {
  const sendData = () => {
    onData('some datas');
  };

  return <button onClick={sendData}>Send Data</button>;
}
