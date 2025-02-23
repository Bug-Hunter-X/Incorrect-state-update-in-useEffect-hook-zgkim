```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect logic to update count based on previous value
    setCount(prevCount => prevCount + 1);
  }, []); // Empty dependency array means this runs only once

  return <div>Count: {count}</div>;
} 
```