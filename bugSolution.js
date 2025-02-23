```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct way to update count using functional update
    setCount(prevCount => prevCount + 1);
  }, []); // Empty dependency array means this runs only once

  return <div>Count: {count}</div>;
}
```