// AdvancedCounter.jsx
import React, { useState, useEffect } from 'react';

const AdvancedCounter = () => {
    const [count, setCount] = useState(() => {
        const saved = localStorage.getItem('count');
        return saved !== null ? parseInt(saved, 10) : 0;
    });

    const [step, setStep] = useState(1);

    useEffect(() => {
        localStorage.setItem('count', count);
    }, [count]);

    const increment = () => setCount(prev => prev + step);
    const decrement = () => setCount(prev => prev - step);
    const reset = () => setCount(0);

    return (
        <div style={styles.container}>
            <h2>🚀 Advanced Counter</h2>
            <div style={styles.counter}>{count}</div>
            <div style={styles.controls}>
                <button onClick={decrement}>−</button>
                <button onClick={reset}>Reset</button>
                <button onClick={increment}>+</button>
            </div>
            <div style={styles.stepControl}>
                <label>Step:</label>
                <input
                    type="number"
                    value={step}
                    onChange={e => setStep(Number(e.target.value))}
                    min="1"
                />
            </div>
        </div>
    );
};

const styles = {
    container: {
        textAlign: 'center',
        fontFamily: 'Arial',
        marginTop: '50px',
    },
    counter: {
        fontSize: '48px',
        margin: '20px 0',
    },
    controls: {
        display: 'flex',
        justifyContent: 'center',
        gap: '10px',
        marginBottom: '20px',
    },
    stepControl: {
        marginTop: '10px',
    },
};

export default AdvancedCounter;