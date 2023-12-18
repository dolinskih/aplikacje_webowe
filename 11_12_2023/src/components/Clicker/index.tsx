import React from 'react';
import Paragraph from '../Paragraph';

function Clicker() {
    const [count, setCount] = React.useState<number>(0)

    return (
        <div>
            <Paragraph content={`You've clicked ${count} times`}/>
            <button
                onClick={()=>{
                    setCount(count + 1)
                }}
            >
                Click me!
            </button>
        </div>
    );
}

export default Clicker
