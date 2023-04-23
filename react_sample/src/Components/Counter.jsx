import React from 'react'
export default function Counter()
{
    //changes to this aren't visible because the page doesn't re-render when this
    //value changes
    let counter=0
    //syntax: [currentState,setState]=UseState(InitialValue)
    //here, whenever setState is called, current state is changes, so it renders the
    //value on webpage again, thus the new value is visible
    const [count,setCount]=React.useState(0)
    function increment()
    {
        counter+=1
        console.log("incremented to ",counter)
        setCount(count+1)
        console.log("with state counter incremented to ",count)
    }
    return(
        <div>
            <h1>Counter</h1>
            <h2>Current value of static without state usage counter: {counter}</h2>
            <h2>Current value of with state usage counter: {count}</h2>
            <button onClick={increment}>Increment counter</button>
        </div>
    )
}