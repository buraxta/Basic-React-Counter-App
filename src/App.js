import Counter from "./components/Counter";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState([
    {
      id: 1,
      value: 0,
    },
    {
      id: 2,
      value: 0,
    },
    {
      id: 3,
      value: 0,
    },
  ]);


  const handleCounter = () => {
    const newCounter = count.length ? 
    { id: count[count.length-1].id + 1, value: 0 }:
    { id: 1, value: 0 };

    setCount([...count, newCounter]);
    console.log(count);
  };

  const handleDelete = (id) => {
    const newCount = count.filter((e) => e.id !== id);
    setCount(newCount);
  };

  const handleIncrement = (id) => {
    const newCount = count.map((e) =>{
      if (e.id === id) {
        return{
          ...e,
          value: e.value + 1
        }
      }
      return e;
    }
    );
    setCount(newCount);
  };

  const handleDecrement = (id) => {
    const newCounter = count.map(e => {
      if(e.id === id){
        if (e.value > 0) {
          return{
            ...e,
            value: e.value -= 1
          }          
        }
      }
      return e;
    })
    setCount(newCounter);
  };

  const handleReset = () => {
    const newCounter = count.map(e => {
      return(
        {
          ...e,
          value: 0
        }
      )
    })
    setCount(newCounter);

  }

  return (
    <div className="container" style={ {width: "500px"} }>
      <Navbar count={count.length} onAdd={handleCounter} />
      <button onClick={handleReset} className="btn ms-3 fw-bold btn-primary">Reset</button>
      {count.map((counter) => (
        <Counter
          value={counter.value}
          id={counter.id}
          onDelete={handleDelete}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
        />
      ))}
    </div>
  );
}

export default App;
